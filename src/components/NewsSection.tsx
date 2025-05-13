
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type NewsItemProps = {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};

const NewsItem = ({ image, date, title, excerpt, featured = false }: NewsItemProps) => (
  <Card className={`overflow-hidden border-none ${featured ? 'h-full' : 'h-[220px]'}`}>
    <div className={`flex ${featured ? 'flex-col h-full' : 'h-full'}`}>
      <div 
        className={`${featured ? 'h-48 w-full' : 'h-full w-2/5'} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <CardContent className={`${featured ? 'w-full' : 'w-3/5'} p-4`}>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{date}</div>
        <h3 className={`font-bold ${featured ? 'text-xl mb-3' : 'text-base mb-2'} line-clamp-2`}>{title}</h3>
        <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-300">{excerpt}</p>
      </CardContent>
    </div>
  </Card>
);

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Sample news data - in a real app, this would come from an API
  const news = {
    all: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "22/05/2023",
        title: "Khu công nghệ cao Đà Nẵng thu hút thêm 3 dự án FDI mới",
        excerpt: "Theo Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng (DSEZA), trong 6 tháng đầu năm 2023, DSEZA đã cấp giấy chứng nhận đăng ký đầu tư cho 3 dự án FDI với tổng vốn đầu tư đăng ký là 15,7 triệu USD.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        date: "20/05/2023",
        title: "Đà Nẵng đẩy mạnh phát triển công nghệ cao và công nghiệp bán dẫn",
        excerpt: "UBND thành phố Đà Nẵng vừa ban hành kế hoạch triển khai Chiến lược phát triển công nghiệp bán dẫn đến năm 2030, với các giải pháp nhằm thu hút đầu tư vào lĩnh vực bán dẫn.",
      },
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        date: "18/05/2023",
        title: "Lãnh đạo thành phố làm việc với đoàn nhà đầu tư Hàn Quốc về dự án công nghệ cao",
        excerpt: "Sáng ngày 18/5, lãnh đạo UBND thành phố Đà Nẵng đã có buổi làm việc với đoàn doanh nghiệp đến từ Hàn Quốc về khả năng hợp tác đầu tư dự án công nghệ cao tại Khu công nghệ cao Đà Nẵng.",
      }
    ],
    investment: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "22/05/2023",
        title: "Khu công nghệ cao Đà Nẵng thu hút thêm 3 dự án FDI mới",
        excerpt: "Theo Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng (DSEZA), trong 6 tháng đầu năm 2023, DSEZA đã cấp giấy chứng nhận đăng ký đầu tư cho 3 dự án FDI với tổng vốn đầu tư đăng ký là 15,7 triệu USD.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "15/05/2023",
        title: "Đà Nẵng và Intel hợp tác phát triển ngành bán dẫn",
        excerpt: "UBND thành phố Đà Nẵng và Tập đoàn Intel đã ký kết biên bản ghi nhớ về việc hợp tác phát triển nguồn nhân lực và hệ sinh thái cho ngành công nghiệp bán dẫn tại Đà Nẵng.",
      },
    ],
    training: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "16/05/2023",
        title: "Ban Quản lý tổ chức khóa đào tạo về chuyển đổi số cho doanh nghiệp trong KCN",
        excerpt: "Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng phối hợp với Sở Thông tin và Truyền thông tổ chức khóa đào tạo về chuyển đổi số cho các doanh nghiệp đang hoạt động trong các KCN.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "10/05/2023",
        title: "Hội thảo phát triển nguồn nhân lực công nghệ cao tại Đà Nẵng",
        excerpt: "Sở Lao động - Thương binh và Xã hội phối hợp với Ban quản lý Khu công nghệ cao và các khu công nghiệp tổ chức hội thảo về giải pháp phát triển nguồn nhân lực chất lượng cao phục vụ phát triển công nghiệp công nghệ cao.",
      },
    ],
    digital: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "20/05/2023",
        title: "Đà Nẵng triển khai nền tảng quản lý và giám sát thông minh các KCN",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng vừa chính thức triển khai nền tảng quản lý và giám sát thông minh áp dụng cho các khu công nghiệp trên địa bàn thành phố.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "18/05/2023",
        title: "Ứng dụng công nghệ IoT trong quản lý môi trường tại các KCN Đà Nẵng",
        excerpt: "Ban quản lý triển khai hệ thống quan trắc môi trường tự động tại các khu công nghiệp với công nghệ IoT, giúp giám sát liên tục 24/7 các chỉ số môi trường.",
      },
    ],
    activities: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "21/05/2023",
        title: "Ban quản lý tổ chức đối thoại với doanh nghiệp trong các KCN",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng tổ chức hội nghị đối thoại định kỳ với doanh nghiệp, nhằm kịp thời tháo gỡ khó khăn, vướng mắc cho doanh nghiệp.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "17/05/2023",
        title: "Ban quản lý làm việc với đoàn công tác Bộ Kế hoạch và Đầu tư",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng đã có buổi làm việc với đoàn công tác của Bộ Kế hoạch và Đầu tư về tình hình thu hút đầu tư và phát triển các khu công nghiệp.",
      },
    ],
    others: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "19/05/2023",
        title: "Khánh thành nhà máy xử lý nước thải tập trung KCN Hòa Khánh mở rộng",
        excerpt: "Dự án nhà máy xử lý nước thải tập trung KCN Hòa Khánh mở rộng với công suất 5.000 m³/ngày đêm vừa chính thức đi vào hoạt động, góp phần bảo vệ môi trường trong khu vực.",
        featured: true,
      },
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "14/05/2023",
        title: "DSEZA cải tiến quy trình cấp phép đầu tư, giảm thời gian xử lý hồ sơ",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng vừa triển khai quy trình cấp phép đầu tư mới, rút ngắn thời gian xử lý hồ sơ xuống còn tối đa 15 ngày làm việc.",
      },
    ]
  };

  const tabs = [
    { id: "all", label: "Tất cả" },
    { id: "investment", label: "Đầu tư – Hợp tác quốc tế" },
    { id: "training", label: "Đào tạo, Ươm tạo khởi nghiệp" },
    { id: "digital", label: "Chuyển đổi số" },
    { id: "activities", label: "Hoạt động Ban Quản lí" },
    { id: "others", label: "Tin khác" }
  ];

  return (
    <div className="py-12 bg-dseza-light-secondary dark:bg-dseza-dark-secondary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Tin tức</h2>
          <a href="https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/" className="text-dseza-light-primary dark:text-dseza-dark-primary hover:underline">
            Xem tất cả
          </a>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-start overflow-x-auto mb-6 bg-transparent h-auto p-0 space-x-2">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id}
                className="px-4 py-2 rounded-full bg-white dark:bg-dseza-dark-bg data-[state=active]:bg-dseza-light-primary data-[state=active]:text-white dark:data-[state=active]:bg-dseza-dark-primary text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(news).map((key) => (
            <TabsContent key={key} value={key} className="animate-fade-in mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {news[key as keyof typeof news].map((item, index) => (
                  <div 
                    key={index} 
                    className={`${index === 0 ? 'lg:col-span-2' : ''}`}
                  >
                    <NewsItem {...item} />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NewsSection;
