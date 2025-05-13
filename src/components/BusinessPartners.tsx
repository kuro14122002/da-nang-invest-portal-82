
import React from 'react';

export default function BusinessPartners() {
  const partnerLogos = Array(7).fill(null).map((_, index) => `Logo ${index + 1}`);
  
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Doanh nghiệp và đối tác</h2>
        
        <div className="relative overflow-hidden">
          {/* Logos carousel */}
          <div className="flex animate-scroll-x space-x-12 opacity-75">
            {partnerLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-40 h-32 bg-secondary dark:bg-dseza-dark-secondary rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
              >
                <span className="text-lg font-medium">{logo}</span>
              </div>
            ))}
            
            {/* Duplicate logos for endless scrolling */}
            {partnerLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 w-40 h-32 bg-secondary dark:bg-dseza-dark-secondary rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
              >
                <span className="text-lg font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
