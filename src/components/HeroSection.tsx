
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("city");
  
  return (
    <div className="relative w-full h-[100%] bg-gradient-to-r from-dseza-light-primary/90 to-dseza-light-accent/80 dark:from-dseza-dark-primary/90 dark:to-dseza-dark-accent/80">
      {/* Background image would go here in a real implementation */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-30 dark:opacity-20"
        style={{ backgroundPosition: '50% 30%' }}
      ></div>
      
      <div className="container mx-auto h-full relative z-10 flex flex-col justify-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-[100%] grid-cols-2 mb-6">
            <TabsTrigger value="city" className="data-[state=active]:bg-white/90 dark:data-[state=active]:bg-dseza-dark-bg/90">
              Thành phố
            </TabsTrigger>
            <TabsTrigger value="management" className="data-[state=active]:bg-white/90 dark:data-[state=active]:bg-dseza-dark-bg/90">
              Ban Quản lý
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="city" className="animate-slide-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-white mb-4">THÀNH PHỐ ĐÀ NẴNG</h2>
                <Button className="bg-white text-dseza-light-primary hover:bg-gray-100 dark:bg-dseza-dark-bg dark:text-dseza-dark-primary dark:hover:bg-dseza-dark-hover mt-4">
                  Tìm hiểu thêm
                </Button>
              </div>
              
              <div className="md:w-1/2 bg-white/90 dark:bg-dseza-dark-bg/90 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-dseza-light-primary dark:text-dseza-dark-primary">
                  Về Đà Nẵng
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1">Tổng quan</h4>
                    <p className="text-sm">Thành phố biển xinh đẹp, năng động và hiện đại.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Khí hậu</h4>
                    <p className="text-sm">Nhiệt đới gió mùa, nhiệt độ trung bình 25-26°C.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Chỉ số Kinh tế</h4>
                    <p className="text-sm">Tốc độ tăng trưởng GRDP 6-7% (2023).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Điểm đến hấp dẫn</h4>
                    <p className="text-sm">Bà Nà Hills, Ngũ Hành Sơn, Bán đảo Sơn Trà...</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="animate-slide-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG</h2>
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="bg-white/90 dark:bg-dseza-dark-bg/90 px-4 py-2 rounded-md">
                    <span className="block text-xl font-bold text-dseza-light-primary dark:text-dseza-dark-primary">32</span>
                    <span className="text-sm">Doanh nghiệp</span>
                  </div>
                  <div className="bg-white/90 dark:bg-dseza-dark-bg/90 px-4 py-2 rounded-md">
                    <span className="block text-xl font-bold text-dseza-light-primary dark:text-dseza-dark-primary">42,85%</span>
                    <span className="text-sm">Tỉ lệ lấp đầy</span>
                  </div>
                  <div className="bg-white/90 dark:bg-dseza-dark-bg/90 px-4 py-2 rounded-md">
                    <span className="block text-xl font-bold text-dseza-light-primary dark:text-dseza-dark-primary">1.128,4 ha</span>
                    <span className="text-sm">Diện tích</span>
                  </div>
                </div>
                <Button className="bg-white text-dseza-light-primary hover:bg-gray-100 dark:bg-dseza-dark-bg dark:text-dseza-dark-primary dark:hover:bg-dseza-dark-hover mt-4">
                  Tìm hiểu thêm
                </Button>
              </div>
              
              <div className="md:w-1/2 bg-white/90 dark:bg-dseza-dark-bg/90 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-dseza-light-primary dark:text-dseza-dark-primary">
                  Về Ban Quản lý
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1">Chức năng</h4>
                    <p className="text-sm">Quản lý nhà nước trực tiếp đối với khu công nghệ cao và các khu công nghiệp.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Nhiệm vụ</h4>
                    <p className="text-sm">Xây dựng kế hoạch phát triển & quản lý các KCN, thu hút đầu tư.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quyền hạn</h4>
                    <p className="text-sm">Cấp phép đầu tư, xây dựng và các thủ tục hành chính cho doanh nghiệp.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Đơn vị trực thuộc</h4>
                    <p className="text-sm">Trung tâm Dịch vụ và Hỗ trợ doanh nghiệp, Ban quản lý dự án đầu tư xây dựng.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HeroSection;
