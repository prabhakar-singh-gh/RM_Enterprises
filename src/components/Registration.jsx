import React from 'react'

function Registration() {
  return (
   <>
   
   {/* Registration Section */}
   <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Company Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">GST Registration</h3>
              <div className="space-y-2">
                <p><span className="font-bold">GST Registration Number:</span> 09BRGPM0120D2ZB</p>
                <p><span className="font-bold">Legal Name:</span> RATNAKAR MISHRA</p>
                <p><span className="font-bold">Trade Name:</span> M/S R M ENTERPRISES</p>
                <p><span className="font-bold">Constitution of Business:</span> Proprietorship</p>
                <p><span className="font-bold">Address:</span> VILL KUCHHMUCHH, GAURA, BADSHAHPUR, Jaunpur, Uttar Pradesh, 222133</p>
                <p><span className="font-bold">Date of Registration:</span> 21/11/2019</p>
                <p><span className="font-bold">Type of Registration:</span> Regular</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">MSME Registration (UDYAM)</h3>
              <div className="space-y-2">
                <p><span className="font-bold">UDYAM Registration Number:</span> UDYAM-UP-50-0053010</p>
                <p><span className="font-bold">Name of Enterprise:</span> R M ENTERPRISES</p>
                <p><span className="font-bold">Type of Enterprise:</span> MICRO (Based on FY 2020-21)</p>
                <p><span className="font-bold">Major Activity:</span> SERVICES (Trading)</p>
                <p><span className="font-bold">Social Category of Entrepreneur:</span> GENERAL</p>
                <p><span className="font-bold">Date of Registration:</span> 02/07/2022</p>
                <p><span className="font-bold">Date of Commencement:</span> 21/11/2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
   </>
  )
}

export default Registration