import { useState } from "react";

type LocationTab = "vr360" | "map";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState<LocationTab>("vr360");

  return (
    // 1. Padding dọc section: py-10 (mobile) -> py-12 (sm) -> py-16 (md). Bỏ px-6.
    <section className="w-full py-10 sm:py-12 md:py-16 bg-background">
      {/* Container đã có padding ngang responsive */}
      <div className="container mx-auto">
        {/* 2. Margin dưới tiêu đề: mb-6 (mobile) -> md:mb-8 */}
        <h2 className="mb-8">
          VỊ TRÍ
        </h2>

        {/* 3. Khoảng cách grid: gap-6 (mobile, khi xếp chồng) -> lg:gap-8 (desktop, khi 2 cột) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left column - Tab navigation */}
          {/* 4. Khoảng cách giữa các nút tab: space-y-4 (mobile) -> sm:space-y-6 */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <button
                onClick={() => setActiveTab("vr360")}
                // 5. Padding nút tab: p-3 (mobile) -> sm:p-4. Kích thước chữ: text-lg (mobile) -> sm:text-xl
                className={`w-full text-left p-3 sm:p-4 text-lg sm:text-xl font-medium rounded-lg transition-colors ${
                  activeTab === "vr360"
                    ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                    : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
                }`}
              >
                VR 360 Tour – Khu CNC Đà Nẵng
              </button>
              {activeTab === "vr360" && (
                // 6. Margin mô tả: mt-2 ml-0 (mobile, căn trái) -> sm:mt-3 sm:ml-4 (tablet trở lên, thụt lề)
                <p className="mt-2 sm:mt-3 sm:ml-4 text-sm text-muted-foreground">
                  Khám phá Khu Công nghệ cao Đà Nẵng qua tour tham quan ảo 360° với trải nghiệm tương tác.
                </p>
              )}
            </div>

            <div>
              <button
                onClick={() => setActiveTab("map")}
                className={`w-full text-left p-3 sm:p-4 text-lg sm:text-xl font-medium rounded-lg transition-colors ${
                  activeTab === "map"
                    ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                    : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
                }`}
              >
                Bản đồ số khu CNC + Các KCN Đà Nẵng + Báo cáo trực tuyến
              </button>
              {activeTab === "map" && (
                <p className="mt-2 sm:mt-3 sm:ml-4 text-sm text-muted-foreground">
                  Bản đồ tương tác với dữ liệu chi tiết về các khu công nghiệp, vị trí các doanh nghiệp và thông tin đầu tư.
                </p>
              )}
            </div>
          </div>

          {/* Right column - Content display */}
          <div className="lg:col-span-3">
            {activeTab === "vr360" ? (
              // 7. Padding khung nội dung: p-3 (mobile) -> sm:p-4. Chiều cao có thể giữ nguyên hoặc dùng aspect-ratio
              <div className="bg-secondary dark:bg-dseza-dark-secondary rounded-lg p-3 sm:p-4 h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">VR 360 Tour Placeholder</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all px-2">https://dseza.danang.gov.vn/vr360/</p>
                </div>
              </div>
            ) : (
              <div className="bg-secondary dark:bg-dseza-dark-secondary rounded-lg p-3 sm:p-4 h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Digital Map Placeholder</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all px-2">https://maps.dhpiza.vn/</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}