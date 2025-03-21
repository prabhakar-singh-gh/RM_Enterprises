import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'RM ENTERPRISES';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  useEffect(() => {
    // Set visibility to true after component mounts to trigger animations
    setIsVisible(true);
  }, []);

  // Start typing animation when component becomes visible
  useEffect(() => {
    if (isVisible && displayText.length < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150); // Speed of typing (milliseconds)
      
      return () => clearTimeout(typingTimeout);
    } else if (isVisible && displayText.length === fullText.length) {
      setIsTypingComplete(true);
    }
  }, [isVisible, displayText, fullText]);

  return (
    <>
      {/* Add custom styles for the blinking cursor */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          .cursor-blink {
            animation: blink 0.8s infinite;
          }
        `}
      </style>
      
      {/* Hero Section */}
      <section id="home" className="bg-blue-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 
            className={`text-4xl md:text-5xl text-yellow-600 font-bold mb-6 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
            }`}
          >
            {displayText}
            <span 
              className={`inline-block w-1 h-12 bg-white ml-1 cursor-blink`}
              style={{ verticalAlign: 'text-bottom' }}
            ></span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-8 max-w-3xl transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Government approved Class A registered contractor for electrical work, MEP services, and material supply
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            <a 
              href="#services" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-md transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;