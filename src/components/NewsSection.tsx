
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ClipboardList, FileText, CheckSquare, MessageCircle, CalendarDays } from "lucide-react";

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
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        date: "18/05/2023",
        title: "Lãnh đạo thành phố làm việc với đoàn nhà đầu tư Hàn Quốc về dự án công nghệ cao",
        excerpt: "Sáng ngày 18/5, lãnh đạo UBND thành phố Đà Nẵng đã có buổi làm việc với đoàn doanh nghiệp đến từ Hàn Quốc về khả năng hợp tác đầu tư dự án công nghệ cao tại Khu công nghệ cao Đà Nẵng."
      }
    ],
    training: [
      {
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
        date: "16/05/2023",
        title: "Ban Quản lý tổ chức khóa đào tạo về chuyển đổi số cho doanh nghiệp trong KCN",
        excerpt: "Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng phối hợp với Sở Thông tin và Truyền thông tổ chức khóa đào tạo về chuyển đổi số cho các doanh nghiệp đang hoạt động trong các KCN.",
        category: "Đào tạo"
      },
      {
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
        date: "10/05/2023",
        title: "Hội thảo phát triển nguồn nhân lực công nghệ cao tại Đà Nẵng",
        excerpt: "Sở Lao động - Thương binh và Xã hội phối hợp với Ban quản lý Khu công nghệ cao và các khu công nghiệp tổ chức hội thảo về giải pháp phát triển nguồn nhân lực chất lượng cao."
      },
      {
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        date: "07/05/2023",
        title: "Chương trình ươm tạo khởi nghiệp công nghệ 2023 chính thức khởi động",
        excerpt: "Chương trình ươm tạo khởi nghiệp công nghệ 2023 do Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng tổ chức đã chính thức khởi động với sự tham gia của hơn 50 dự án."
      }
    ],
    digital: [
      {
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        date: "20/05/2023",
        title: "Đà Nẵng triển khai nền tảng quản lý và giám sát thông minh các KCN",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng vừa chính thức triển khai nền tảng quản lý và giám sát thông minh áp dụng cho các khu công nghiệp trên địa bàn thành phố.",
        category: "Công nghệ"
      },
      {
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        date: "18/05/2023",
        title: "Ứng dụng công nghệ IoT trong quản lý môi trường tại các KCN Đà Nẵng",
        excerpt: "Ban quản lý triển khai hệ thống quan trắc môi trường tự động tại các khu công nghiệp với công nghệ IoT, giúp giám sát liên tục 24/7 các chỉ số môi trường."
      },
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        date: "14/05/2023",
        title: "DSEZA ứng dụng AI vào quy trình cấp phép đầu tư",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng áp dụng trí tuệ nhân tạo (AI) vào quy trình cấp phép đầu tư nhằm nâng cao hiệu quả quản lý và rút ngắn thời gian xử lý hồ sơ."
      }
    ],
    activities: [
      {
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
        date: "21/05/2023",
        title: "Ban quản lý tổ chức đối thoại với doanh nghiệp trong các KCN",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng tổ chức hội nghị đối thoại định kỳ với doanh nghiệp, nhằm kịp thời tháo gỡ khó khăn, vướng mắc cho doanh nghiệp.",
        category: "Hoạt động"
      },
      {
        image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
        date: "17/05/2023",
        title: "Ban quản lý làm việc với đoàn công tác Bộ Kế hoạch và Đầu tư",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng đã có buổi làm việc với đoàn công tác của Bộ Kế hoạch và Đầu tư về tình hình thu hút đầu tư và phát triển các khu công nghiệp."
      },
      {
        image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
        date: "14/05/2023",
        title: "DSEZA tham dự hội nghị xúc tiến đầu tư tại Singapore",
        excerpt: "Đại diện Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng đã tham dự và trình bày tại Hội nghị xúc tiến đầu tư vào các khu công nghệ cao Việt Nam được tổ chức tại Singapore."
      }
    ],
    others: [
      {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        date: "19/05/2023",
        title: "Khánh thành nhà máy xử lý nước thải tập trung KCN Hòa Khánh mở rộng",
        excerpt: "Dự án nhà máy xử lý nước thải tập trung KCN Hòa Khánh mở rộng với công suất 5.000 m³/ngày đêm vừa chính thức đi vào hoạt động, góp phần bảo vệ môi trường trong khu vực.",
        category: "Môi trường"
      },
      {
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
        date: "14/05/2023",
        title: "DSEZA cải tiến quy trình cấp phép đầu tư, giảm thời gian xử lý hồ sơ",
        excerpt: "Ban quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng vừa triển khai quy trình cấp phép đầu tư mới, rút ngắn thời gian xử lý hồ sơ xuống còn tối đa 15 ngày làm việc."
      },
      {
        image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
        date: "10/05/2023",
        title: "Chương trình trồng cây xanh tại các khu công nghiệp Đà Nẵng",
        excerpt: "Ban quản lý phối hợp với các đơn vị liên quan tổ chức Chương trình 'Triệu cây xanh' nhằm cải thiện môi trường và cảnh quan tại các khu công nghiệp trên địa bàn thành phố Đà Nẵng."
      }
    ]
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
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Tin tức</h2>
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
