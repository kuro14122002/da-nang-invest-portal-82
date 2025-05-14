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

  const currentItems = activeTab === "investor" ? carouselItems.investor : carouselItems.environment;

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('investment-carousel');
    if (carousel) {
      // Tính toán lượng scroll dựa trên chiều rộng thẻ đầu tiên (nếu có) hoặc một giá trị cố định
      const firstItem = carousel.querySelector(':scope > a') as HTMLElement;
      const itemWidth = firstItem ? firstItem.offsetWidth : 280; // 280 là min-w-[280px]
      const gap = 24; // gap-6 (6 * 4px = 24px)
      const scrollAmount = direction === 'left' ? -(itemWidth + gap) : (itemWidth + gap);
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    // 1. Padding dọc section: py-10 (mobile) -> py-12 (sm) -> py-16 (md). Bỏ px-6.
    <section className="w-full py-10 sm:py-12 md:py-16 bg-background">
      {/* Container đã có padding ngang responsive */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Column - Navigation & Controls */}
        <div className="lg:w-1/3 xl:w-1/4"> {/* Điều chỉnh chiều rộng cột trái cho linh hoạt hơn */}
          {/* 2. Margin dưới tiêu đề: mb-6 (mobile) -> md:mb-8 */}
          <h2 className="mb-8">
            THÔNG TIN ĐẦU TƯ
          </h2>

          {/* Tab Navigation */}
          {/* 3. Margin dưới khối tab: mb-6 (mobile) -> md:mb-8 */}
          <div className="space-y-3 mb-6 md:mb-8">
            <button
              onClick={() => setActiveTab("investor")}
              className={`w-full text-left p-3 sm:p-4 text-lg font-medium rounded-lg transition-colors ${ // Tăng vùng chạm cho mobile
                activeTab === "investor"
                  ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                  : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
              }`}
            >
              Dành cho nhà đầu tư
            </button>
            <button
              onClick={() => setActiveTab("environment")}
              className={`w-full text-left p-3 sm:p-4 text-lg font-medium rounded-lg transition-colors ${ // Tăng vùng chạm cho mobile
                activeTab === "environment"
                  ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                  : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
              }`}
            >
              Môi trường đầu tư
            </button>
          </div>

          {/* Carousel Controls */}
          {/* 4. Margin trên khối controls: mt-6 (mobile) -> md:mt-8 */}
          <div className="flex items-center gap-4 mt-6 md:mt-8">
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
        <div className="lg:w-2/3 xl:w-3/4"> {/* Điều chỉnh chiều rộng cột phải */}
          <div
            id="investment-carousel"
            // 5. Khoảng cách gap giữa các thẻ carousel: gap-4 (mobile) -> sm:gap-6
            // Thêm padding phải để thẻ cuối không bị cắt đột ngột khi scroll tới cuối trên một số trình duyệt
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth pr-4 lg:pr-0"
          >
            {currentItems.map((item) => (
              <a
                href={`/investment/${item.id}`}
                key={item.id}
                // 6. Chiều rộng thẻ item: min-w-[240px] (mobile) -> sm:min-w-[280px]
                // Thêm class để đảm bảo thẻ co lại trên màn hình rất nhỏ nếu cần, ví dụ: w-full xs:w-auto
                className="relative w-[calc(100%-2rem)] xs:w-auto min-w-[240px] sm:min-w-[280px] aspect-[4/5] rounded-xl overflow-hidden group snap-start shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"> {/* Responsive padding cho text trong thẻ */}
                    <h4 className="text-base sm:text-lg font-medium text-white line-clamp-2">{item.title}</h4> {/* Line-clamp để giới hạn số dòng title */}
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