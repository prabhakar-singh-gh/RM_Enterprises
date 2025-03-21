import React from 'react'
import { CheckCircle } from 'lucide-react'

function Service() {
  return (
   <>
   
   {/* Services Section */}
   <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">MEP Services</h3>
              <p>Comprehensive Mechanical, Electrical, and Plumbing services for commercial and industrial projects.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Transformer & Panel Maintenance</h3>
              <p>Transformers VCB HT & LT panel maintenance, servicing and repairs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">AC & Refrigeration</h3>
              <p>Domestic AC & Refrigeration Installation & Maintenance in large scale.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Domestic Wiring & Plumbing</h3>
              <p>Complete domestic wiring & plumbing solutions for residential and commercial properties.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Material Supply</h3>
              <p>Supply of MEP & other materials at competitive rates.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">DT Meter Installation</h3>
              <p>Professional installation of DT meters and HDP pipe distribution.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-black">Specialized Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Repairing and maintenance of Equipment Electrical/Electronic and Mechanical</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Servicing and maintenance of HT and LT Breakers and Transformer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Cable Laying (HT& LT)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Installation of Electrical Switch Gears viz. ACB, VCB, Energy meters, Panels etc.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>MEP Equipment Testing, commissioning Service and AMC</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Fire Fighting equipment system supply installation testing, commissioning and repair work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>All type of motor rewinding/repairing/servicing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>All type HVAC Supply, installation and repairing work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Service