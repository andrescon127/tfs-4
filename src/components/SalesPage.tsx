"use client"

import Image from 'next/image'
import { useState } from 'react'
import CartModal from '../components/CartModal'

export default function SalesPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#020B1C] text-white">
      {/* Hero Section */}
      <div className="text-center py-12 bg-[#020B1C]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-xl text-gray-300 mb-4 uppercase tracking-wider font-semibold">
            Attention: Digital Entrepreneurs & Business Owners
          </p>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-yellow-400">
              Escape The Day-To-Day Grind Of Your Business<br />
              <span className="text-red-600">Automatically Attract</span> The Very Best Talent And<br />
              Reduce Your Hiring Costs by 65% (Or More)...
            </span>
          </h1>

          <p className="text-xl mb-8">
            Without Reading a Single Resume… Spending Countless Hours On Pointless Interviews… Or Wasting Thousands of Dollars On "Vampire Headhunters"...
          </p>

          <div className="text-center my-12">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-red-600 text-white px-12 py-4 text-2xl font-bold rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
            >
              INSTANT DOWNLOAD
            </button>

            <div className="mt-8 relative w-full max-w-2xl mx-auto h-[400px]">
              <Image
                src="/talent-funnel-system.webp"
                alt="The Talent Funnel System"
                fill
                className="object-contain"
                priority
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </div>

          <p className="text-gray-400 mt-4 mb-8">
            Start building your world-class team in the next 5 minutes!
          </p>
        </div>
      </div>

      {/* Main Sales Letter */}
      <div className="bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white border border-red-500 rounded-lg p-12 text-black">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-12">Dear Fellow Entrepreneur,</h2>

              <p className="text-2xl mb-8">
                If you'd like to escape the day-to-day operations of your business… and finally work on strategy so you can scale…
              </p>

              <p className="text-2xl mb-8">
                Or you want to cut your hiring costs by 65%... and effortlessly attract the best talent for your business, without expensive headhunters…
              </p>

              <p className="text-2xl mb-8">
                Or ever reading a single resume…
              </p>

              <p className="text-2xl mb-12">
                Then <span className="font-bold">The Talent Funnel System</span> was designed for you.
              </p>

              <p className="text-2xl mb-8">
                If you're sick and tired of wasting your time, energy, and money on recruiters who don't understand your business….
              </p>

              <p className="text-2xl mb-8">
                Or you're tired of all of the costly mis-hires that traditional recruiting methods get you…
              </p>

              <p className="text-2xl mb-8">
                And want to protect your business from these "bad apples" that not only drain your energy and ruin team morale… but also hold your business back from achieving it's true potential…
              </p>

              <p className="text-2xl font-semibold mb-12">
                Then The Talent Funnel System is for you.
              </p>

              <p className="text-2xl mb-8">
                Inside The Talent Funnel System... you'll discover the secrets to quickly and effortlessly attracting the best talent WITHOUT reading a single resume…
              </p>

              <p className="text-2xl mb-8">
                And without wasting hundreds of hours on pointless interviews…
              </p>

              <p className="text-2xl font-semibold mb-8">
                Best of all?
              </p>

              <p className="text-2xl mb-8">
                By the end of this short yet powerful training, you'll immediately have the solution to your business's growth bottleneck – an automated talent pipeline that puts you in front of the highest quality candidates that can solve your biggest business challenges… and grow your business for you…
              </p>

              <p className="text-2xl mb-8">
                So you can spend more time living the life you want…
              </p>

              <p className="text-2xl mb-12">
                Or spend more time on strategy and business growth that puts more money in your pocket.
              </p>

              <p className="text-2xl mb-8">
                For just <span className="font-bold">$19 bucks</span>, I'm 100% confident you'll become a "talent super magnet" immediately after going through this no fluff and all substance training. Because I'm so confident, if you don't immediately feel you got <span className="font-bold">10X the value</span> of your $19 investment, I'll give you back your money.
              </p>

              <div className="text-center my-12">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-red-600 text-white px-12 py-4 text-2xl font-bold rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
                >
                  INSTANT DOWNLOAD
                </button>

                <div className="mt-8 relative w-full max-w-2xl mx-auto h-[400px]">
                  <Image
                    src="/talent-funnel-system.webp"
                    alt="The Talent Funnel System"
                    fill
                    className="object-contain"
                    priority
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>

              <div className="my-16">
                <h2 className="text-3xl font-bold mb-8">
                  When you get your copy of The Talent Funnel System, here's what you'll discover:
                </h2>

                <ul className="space-y-8">
                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      The exact automated hiring blueprint that helped me generate over <span className="font-semibold">$250 MILLION in sales</span> — while working less than 20 hours a week <span className="italic">(Hint: Yes – A.I. is part of the equation BUT it isn't everything. In fact, overlying on A.I. for talent needs could be detrimental)</span>
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      And how it helped free me from the shackles of operating my business, save me hundreds of thousands of dollars in recruiting fees, and positioned my business for a <span className="font-semibold">life changing 8-figure exit</span>.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      Why virtually all headhunters are <span className="italic">"legalized thieves"</span> … and how a simple automated talent pipeline will free you from ever having to fork over a single dollar to these <span className="italic">"talent vampires"</span>…
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      How a simple <span className="italic">"video test"</span> could eliminate virtually all lazy applicants instantly… saving you from wasting thousands of hours on boring resumes, pointless interviews, and training bad hires that will only hold your business back from its true growth potential…
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      Why you should never trust a resume (even if it's honest) and the simple <span className="italic">"resume replacement"</span> hack that will FREE you from ever having to read a resume ever again.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      How this <span className="italic">"currency exchange"</span> hack doubles your team's work output for a fraction of the price without having to manage anyone <span className="italic">(HINT: less is truly more)</span>.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      The automatic <span className="italic">"No-Deadline"</span> Trick that exposes a candidate's REAL work ethic and urgency—not the B.S. they claim in interviews <span className="italic">(Warning: This one trick could save you from 90% of bad hires that could cost you hundreds of hours and tens of thousands of dollars)</span>
                    </p>
                  </li>

                  <li className="flex items-start">
                    <span className="text-red-600 text-2xl mr-4 shrink-0">✓</span>
                    <p className="text-xl">
                      And the single most important thing to avoid when it comes to hiring talent overseas…
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-12 rounded-lg my-16">
                <h3 className="text-3xl font-bold mb-6">What is a "Talent Funnel"?</h3>
                <p className="text-xl leading-relaxed">
                  Just like a Sales Funnel automatically attracts and converts your ideal customers, a Talent Funnel does the same for world-class talent. It's the genius application of proven marketing principles to your hiring process—systematically attracting, qualifying, and recruiting top 1% performers while filtering out the time-wasters.
                </p>
                <p className="text-xl leading-relaxed mt-6">
                  Where your Sales Funnel generates revenue, your Talent Funnel generates freedom—slashing recruitment costs by 65%, eliminating resume reading forever, and finally giving you the high-performing team that works while you don't. It's the ultimate escape route from the day-to-day prison of your business.
                </p>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="bg-red-600 text-white px-12 py-4 text-2xl font-bold rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
                  >
                    INSTANT DOWNLOAD
                  </button>
                </div>
              </div>

              <div className="my-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Who Am I And Why Should You Listen To Me?</h2>
                
                {/* Author Image - Centered */}
                <div className="relative w-64 h-64 mx-auto mb-12">
                  <Image
                    src="/andrew-photo.jpg"
                    alt="Andrew Contreras"
                    fill
                    className="object-cover rounded-full"
                    priority
                    quality={100}
                  />
                </div>

                {/* Author Bio - Full Width */}
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed">
                    Hi, I'm Andrew Contreras. I've spent more than a decade working as a marketer and digital entrepreneur – in the trenches building multi 8 figure businesses and elite teams that scale without my needing to handhold or babysit.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    In fact, building a world class team was crucial in my ability to not only step away from the day-to-day operations of my business, but it also allowed me to generate more than <span className="font-semibold">$250,000,000 dollars in PROFITABLE sales</span>, travel the world with my family… and eventually exit my company for an 8-figure sum so I never have to worry about money for the rest of my life.
                  </p>

                  <p className="text-xl leading-relaxed font-semibold">
                    But hiring wasn't always easy for me…
                  </p>

                  <p className="text-xl leading-relaxed">
                    When I first realized I couldn't scale my business alone – and decided I needed smart, hard working people to execute on my vision – I made pretty much every mistake you could imagine:
                  </p>

                  <ul className="space-y-4 pl-8 list-decimal text-xl">
                    <li>I wasted countless hours reading boring resumes</li>
                    <li>I wasted hundreds of hours on interviews with the wrong candidates</li>
                    <li>And wasted tens of thousands of dollars on so-called "expert headhunters" who didn't know a damn thing about my business let alone the kinds of people that could actually execute…</li>
                  </ul>

                  <p className="text-xl leading-relaxed font-semibold">
                    But the most frustrating part?
                  </p>

                  <p className="text-xl leading-relaxed">
                    Every business coach and mentor I had told me hiring was the key to unlocking exponential growth in my business…
                  </p>
                </div>
              </div>

              {/* New Subheadline */}
              <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Top Talent Is The Secret To Exponential Growth…
                </h2>
              </div>

              {/* Quotes Section */}
              <div className="max-w-4xl mx-auto px-4 space-y-8 mb-16">
                {/* Steve Jobs Quote - Image Left */}
                <div className="bg-gray-800 p-8 rounded-lg flex flex-row items-center space-x-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/leaders/steve-jobs.jpg"
                      alt="Steve Jobs"
                      fill
                      className="object-cover rounded-full"
                      priority
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 text-white">
                      "The secret of my success is that we have gone to exceptional lengths to hire the best people in the world."
                    </p>
                    <p className="text-gray-300 font-semibold">
                      - Steve Jobs, Co-founder and CEO of Apple
                    </p>
                  </div>
                </div>

                {/* Felix Dennis Quote - Image Right */}
                <div className="bg-gray-800 p-8 rounded-lg flex flex-row-reverse items-center space-x-6 space-x-reverse">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/leaders/felix-dennis.jpg"
                      alt="Felix Dennis"
                      fill
                      className="object-cover rounded-full"
                      priority
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 text-white">
                      "Talent is the lifeblood of growing any business. The ability to spot it, nurture it, and retain it separates great companies from merely good ones."
                    </p>
                    <p className="text-gray-300 font-semibold">
                      - Felix Dennis, Founder of Maxim Magazine
                    </p>
                  </div>
                </div>

                {/* Marc Benioff Quote - Image Left */}
                <div className="bg-gray-800 p-8 rounded-lg flex flex-row items-center space-x-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/leaders/marc-benioff.jpg"
                      alt="Marc Benioff"
                      fill
                      className="object-cover rounded-full"
                      priority
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 text-white">
                      "Acquiring the right talent is the most important key to growth. Hiring was – and still is – the most important thing we do."
                    </p>
                    <p className="text-gray-300 font-semibold">
                      - Marc Benioff, Founder, Chairman and CEO of Salesforce
                    </p>
                  </div>
                </div>

                {/* Lawrence Bossidy Quote - Image Right */}
                <div className="bg-gray-800 p-8 rounded-lg flex flex-row-reverse items-center space-x-6 space-x-reverse">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/leaders/lawrence-bossidy.jpg"
                      alt="Lawrence Bossidy"
                      fill
                      className="object-cover rounded-full"
                      priority
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 text-white">
                      "I am convinced that nothing we do is more important than hiring and developing people. At the end of the day, you bet on people, not on strategies."
                    </p>
                    <p className="text-gray-300 font-semibold">
                      - Lawrence Bossidy, Former CEO of AlliedSignal
                    </p>
                  </div>
                </div>

                {/* Marcus Buckingham Quote - Image Left */}
                <div className="bg-gray-800 p-8 rounded-lg flex flex-row items-center space-x-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/leaders/marcus-buckingham.jpg"
                      alt="Marcus Buckingham"
                      fill
                      className="object-cover rounded-full"
                      priority
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl italic mb-4 text-white">
                      "Talent is the multiplier. The more energy and attention you invest in it, the greater the yield."
                    </p>
                    <p className="text-gray-300 font-semibold">
                      - Marcus Buckingham, Author and Business Consultant
                    </p>
                  </div>
                </div>
              </div>

              {/* New Subheadline */}
              <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  But I Sucked At Hiring…
                </h2>
              </div>

              {/* Reality Copy Section */}
              <div className="max-w-4xl mx-auto px-4 space-y-8">
                <p className="text-xl leading-relaxed">
                  No matter how hard I tried… no matter how many hours wasted, dollars spent, and useless recruiters hired…
                </p>

                <p className="text-xl leading-relaxed">
                  I still felt that the hiring process was taking me away from the things that mattered most in my business: sales, marketing, and fulfillment. And I feared that because of my lack of focus on those areas, my company would soon deteriorate… and eventually go bankrupt!
                </p>

                <p className="text-xl leading-relaxed font-semibold">
                  Hiring became a "damned if you do, damned if you don't" situation for me…
                </p>

                <p className="text-xl leading-relaxed">
                  However, fortunately, I was able to learn a few things from all my trial and error…  that led me to a unique, one-of-a-kind method that not only saved me from the crushing pressures of operating my business…
                </p>

                <p className="text-xl leading-relaxed">
                  But allowed me to exit it permanently…  for a multi-8-figure sum and change my family's life forever.
                </p>

                {/* New Subheadline */}
                <div className="text-center my-16">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    So What Did I Discover?
                  </h2>
                </div>

                {/* Discovery Copy Section */}
                <div className="max-w-4xl mx-auto px-4 space-y-8">
                  <p className="text-xl leading-relaxed">
                    Well, for starters, I learned that the majority of headhunters are not only clueless on how to get you the best talent… they're also NOT incentivized to get you the best deal… In fact, quite the opposite – they're incentivized to get you the most expensive talent. Because most recruiters receive a percentage of the first year's salary as part of their payment. <span className="font-semibold">Incredible, right?</span>
                  </p>

                  <p className="text-xl leading-relaxed">
                    Next, I learned that traditional recruiting methods are outdated, inefficient, and misaligned with how modern businesses – especially online ones – actually work.
                  </p>

                  <p className="text-xl leading-relaxed">
                    The old school hiring process is like using a shotgun when what you really need is a sniper rifle… Better yet… a super <span className="font-semibold">"Talent Magnet"</span> that effortlessly attracts and quickly qualifies the best talent on the planet for your company on virtual auto-pilot…  at a fraction of the price it would normally cost you.
                  </p>

                  <p className="text-xl leading-relaxed">
                    Then finally, I made what was perhaps the biggest breakthrough discovery of all… one that would change the hiring game forever… <span className="font-semibold">Ready for it?</span> Well, I learned that the persuasion and marketing principles I used to attract millions of customers, and over $250,000,000 in sales, were just as relevant to hiring as they are to selling products and services.
                  </p>

                  <p className="text-xl leading-relaxed font-semibold italic">
                    So, I couldn't help but ask myself…
                  </p>
                </div>
              </div>

              {/* New Subheadline */}
              <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  "If I Can Build Multi Million Dollar Sales Funnels… Couldn't I Build Funnels to Attract and Qualify Top Talent?"
                </h2>
              </div>

              {/* Talent Funnel Development Copy */}
              <div className="max-w-4xl mx-auto px-4 space-y-8">
                <p className="text-xl leading-relaxed italic">
                  I mean, how hard could it be?"
                </p>

                <p className="text-xl leading-relaxed">
                  Well, it turns out much harder than I originally thought. While in principle I was right – it was a simple concept – I still didn't know what I didn't know when it came to building what I call <span className="font-semibold">"talent funnels"</span>... funnels designed and engineered to effortlessly attract, and quickly qualify, top talent on autopilot.
                </p>

                <p className="text-xl leading-relaxed">
                  However, over the course of 18 months, I spent practically every waking moment designing, building and testing countless talent funnel configurations until I finally cracked the code…
                </p>

                <p className="text-xl leading-relaxed">
                  And that's when <span className="font-semibold">The Talent Funnel System</span> was born. The very same system that allowed me to effortlessly attract, quickly qualify, and easily onboard world class talent… on autopilot… for a fraction of the cost I'd normally pay using conventional methods. The secret to scaling my business, escaping the day-to-day grind, and exiting with a BIG pay day.
                </p>

                <p className="text-xl leading-relaxed">
                  The Talent Funnel System was my ticket to the freedom from the day-to-day operations that got between me and spending more quality time with my wife and daughter… enjoying the activities I love, and traveling the world.
                </p>

                {/* New Subheadline */}
                <div className="text-center my-16">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    The Difference Between "Prison" And Freedom…
                  </h2>
                </div>

                {/* Personal Story Copy */}
                <div className="max-w-4xl mx-auto px-4 space-y-8">
                  <p className="text-xl leading-relaxed">
                    Let me share something personal: before I created this system, I was working 70+ hours weekly, constantly stressed, and missing my family's important moments. I was trapped in a prison of my own making—a <span className="italic">"successful"</span> business that was actually just a demanding job.
                  </p>

                  <p className="text-xl leading-relaxed">
                    Everything changed when I implemented <span className="font-semibold">The Talent Funnel System</span>. Within months, I had cut my work week nearly in half. Within a year, I was traveling while my business grew without my daily involvement. And eventually, I built a team so effective that my business became acquisition-worthy.
                  </p>
                </div>

                {/* New Subheadline */}
                <div className="text-center my-16">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Your Freedom Depends On This…
                  </h2>
                </div>

                {/* Final Copy Section */}
                <div className="max-w-4xl mx-auto px-4 space-y-8">
                  <p className="text-xl leading-relaxed">
                    If you can't build a team that executes without your constant supervision, you don't have a business—you have a job. And it's probably the worst job in the world because you're working for a demanding boss (yourself) with no time off.
                  </p>

                  <p className="text-xl leading-relaxed">
                    <span className="font-semibold">The Talent Funnel System</span> will change that forever. Stop trying to do everything yourself. Stop wasting thousands on recruiters who don't understand your business. Stop burning hours on interviews that go nowhere. Stop missing out on growth opportunities because you're stuck in the day-to-day.
                  </p>

                  <p className="text-2xl font-semibold text-center">
                    And START building your dream team today…
                  </p>

                  <div className="text-center space-y-4">
                    <p className="text-2xl font-bold">
                      Build your dream team. Reclaim your time. Get your life back. Scale your business.
                    </p>
                    
                    <p className="text-xl font-semibold text-red-600">
                      Click the button below now!
                    </p>
                  </div>
                </div>

                <div className="text-center my-16">
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="bg-red-600 text-white px-12 py-4 text-2xl font-bold rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
                  >
                    INSTANT DOWNLOAD
                  </button>
                  
                  <p className="text-xl text-black mt-6">
                    Effortlessly build your dream team with this proven system. Get started in the next 5 minutes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="bg-[#020B1C] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative h-[600px]">
              <Image
                src="/talent-funnel-system.webp"
                alt="The Talent Funnel System"
                fill
                className="object-contain"
                priority
                style={{ backgroundColor: 'transparent' }}
              />
            </div>

            {/* Product Details */}
            <div className="bg-[#0a192f] p-8 rounded-lg">
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">
                Here's What You're Getting
              </h2>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>The exact automated hiring blueprint that helped me generate over $250 MILLION in sales</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>Step-by-step guide to building your own Talent Funnel that attracts top performers on autopilot</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>How to instantly reduce your hiring costs by up to 65%</span>
                </li>
              </ul>

              <div className="mb-6">
                <p className="text-gray-400 text-lg mb-2">Regular Price: <span className="line-through">$47</span></p>
                <p className="text-white text-2xl font-bold">Today's Price Just $19</p>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full bg-red-600 text-white text-xl font-bold py-4 rounded mb-6 hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
              >
                INSTANT DOWNLOAD
              </button>

              {/* Payment Methods */}
              <div className="flex flex-col items-center space-y-2">
                <p className="text-gray-400 text-sm">Secure Payment Via:</p>
                <div className="relative w-[300px] h-[40px]">
                  <Image
                    src="/payment/payment-methods.png"
                    alt="Accepted Payment Methods"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-gray-400 text-xs">🔒 SSL Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="bg-[#020B1C] py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-500 text-lg font-semibold mb-4">100% SATISFACTION GUARANTEED</p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            MY IRON-CLAD, PUT-YOUR-MONEY-WHERE-YOUR-MOUTH-IS GUARANTEE
          </h2>

          <div className="text-left text-gray-300 space-y-6 max-w-3xl mx-auto">
            <p className="text-xl">
              Look, I didn't build a multi-million dollar business by screwing people over or peddling snake oil. I've moved millions of products to satisfied customers because I deliver the goods—period. End of story.
            </p>

            <p className="text-xl">
              But I also know you've been burned before. Hell, we ALL have. Some smooth-talking marketer promised you the moon and delivered a handful of dirt. I get it. Trust is earned, not given.
            </p>

            <p className="text-xl">
              So here's what I'm going to do for you—and this is so generous it borders on stupidity:
            </p>

            <p className="text-xl">
              You get EVERYTHING. The complete Talent Funnel System – the same blueprint that helped me escape the grind of my business and set me up for a massive exit. Use it all. Test it. Put it through the wringer for a full 30 days.
            </p>

            <p className="text-xl">
              If—for ANY reason, or NO reason at all—you decide this isn't the best $19 bucks you've ever spent, just send one email to support@yourcompany.com and say "I want my money back."
            </p>

            <p className="text-xl">
              That's it. No 20-question interrogation. No begging. No "let us help you make it work" nonsense.
            </p>

            <p className="text-xl">
              I'll personally see to it that every single penny is refunded to you within 24 hours. And here's the kicker—you KEEP the entire system anyway. Consider it my gift for giving me a chance.
            </p>

            <p className="text-xl font-semibold">
              Either this system transforms your business and makes you money, or you get it for FREE. I'm putting MY money where MY mouth is.
            </p>

            <p className="text-xl text-red-500 font-bold">
              The only way you lose is if you do nothing.
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="mt-12 bg-red-600 text-white text-xl font-bold py-4 px-12 rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200"
          >
            INSTANT DOWNLOAD
          </button>
        </div>
      </div>

      {/* Author Message Section */}
      <div className="bg-[#020B1C] py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Author Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/andrew-photo.jpg"
              alt="Andrew Contreras"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">
            Message From Andrew
          </h2>

          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            <span className="font-semibold">Remember:</span> if you can't build a reliable team, even the best business strategy in the world won't scale! Don't miss out on this proven system that will transform your hiring process and explode your growth. <span className="font-semibold">Click the button below now!</span>
          </p>

          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-red-600 text-white text-xl font-bold py-4 px-12 rounded hover:bg-red-700 transition-all transform hover:scale-105 duration-200 mb-8"
          >
            INSTANT DOWNLOAD
          </button>

          {/* Copyright Section */}
          <div className="mt-24 text-sm text-gray-500 space-y-4">
            <p>Copyright 2024 | Your Company Name | Terms & Conditions</p>
            <p className="text-xs max-w-2xl mx-auto">
              Nothing on this page, any of our websites, or any of our content or curriculum constitutes a promise or guarantee of results or future earnings, and we do not offer any legal, medical, tax or other professional advice. Any financial numbers referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average earnings, exact earnings, or promises for actual or future performance. Use caution and always consult your accountant, lawyer or professional advisor before acting on this or any information related to a lifestyle change or your business or finances. You alone are responsible and accountable for your decisions, actions and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance.
            </p>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </div>
  )
} 