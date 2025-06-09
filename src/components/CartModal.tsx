"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'

interface CartModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

// Add these type definitions after the imports
type OrderBumpKey = 'bump1' | 'bump2' | 'bump3' | 'bump4';

const MAIN_PRODUCT_PRICE = 19.00;
const ORDER_BUMP_PRICE = 7.00;
const ORDER_BUMP_ITEMS: Record<OrderBumpKey, string> = {
  bump1: "Donald Trump's Deal-Sealing One-Liners",
  bump2: "Elon Musk's Shock-and-Awe Persuasion Tactics",
  bump3: "Jeff Bezos' Relentless Persuasion Tactics",
  bump4: "Mark Cuban's Deal-Closing Tactics"
};

export default function CartModal({ isOpen, setIsOpen }: CartModalProps) {
  const [step, setStep] = useState<'profile' | 'payment'>('profile')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedCountry: 'us'
  })
  const [orderBumps, setOrderBumps] = useState<Record<OrderBumpKey, boolean>>({
    bump1: false,
    bump2: false,
    bump3: false,
    bump4: false
  })

  useEffect(() => {
    // Detect user's country on component mount
    async function detectCountry() {
      try {
        console.log('Checking cached country data...');
        
        // Check cache first
        const cachedData = localStorage.getItem('countryData');
        if (cachedData) {
          const { countryCode, timestamp } = JSON.parse(cachedData);
          const cacheAge = Date.now() - timestamp;
          const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
          
          if (cacheAge < CACHE_DURATION) {
            console.log('Using cached country:', countryCode);
            setFormData(prev => ({
              ...prev,
              selectedCountry: countryCode
            }));
            return;
          }
          console.log('Cache expired, fetching fresh data...');
        }

        // Fetch fresh data
        console.log('Detecting country...');
        const response = await fetch('https://api.ipify.org?format=json');
        const { ip } = await response.json();
        console.log('Detected IP:', ip);

        // Get country from IP
        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await geoResponse.json();
        console.log('Geolocation response:', data);
        
        if (data.country_code) {
          const countryCode = data.country_code.toLowerCase();
          console.log(`Setting country to: ${countryCode}`);
          
          // Cache the result
          localStorage.setItem('countryData', JSON.stringify({
            countryCode,
            timestamp: Date.now()
          }));
          
          setFormData(prev => ({
            ...prev,
            selectedCountry: countryCode
          }));
        } else {
          console.warn('No country code detected:', data.error || 'Unknown reason');
          // If API fails, try to use cached data even if expired
          if (cachedData) {
            const { countryCode } = JSON.parse(cachedData);
            console.log('Falling back to cached country:', countryCode);
            setFormData(prev => ({
              ...prev,
              selectedCountry: countryCode
            }));
          }
        }
      } catch (error) {
        console.error('Error detecting country:', error);
        // On error, try to use cached data even if expired
        try {
          const cachedData = localStorage.getItem('countryData');
          if (cachedData) {
            const { countryCode } = JSON.parse(cachedData);
            console.log('Error occurred, using cached country:', countryCode);
            setFormData(prev => ({
              ...prev,
              selectedCountry: countryCode
            }));
          }
        } catch (cacheError) {
          console.error('Error reading cache:', cacheError);
        }
      }
    }
    detectCountry();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <div className="flex justify-center space-x-8">
                    <div className={`flex-1 text-center pb-4 ${step === 'profile' ? 'border-b-2 border-blue-500' : ''}`}>
                      <span className="text-lg font-medium">Your Profile</span>
                      <p className="text-sm text-gray-500">Contact Details</p>
                    </div>
                    <div className={`flex-1 text-center pb-4 ${step === 'payment' ? 'border-b-2 border-blue-500' : ''}`}>
                      <span className="text-lg font-medium">Payment</span>
                      <p className="text-sm text-gray-500">Billing Details</p>
                    </div>
                  </div>
                </div>

                {step === 'profile' ? (
                  /* Profile Form */
                  <div className="mt-8 space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address..."
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <div className="flex">
                        <div className="w-[120px] mr-2">
                          <PhoneInput
                            country={formData.selectedCountry}
                            value=""
                            onChange={(_, countryData: any) => {
                              if (countryData && countryData.countryCode) {
                                setFormData(prev => ({
                                  ...prev,
                                  selectedCountry: countryData.countryCode
                                }));
                              }
                            }}
                            inputStyle={{
                              width: '100%',
                              height: '48px',
                              fontSize: '16px',
                              padding: '8px 8px 8px 48px'
                            }}
                            buttonStyle={{
                              border: '1px solid #D1D5DB',
                              borderRight: 'none',
                              backgroundColor: 'transparent'
                            }}
                            containerStyle={{
                              border: 'none'
                            }}
                            dropdownStyle={{
                              width: '300px',
                              padding: '8px',
                              maxHeight: '300px',
                              position: 'fixed',
                              zIndex: 9999
                            }}
                            preferredCountries={['us', 'ca', 'gb', 'au']}
                            enableSearch={false}
                          />
                        </div>
                        <input
                          type="tel"
                          inputMode="numeric"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            setFormData(prev => ({
                              ...prev,
                              phone: value
                            }));
                          }}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <style jsx global>{`
                        .react-tel-input .country-list {
                          width: 300px;
                          max-height: 300px;
                          padding: 8px;
                          transform: translate(-1px, 0) !important;
                          top: auto !important;
                          position: fixed !important;
                          scrollbar-width: thin;
                          overflow-y: auto;
                          scroll-behavior: auto;
                          z-index: 9999;
                          margin-top: 1px;
                        }
                        .react-tel-input .country-list .country {
                          display: flex;
                          align-items: center;
                          padding: 8px 10px;
                          position: relative;
                        }
                        .react-tel-input .country-list .country .dial-code {
                          margin-left: auto;
                          color: #666;
                        }
                        .react-tel-input .flag-dropdown {
                          border-right: none;
                          background: transparent;
                        }
                        .react-tel-input .selected-flag {
                          background: transparent;
                          width: 50px;
                        }
                        .react-tel-input .country .flag {
                          position: absolute;
                          left: 10px;
                        }
                        .react-tel-input .country .country-name {
                          margin-left: 45px;
                        }
                        .react-tel-input .form-control {
                          padding-left: 48px !important;
                        }
                        .react-tel-input .flag-dropdown.open .selected-flag {
                          background: transparent;
                        }
                        .react-tel-input .country-list .country.highlight {
                          background-color: transparent;
                        }
                        .react-tel-input .country-list::-webkit-scrollbar {
                          width: 8px;
                        }
                        .react-tel-input .country-list::-webkit-scrollbar-track {
                          background: #f1f1f1;
                        }
                        .react-tel-input .country-list::-webkit-scrollbar-thumb {
                          background: #888;
                          border-radius: 4px;
                        }
                        .react-tel-input .country-list .country:hover {
                          background-color: rgba(0, 0, 0, 0.05);
                        }
                        .react-tel-input .country-list {
                          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                          border: 1px solid #D1D5DB;
                          border-radius: 6px;
                          background: white;
                        }
                        .react-tel-input .form-control {
                          width: 120px !important;
                        }
                      `}</style>
                    </div>

                    {/* Continue Button */}
                    <button
                      onClick={() => setStep('payment')}
                      className="w-full bg-red-500 text-white py-4 rounded-md hover:bg-red-600 transition-colors font-semibold text-lg"
                    >
                      Go To Step #2
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-center text-sm text-gray-500">
                      We Respect Your Privacy & Information.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex justify-center space-x-4 mt-6">
                      <div className="relative w-[300px] h-[40px]">
                        <Image
                          src="/payment/payment-methods.png"
                          alt="Accepted Payment Methods"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Payment Step */
                  <div className="mt-8 space-y-6">
                    {/* Back Button */}
                    <button
                      onClick={() => setStep('profile')}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Edit Profile Details
                    </button>

                    {/* Main Product Selection */}
                    <div className="mt-6 mb-8">
                      {/* Headers */}
                      <div className="grid grid-cols-12 mb-4">
                        <div className="col-span-6">
                          <span className="text-2xl font-bold">Item</span>
                        </div>
                        <div className="col-span-3 text-center">
                          <span className="text-2xl font-bold">Quantity</span>
                        </div>
                        <div className="col-span-3 text-right">
                          <span className="text-2xl font-bold">Price</span>
                        </div>
                      </div>

                      {/* Separator Line */}
                      <div className="border-t border-gray-200 mb-4"></div>

                      {/* Product Selection */}
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="mainProduct"
                              name="product"
                              checked={true}
                              readOnly
                              className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="mainProduct" className="text-xl">
                              The Talent Funnel System
                            </label>
                          </div>
                        </div>
                        <div className="col-span-3 text-center">
                          <span className="text-xl">1</span>
                        </div>
                        <div className="col-span-3 text-right">
                          <span className="text-xl text-[#0066CC]">$19.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Order Bumps */}
                    <div className="space-y-4 mb-8">
                      <div className="bg-[#FFFCE1] border-[3px] border-dashed border-[#9B8E3B] rounded-lg overflow-hidden">
                        <div className="bg-[#FFFF90] p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 flex items-start mt-1">
                              <span className="text-[#FF0000] text-2xl font-bold animate-[pulse_0.5s_ease-in-out_infinite]" style={{ fontFamily: 'Arial' }}>➜</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                checked={orderBumps.bump1}
                                onChange={(e) => setOrderBumps({ ...orderBumps, bump1: e.target.checked })}
                                className="mt-1.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <div>
                                <h3 className="text-[#37A000] text-xl font-semibold tracking-wide" style={{ fontFamily: 'system-ui' }}>
                                  Black Friday Special #1: Steal Donald Trump's Deal-Sealing<br />
                                  One-Liners—Just $7!
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pb-4">
                          <div className="text-[#CC0000] font-bold text-lg">SWIPE FILE: 24 Outrageous One-Liners That Shocked the Room—But Closed the Deal Anyway</div>
                          <p className="mt-2 text-gray-700">Discover the shock-and-awe tactics behind Donald Trump's most jaw-dropping one-liners that left audiences stunned yet persuaded. This exclusive swipe file reveals 24 of his boldest statements and the persuasive power that made them irresistible. Apply these strategies to captivate your audience, bulldoze through objections, and seal your own deals with confidence. Don't miss out—add "Donald Trump's Most Persuasive Moments" to your order now for just $7!</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFCE1] border-[3px] border-dashed border-[#9B8E3B] rounded-lg overflow-hidden">
                        <div className="bg-[#FFFF90] p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 flex items-start mt-1">
                              <span className="text-[#FF0000] text-2xl font-bold animate-[pulse_0.5s_ease-in-out_infinite]" style={{ fontFamily: 'Arial' }}>➜</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                checked={orderBumps.bump2}
                                onChange={(e) => setOrderBumps({ ...orderBumps, bump2: e.target.checked })}
                                className="mt-1.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <div>
                                <h3 className="text-[#37A000] text-xl font-semibold tracking-wide" style={{ fontFamily: 'system-ui' }}>
                                  Black Friday Special #2: Steal Elon Musk's Shock-and-Awe<br />
                                  Persuasion Tactics—Just $7!
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pb-4">
                          <div className="text-[#CC0000] font-bold text-lg">SWIPE FILE: 24 Wild Quotes That Made Elon Musk a Global Sensation—and How You Can Use Them to Captivate, Persuade, and Profit</div>
                          <p className="mt-2 text-gray-700">Unlock the secrets behind Elon Musk's most jaw-dropping quotes that shook the world. This exclusive swipe file reveals 24 of his boldest statements and the persuasion tactics that made them unforgettable. Apply these strategies to electrify your audience, crush objections, and boost your profits. Don't miss out—add "Elon Musk's Most Persuasive Moments" to your order now for just $7!</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFCE1] border-[3px] border-dashed border-[#9B8E3B] rounded-lg overflow-hidden">
                        <div className="bg-[#FFFF90] p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 flex items-start mt-1">
                              <span className="text-[#FF0000] text-2xl font-bold animate-[pulse_0.5s_ease-in-out_infinite]" style={{ fontFamily: 'Arial' }}>➜</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                checked={orderBumps.bump3}
                                onChange={(e) => setOrderBumps({ ...orderBumps, bump3: e.target.checked })}
                                className="mt-1.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <div>
                                <h3 className="text-[#37A000] text-xl font-semibold tracking-wide" style={{ fontFamily: 'system-ui' }}>
                                  Black Friday Special #3: Steal Jeff Bezos' Relentless<br />
                                  Persuasion Tactics—Just $7!
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pb-4">
                          <div className="text-[#CC0000] font-bold text-lg">SWIPE FILE: 24 Relentless Lines Jeff Bezos Used to Shape the Industry—And How You Can Use Them to Persuade, Dominate, and Scale Like Amazon</div>
                          <p className="mt-2 text-gray-700">Unlock the game-changing strategies behind Jeff Bezos' most powerful lines that reshaped an entire industry. This exclusive swipe file reveals 24 of his most relentless statements and the persuasion tactics that fueled Amazon's rise to the top. Apply these principles to persuade your audience, dominate your market, and scale your business to new heights. Don't miss out—add "Jeff Bezos' Most Persuasive Moments" to your order now for just $7!</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFCE1] border-[3px] border-dashed border-[#9B8E3B] rounded-lg overflow-hidden">
                        <div className="bg-[#FFFF90] p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 flex items-start mt-1">
                              <span className="text-[#FF0000] text-2xl font-bold animate-[pulse_0.5s_ease-in-out_infinite]" style={{ fontFamily: 'Arial' }}>➜</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                checked={orderBumps.bump4}
                                onChange={(e) => setOrderBumps({ ...orderBumps, bump4: e.target.checked })}
                                className="mt-1.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <div>
                                <h3 className="text-[#37A000] text-xl font-semibold tracking-wide" style={{ fontFamily: 'system-ui' }}>
                                  Black Friday Special #4: Steal Mark Cuban's Deal-Closing<br />
                                  Tactics—Just $7!
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pb-4">
                          <div className="text-[#CC0000] font-bold text-lg">SWIPE FILE: 24 Persuasion Tactics Mark Cuban Used to Outsmart Competitors—And How You Can Leverage Them to Close More Deals and Dominate Your Industry</div>
                          <p className="mt-2 text-gray-700">Uncover the insider secrets behind Mark Cuban's most cunning persuasion tactics that left competitors in the dust. This exclusive swipe file reveals 24 of his game-changing strategies to outsmart rivals, close more deals, and dominate your market. Ready to play in the big leagues? Add "Mark Cuban's Most Persuasive Moments" to your order now for just $7!</p>
                        </div>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-8">
                      <h2 className="text-2xl mb-6">Order Summary</h2>
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="grid grid-cols-12 pb-2 border-b border-gray-200">
                          <div className="col-span-6">
                            <span className="text-lg text-gray-700">Item</span>
                          </div>
                          <div className="col-span-3 text-center">
                            <span className="text-lg text-gray-700">Quantity</span>
                          </div>
                          <div className="col-span-3 text-right">
                            <span className="text-lg text-gray-700">amount</span>
                          </div>
                        </div>

                        {/* Main Product */}
                        <div className="grid grid-cols-12 items-center">
                          <div className="col-span-6">
                            <span className="text-gray-800">The Talent Funnel System</span>
                          </div>
                          <div className="col-span-3 text-center">
                            <span>1</span>
                          </div>
                          <div className="col-span-3 text-right">
                            <span className="text-[#0066CC]">${MAIN_PRODUCT_PRICE.toFixed(2)}</span>
                          </div>
                        </div>

                        {/* Order Bumps */}
                        {Object.entries(orderBumps).map(([key, isSelected]) => 
                          isSelected && (
                            <div key={key} className="grid grid-cols-12 items-center">
                              <div className="col-span-6">
                                <span className="text-gray-800">{ORDER_BUMP_ITEMS[key as OrderBumpKey]}</span>
                              </div>
                              <div className="col-span-3 text-center">
                                <span>1</span>
                              </div>
                              <div className="col-span-3 text-right">
                                <span className="text-[#0066CC]">${ORDER_BUMP_PRICE.toFixed(2)}</span>
                              </div>
                            </div>
                          )
                        )}

                        {/* Order Total */}
                        <div className="grid grid-cols-12 items-center pt-4 border-t border-gray-200">
                          <div className="col-span-6">
                            <span className="text-xl font-medium">Order Total</span>
                          </div>
                          <div className="col-span-3" />
                          <div className="col-span-3 text-right">
                            <span className="text-xl text-[#0066CC] font-medium">
                              ${(MAIN_PRODUCT_PRICE + (Object.values(orderBumps).filter(Boolean).length * ORDER_BUMP_PRICE)).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Fields */}
                      <div className="mt-8 space-y-4">
                        <div>
                          <label className="block text-[#1F2937] text-lg mb-2">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 1234 1234 1234"
                            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                          />
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="block text-[#1F2937] text-lg mb-2">Expiration</label>
                            <input
                              type="text"
                              placeholder="MM / YY"
                              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-[#1F2937] text-lg mb-2">CVC</label>
                            <input
                              type="text"
                              placeholder="CVC"
                              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Complete Order Button */}
                      <button className="w-full mt-6 bg-[#E53935] text-white py-4 rounded-lg hover:bg-[#D32F2F] transition-colors font-semibold text-xl flex items-center justify-center">
                        <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Complete Order
                      </button>

                      {/* Secure Payment Notice */}
                      <p className="text-center text-gray-500 mt-4">
                        * 100% Secure & Safe Payments *
                      </p>

                      {/* Payment Methods */}
                      <div className="flex justify-center mt-6">
                        <div className="relative w-[300px] h-[40px]">
                          <Image
                            src="/payment/payment-methods.png"
                            alt="Accepted Payment Methods"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 