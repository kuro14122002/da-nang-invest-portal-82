
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type EventCardProps = {
  image: string;
  date: string;
  title: string;
  featured?: boolean;
};

const EventCard = ({ image, date, title, featured = false }: EventCardProps) => (
  <Card className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${featured ? 'col-span-2 row-span-2' : ''}`}>
    <div className="relative h-full">
      <div 
        className={`relative h-${featured ? '48' : '32'} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-xs">{date}</span>
        </div>
        <h3 className={`font-bold ${featured ? 'text-xl' : 'text-base'} line-clamp-2`}>{title}</h3>
      </CardContent>
    </div>
  </Card>
);

const FeaturedEvents = () => {
  // Sample event data - in a real app, this would come from an API
  const events = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "20/05/2023",
      title: "Hội nghị xúc tiến đầu tư công nghệ cao Đà Nẵng 2023",
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "15/05/2023",
      title: "Đà Nẵng đẩy mạnh phát triển công nghệ cao và công nghiệp bán dẫn",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      date: "10/05/2023",
      title: "Triển lãm công nghệ số và chuyển đổi số Đà Nẵng 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "05/05/2023",
      title: "Chương trình kết nối doanh nghiệp CNTT với nhà đầu tư",
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      date: "01/05/2023",
      title: "Hội thảo phát triển nguồn nhân lực công nghệ cao tại Đà Nẵng",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Sự kiện tiêu điểm</h2>
          <a href="#" className="text-dseza-light-primary dark:text-dseza-dark-primary hover:underline">Xem tất cả</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"}>
              <EventCard {...event} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
