
import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const InvestmentInformation = () => {
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
    <section className="py-16 px-6 md:px-8 lg:px-16" id="investment-information">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Navigation & Controls */}
        <div className="w-full md:w-1/4">
          <h3 className="text-primary font-medium text-xl mb-8 leading-tight">
            CHÚNG TÔI TRIỂN KHAI DỰ ÁN VỚI QUY MÔ ĐA DẠNG - LUÔN ĐƯỢC THIẾT KẾ THEO YÊU CẦU CỦA BẠN.
          </h3>
          
          {/* Tab Navigation */}
          <div className="space-y-3 mb-8">
            <button
              onClick={() => setActiveTab("investor")}
              className={`text-lg font-medium justify-start text-left ${
                activeTab === "investor" 
                  ? "text-accent" 
                  : "text-muted-foreground"
              }`}
            >
              Dành cho nhà đầu tư
            </button>
            <button
              onClick={() => setActiveTab("environment")}
              className={`text-lg font-medium justify-start text-left ${
                activeTab === "environment" 
                  ? "text-accent" 
                  : "text-muted-foreground"
              }`}
            >
              Môi trường đầu tư
            </button>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollCarousel('left')}
              className="hover:text-accent"
            >
              <ArrowLeftCircle size={32} className="text-secondary hover:text-accent transition-colors" />
              <span className="sr-only">Previous slides</span>
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="hover:text-accent"
            >
              <ArrowRightCircle size={32} className="text-secondary hover:text-accent transition-colors" />
              <span className="sr-only">Next slides</span>
            </button>
          </div>
        </div>
        
        {/* Right Column - Carousel */}
        <div className="w-full md:w-3/4">
          <div 
            id="investment-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth"
          >
            {currentItems.map((item) => (
              <a
                href={`/investment/${item.id}`}
                key={item.id}
                className="relative min-w-[280px] h-[400px] rounded-xl overflow-hidden group snap-start"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <h5 className="text-white font-medium text-lg">{item.title}</h5>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInformation;
