export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Thank You For Your Purchase!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your order has been confirmed and your download is ready
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Check Your Email</p>
                    <p className="text-gray-600">
                      We've sent your download link and access instructions to your
                      email address
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Download Your Products</p>
                    <p className="text-gray-600">
                      Click the download links in your email to access your
                      purchased items
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Get Started</p>
                    <p className="text-gray-600">
                      Follow the getting started guide included in your download
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or need assistance, our support team is
                here to help:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Contact Support:</p>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p>Order ID: #123456</p>
        </div>
      </main>
    </div>
  )
} 