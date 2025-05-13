
import { useState } from "react";

type LocationTab = "vr360" | "map";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState<LocationTab>("vr360");
  
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Vị trí</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left column - Tab navigation */}
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setActiveTab("vr360")}
                className={`w-full text-left p-4 text-xl font-medium rounded-lg transition-colors ${
                  activeTab === "vr360"
                    ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                    : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
                }`}
              >
                VR 360 Tour – Khu CNC Đà Nẵng
              </button>
              {activeTab === "vr360" && (
                <p className="mt-3 ml-4 text-sm text-muted-foreground">
                  Khám phá Khu Công nghệ cao Đà Nẵng qua tour tham quan ảo 360° với trải nghiệm tương tác.
                </p>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setActiveTab("map")}
                className={`w-full text-left p-4 text-xl font-medium rounded-lg transition-colors ${
                  activeTab === "map"
                    ? "bg-primary/10 dark:bg-dseza-dark-primary/20 text-primary dark:text-dseza-dark-primary"
                    : "hover:bg-secondary dark:hover:bg-dseza-dark-secondary/50"
                }`}
              >
                Bản đồ số khu CNC + Các KCN Đà Nẵng + Báo cáo trực tuyến
              </button>
              {activeTab === "map" && (
                <p className="mt-3 ml-4 text-sm text-muted-foreground">
                  Bản đồ tương tác với dữ liệu chi tiết về các khu công nghiệp, vị trí các doanh nghiệp và thông tin đầu tư.
                </p>
              )}
            </div>
          </div>
          
          {/* Right column - Content display */}
          <div className="lg:col-span-3">
            {activeTab === "vr360" ? (
              <div className="bg-secondary dark:bg-dseza-dark-secondary rounded-lg p-4 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">VR 360 Tour Placeholder</h3>
                  <p className="text-muted-foreground">https://dseza.danang.gov.vn/vr360/</p>
                </div>
              </div>
            ) : (
              <div className="bg-secondary dark:bg-dseza-dark-secondary rounded-lg p-4 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Digital Map Placeholder</h3>
                  <p className="text-muted-foreground">https://maps.dhpiza.vn/</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
