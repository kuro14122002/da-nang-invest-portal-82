
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CalendarDays } from "lucide-react";

type EventCardProps = {
  image: string;
  date: string;
  title: string;
  excerpt?: string;
  featured?: boolean;
};

const EventCard = ({ image, date, title, excerpt, featured = false }: EventCardProps) => (
  <div className={`relative overflow-hidden rounded-xl ${featured ? 'col-span-2 row-span-2' : ''}`}>
    <AspectRatio ratio={1/1}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </AspectRatio>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <div className="flex items-center gap-2 mb-2 text-white/80">
        <CalendarDays className="h-4 w-4" />
        <span className="text-xs">{date}</span>
      </div>
      <h3 className={`font-bold text-white ${featured ? 'text-xl mb-2' : 'text-base'}`}>
        <a href="#" className="hover:underline">{title}</a>
      </h3>
      {featured && excerpt && (
        <p className="text-white/80 text-sm line-clamp-2">{excerpt}</p>
      )}
    </div>
  </div>
);

const FeaturedEvents = () => {
  // Sample event data - in a real app, this would come from an API
  const events = [
    {
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      date: "20/05/2023",
      title: "Sự kiện nổi bật 1",
      excerpt: "Hội nghị xúc tiến đầu tư công nghệ cao Đà Nẵng năm 2023 với sự tham gia của nhiều doanh nghiệp lớn trong và ngoài nước.",
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      date: "15/05/2023",
      title: "Sự kiện nổi bật 2",
    },
    {
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      date: "10/05/2023",
      title: "Sự kiện nổi bật 3",
    },
    {
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      date: "05/05/2023",
      title: "Sự kiện nổi bật 4",
    },
    {
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      date: "01/05/2023",
      title: "Sự kiện nổi bật 5",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Sự kiện tiêu điểm</h2>
          <a href="#" className="text-dseza-light-primary dark:text-dseza-dark-primary hover:underline">Xem tất cả</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
