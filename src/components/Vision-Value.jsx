import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

function VisionValue() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set up intersection observer to detect when section is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Vision & Values Section */}
      <section id="about" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Vision section - animates from left */}
            <div 
              className={`md:w-1/2 transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Our Vision</h2>
              <p className="text-lg mb-4">
                Become Global Leader in Brand, Technology and Services. Our vision gives us sense of direction
                and destination. It captures our aspiration of being the best in everything we do. It is the basis
                for what we all stand for as one company. Our vision and our values guide the choices and
                decisions our employees make every day.
              </p>
            </div>
            
            {/* Values section - animates from right */}
            <div 
              className={`md:w-1/2 transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Our Values</h2>
              <p className="text-lg mb-4 font-bold">Excellence is our Passion</p>
              <ul className="space-y-2 text-lg">
                <li className={`flex items-start transition-all delay-100 duration-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}>
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>We put our customer at center of what we do.</span>
                </li>
                <li className={`flex items-start transition-all delay-300 duration-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}>
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>We value challenge and reward our people.</span>
                </li>
                <li className={`flex items-start transition-all delay-500 duration-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}>
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>We drive excellence sustainable financial performance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionValue;