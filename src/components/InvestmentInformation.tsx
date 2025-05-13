
import React, { useState, useRef } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Investment topics with their corresponding cards
const investmentData = {
  forInvestors: [
    { title: "Quy trình Lĩnh vực đầu tư", image: "/placeholder.svg" },
    { title: "Lĩnh vực thu hút đầu tư", image: "/placeholder.svg" },
    { title: "Quy hoạch khu chức năng", image: "/placeholder.svg" },
    { title: "Đăng ký nộp hồ sơ qua bưu điện", image: "/placeholder.svg" },
    { title: "Tra cứu TTHC", image: "/placeholder.svg" },
    { title: "Dịch vụ công trực tuyến", image: "/placeholder.svg" },
  ],
  investmentEnvironment: [
    { title: "Hạ tầng KCN", image: "/placeholder.svg" },
    { title: "Hạ tầng giao thông", image: "/placeholder.svg" },
    { title: "Khoa học công nghệ", image: "/placeholder.svg" },
    { title: "Logistic", image: "/placeholder.svg" },
    { title: "Hạ tầng xã hội", image: "/placeholder.svg" },
    { title: "Nguồn nhân lực", image: "/placeholder.svg" },
    { title: "CCHC", image: "/placeholder.svg" },
    { title: "Chuyển đổi số", image: "/placeholder.svg" },
  ]
};

// Individual investment card component
const InvestmentCard = ({ title, image }: { title: string; image: string }) => (
  <a href="#" className="group">
    <div className="relative min-w-[280px] h-[400px] rounded-xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h5 className="text-white font-medium text-lg">{title}</h5>
      </div>
    </div>
  </a>
);

// Carousel component
const InvestmentCarousel = ({ items }: { items: { title: string; image: string }[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll about 80% of the visible width
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div 
      ref={scrollRef} 
      className="flex overflow-x-auto scrollbar-none gap-6 pb-6 snap-x snap-mandatory"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {items.map((item, index) => (
        <div key={index} className="snap-start shrink-0">
          <InvestmentCard title={item.title} image={item.image} />
        </div>
      ))}
    </div>
  );
};

const InvestmentInformation = () => {
  const [activeTab, setActiveTab] = useState<string>('forInvestors');
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 px-6 md:px-8 lg:px-16" id="investment-information">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Tab Navigation & Controls */}
        <div className="w-full md:w-1/4">
          <h3 className="text-primary font-medium text-xl mb-8 leading-tight">
            CHÚNG TÔI TRIỂN KHAI DỰ ÁN VỚI QUY MÔ ĐA DẠNG - LUÔN ĐƯỢC THIẾT KẾ THEO YÊU CẦU CỦA BẠN.
          </h3>
          
          <Tabs 
            defaultValue="forInvestors" 
            orientation="vertical"
            onValueChange={setActiveTab}
            className="space-y-3"
          >
            <TabsList className="flex flex-col h-auto bg-transparent space-y-3 p-0">
              <TabsTrigger 
                value="forInvestors"
                className={cn(
                  "justify-start text-left h-auto px-0 data-[state=active]:shadow-none text-lg font-medium", 
                  activeTab === 'forInvestors' ? "text-accent" : "text-muted-foreground"
                )}
              >
                Dành cho nhà đầu tư
              </TabsTrigger>
              <TabsTrigger 
                value="investmentEnvironment"
                className={cn(
                  "justify-start text-left h-auto px-0 data-[state=active]:shadow-none text-lg font-medium", 
                  activeTab === 'investmentEnvironment' ? "text-accent" : "text-muted-foreground"
                )}
              >
                Môi trường đầu tư
              </TabsTrigger>
            </TabsList>
            
            {/* Carousel Controls */}
            <div className="mt-8 flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent" 
                onClick={handlePrev}
              >
                <ArrowLeftCircle size={32} className="text-secondary hover:text-accent transition-colors" />
                <span className="sr-only">Previous slides</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent" 
                onClick={handleNext}
              >
                <ArrowRightCircle size={32} className="text-secondary hover:text-accent transition-colors" />
                <span className="sr-only">Next slides</span>
              </Button>
            </div>
            
            {/* Tab Content (Hidden but needed for Radix UI Tabs) */}
            <TabsContent value="forInvestors" className="hidden">
              {/* Content handled by the ref-based approach */}
            </TabsContent>
            <TabsContent value="investmentEnvironment" className="hidden">
              {/* Content handled by the ref-based approach */}
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right Column - Content Carousel */}
        <div className="w-full md:w-3/4 overflow-hidden" ref={carouselRef}>
          {activeTab === 'forInvestors' && (
            <InvestmentCarousel items={investmentData.forInvestors} />
          )}
          
          {activeTab === 'investmentEnvironment' && (
            <InvestmentCarousel items={investmentData.investmentEnvironment} />
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestmentInformation;
