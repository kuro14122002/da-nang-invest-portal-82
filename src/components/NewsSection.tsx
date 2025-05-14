import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// Icons không được sử dụng trong mã hiện tại, có thể bỏ qua hoặc sử dụng nếu cần
// import { ClipboardList, FileText, CheckSquare, MessageCircle, CalendarDays } from "lucide-react";

type NewsItemProps = {
  image: string;
  date: string;
  title: string;
  excerpt?: string;
  category?: string;
  featured?: boolean;
};

const NewsItem = ({ image, date, title, excerpt, category, featured = false }: NewsItemProps) => (
  <Card className="overflow-hidden h-full">
    <div className="flex flex-col h-full">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </AspectRatio>
      </div>
      <CardContent className={`flex-1 flex flex-col ${featured ? 'p-4' : 'p-3'}`}>
        {category && featured && (
          <Badge variant="outline" className="self-start text-xs bg-accent-foreground/10 text-accent-foreground mb-2 px-2 py-1 rounded-md">
            {category}
          </Badge>
        )}
        <h3 className={`${featured ? 'text-xl font-semibold mb-2' : 'text-base font-medium mb-1'} line-clamp-2 text-primary`}>
          {title}
        </h3>
        {excerpt && featured && (
          <p className="text-sm line-clamp-3 text-muted-foreground mb-3 flex-grow">{excerpt}</p>
        )}
        <div className="text-xs text-muted-foreground mt-auto">{date}</div>
      </CardContent>
    </div>
  </Card>
);

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("investment");

  // News data with categories
  const news = {
    // ... (dữ liệu news giữ nguyên)
    investment: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "22/05/2023",
        title: "Khu công nghệ cao Đà Nẵng thu hút thêm 3 dự án FDI mới",
        excerpt: "Theo Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng (DSEZA), trong 6 tháng đầu năm 2023, DSEZA đã cấp giấy chứng nhận đăng ký đầu tư cho 3 dự án FDI với tổng vốn đầu tư đăng ký là 15,7 triệu USD.",
        category: "Đầu tư"
      },
      {
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        date: "20/05/2023",
        title: "Đà Nẵng đẩy mạnh phát triển công nghệ cao và công nghiệp bán dẫn",
        excerpt: "UBND thành phố Đà Nẵng vừa ban hành kế hoạch triển khai Chiến lược phát triển công nghiệp bán dẫn đến năm 2030, với các giải pháp nhằm thu hút đầu tư vào lĩnh vực bán dẫn."
      },
      // ... các tin khác
    ],
    // ... các category khác
  };


  const tabs = [
    { id: "investment", label: "Đầu tư – Hợp tác quốc tế" },
    { id: "training", label: "Đào tạo, Ươm tạo khởi nghiệp" },
    { id: "digital", label: "Chuyển đổi số" },
    { id: "activities", label: "Hoạt động Ban Quản lí" },
    { id: "others", label: "Tin khác" }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6"> {/* Chú ý px-6 ở đây */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="mb-8">TIN TỨC</h2>
          <a href="/tin-tuc" className="text-sm text-dseza-light-primary dark:text-dseza-dark-primary hover:underline">
            Xem tất cả
          </a>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-start overflow-x-auto mb-6 bg-transparent h-auto p-0 space-x-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(news).map((key) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news[key as keyof typeof news].slice(0, 1).map((item, index) => (
                  <div key={index} className="md:col-span-2">
                    <NewsItem {...item} featured={true} />
                  </div>
                ))}
                <div className="space-y-6">
                  {news[key as keyof typeof news].slice(1, 3).map((item, index) => (
                    <div key={index}>
                      <NewsItem {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NewsSection;