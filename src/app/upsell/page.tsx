import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

export default function UpsellPage() {
  const handleOneClickPurchase = () => {
    // Here you would integrate with your payment processor
    toast.success('Upsell purchased! Redirecting to thank you page...')
    redirect('/thank-you')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Wait! Special One-Time Offer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upgrade your purchase with our exclusive coaching program
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                1-on-1 Coaching Session
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  60-minute personalized coaching call
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom action plan development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority email support
                </li>
              </ul>
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-lg mb-2">
                  Regular Price: <span className="line-through">$297</span>
                </p>
                <p className="text-3xl font-bold text-green-600 mb-4">
                  Special Offer: $147
                </p>
                <button
                  onClick={handleOneClickPurchase}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors w-full md:w-auto"
                >
                  Yes, Add This To My Order!
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  What Others Are Saying
                </h3>
                <div className="space-y-4">
                  <blockquote className="italic text-gray-600">
                    "The coaching session was a game-changer for me. It helped me
                    implement everything I learned from the ebook."
                  </blockquote>
                  <p className="font-medium">- Sarah J.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => redirect('/thank-you')}
            className="text-gray-600 underline"
          >
            No thanks, I'll pass
          </button>
        </div>
      </main>
    </div>
  )
} 