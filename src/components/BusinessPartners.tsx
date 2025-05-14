
import React from 'react';

export default function BusinessPartners() {
  const partnerLogos = Array(7).fill(null).map((_, index) => `Logo ${index + 1}`);

  return (
    // 1. Padding dọc của section: py-10 (màn hình nhỏ) -> py-12 (sm) -> py-16 (md trở lên)
    // 2. Bỏ padding ngang px-6, để container xử lý
    <section className="w-full py-10 sm:py-12 md:py-16 bg-background">
      {/* Container đã có padding ngang responsive từ tailwind.config.ts */}
      <div className="container mx-auto">
        {/* 3. Margin dưới của tiêu đề: mb-6 (màn hình nhỏ) -> mb-8 (md trở lên) */}
        <h2 className="mb-8 text-center">
          Doanh nghiệp và đối tác
        </h2>

        <div className="relative overflow-hidden">
          {/* 4. Khoảng cách giữa các logo: space-x-6 (màn hình nhỏ) -> space-x-8 (sm) -> space-x-12 (lg trở lên) */}
          <div className="flex animate-scroll-x space-x-6 sm:space-x-8 lg:space-x-12 opacity-75">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                // 5. Kích thước logo: w-32 h-24 (màn hình nhỏ) -> w-36 h-28 (sm) -> w-40 h-32 (md trở lên)
                className="flex-shrink-0 w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 bg-secondary dark:bg-dseza-dark-secondary rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
              >
                <span className="text-base sm:text-lg font-medium">{logo}</span>
              </div>
            ))}

            {/* Duplicate logos for endless scrolling */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 bg-secondary dark:bg-dseza-dark-secondary rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
              >
                <span className="text-base sm:text-lg font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
