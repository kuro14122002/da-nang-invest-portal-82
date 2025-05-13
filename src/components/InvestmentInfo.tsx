
import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function InvestmentInfo() {
  const [activeTab, setActiveTab] = useState("investor");
  
  // Placeholder carousel items
  const carouselItems = {
    investor: [
      {
        id: "process",
        title: "Quy trình Lĩnh vực đầu tư",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Quy+trinh",
      },
      {
        id: "areas",
        title: "Lĩnh vực thu hút đầu tư",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Linh+vuc",
      },
      {
        id: "planning",
        title: "Quy hoạch khu chức năng",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Quy+hoach",
      },
      {
        id: "postal",
        title: "Đăng ký nộp hồ sơ qua bưu điện",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Nop+ho+so",
      },
      {
        id: "lookup",
        title: "Tra cứu TTHC",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Tra+cuu",
      },
      {
        id: "online",
        title: "Dịch vụ công trực tuyến",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=DVC",
      },
    ],
    environment: [
      {
        id: "infra",
        title: "Hạ tầng KCN",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Ha+tang+KCN",
      },
      {
        id: "transport",
        title: "Hạ tầng giao thông",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Giao+thong",
      },
      {
        id: "science",
        title: "Khoa học công nghệ",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=KHCN",
      },
      {
        id: "logistics",
        title: "Logistic",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Logistics",
      },
      {
        id: "social",
        title: "Hạ tầng xã hội",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Ha+tang+xa+hoi",
      },
      {
        id: "hr",
        title: "Nguồn nhân lực",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=Nhan+luc",
      },
      {
        id: "reform",
        title: "CCHC",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=CCHC",
      },
      {
        id: "digital",
        title: "Chuyển đổi số",
        image: "https://via.placeholder.com/400x500/1E272F/FFFFFF?text=CDS",
      },
    ],
  };
  
  // Get current items based on active tab
  const currentItems = activeTab === "investor" ? carouselItems.investor : carouselItems.environment;
  
  // Simple carousel navigation (for a full implementation, you'd use a library like Swiper)
  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('investment-carousel');
    if (carousel) {
      const scrollAmount = direction === 'left' ? -320 : 320; // Approximate card width + gap
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column - Navigation & Controls */}
        <div className="lg:w-1/4">
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-8 leading-tight">
            CHÚNG TÔI TRIỂN KHAI DỰ ÁN VỚI QUY MÔ ĐA DẠNG - LUÔN ĐƯỢC THIẾT KẾ THEO YÊU CẦU CỦA BẠN.
          </h3>
          
          {/* Tab Navigation */}
          <div className="space-y-3 mb-8">
            <button
              onClick={() => setActiveTab("investor")}
              className={`text-lg font-medium transition-colors ${
                activeTab === "investor" 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-accent/80"
              }`}
            >
              Dành cho nhà đầu tư
            </button>
            <button
              onClick={() => setActiveTab("environment")}
              className={`text-lg font-medium transition-colors ${
                activeTab === "environment" 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-accent/80"
              }`}
            >
              Môi trường đầu tư
            </button>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button 
              onClick={() => scrollCarousel('left')}
              className="transition-colors text-muted-foreground hover:text-accent"
              aria-label="Scroll left"
            >
              <ArrowLeftCircle size={32} />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="transition-colors text-muted-foreground hover:text-accent"
              aria-label="Scroll right"
            >
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
        
        {/* Right Column - Carousel */}
        <div className="lg:w-3/4">
          <div 
            id="investment-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth"
          >
            {currentItems.map((item) => (
              <a
                href={`/investment/${item.id}`}
                key={item.id}
                className="relative min-w-[280px] aspect-[4/5] rounded-xl overflow-hidden group snap-start shadow-md"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
