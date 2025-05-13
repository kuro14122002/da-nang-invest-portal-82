
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, CirclePlay } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ZoneProps = {
  id: string;
  name: string;
  companies: number;
  fillRate: number;
  area: string;
  image: string;
  year?: string;
}

const zones: ZoneProps[] = [
  {
    id: "kcnc",
    name: "KHU CÔNG NGHỆ CAO ĐÀ NẴNG",
    companies: 25,
    fillRate: 45,
    area: "1.010,6 ha",
    image: "/placeholder.svg",
    year: "2010"
  },
  {
    id: "vimach",
    name: "TRUNG TÂM VI MẠCH BÁN DẪN",
    companies: 3,
    fillRate: 20,
    area: "22,7 ha",
    image: "/placeholder.svg",
    year: "2023"
  },
  {
    id: "cntt",
    name: "KHU CNTT TẬP TRUNG",
    companies: 12,
    fillRate: 65,
    area: "131 ha",
    image: "/placeholder.svg",
    year: "2016"
  },
  {
    id: "hoakhanh",
    name: "KHU CÔNG NGHIỆP HÒA KHÁNH",
    companies: 46,
    fillRate: 95,
    area: "196 ha",
    image: "/placeholder.svg",
    year: "2000"
  },
  {
    id: "hoacam",
    name: "KHU CÔNG NGHIỆP HÒA CẦM",
    companies: 38,
    fillRate: 92,
    area: "144,7 ha",
    image: "/placeholder.svg",
    year: "1998"
  },
  {
    id: "lienchieu",
    name: "KHU CÔNG NGHIỆP LIÊN CHIỂU",
    companies: 12,
    fillRate: 40,
    area: "75 ha",
    image: "/placeholder.svg",
    year: "2004"
  },
];

const ZoneCard = ({ zone, isActive }: { zone: ZoneProps, isActive: boolean }) => {
  return (
    <div 
      className={cn(
        "transition-all duration-300 group",
        isActive ? "w-full flex-1" : "w-24 cursor-pointer"
      )}
    >
      <div 
        className={cn(
          "h-full relative overflow-hidden",
          isActive ? "rounded-lg" : "rounded-md"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        
        <AspectRatio ratio={16/9} className="w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${zone.image})` }}
          >
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Button 
                  className="rounded-full w-16 h-16 bg-primary/80 hover:bg-primary text-white border-2 border-white/20"
                  variant="default"
                >
                  <CirclePlay className="h-10 w-10" />
                  <span className="sr-only">Play Video</span>
                </Button>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
              {isActive ? (
                <>
                  <div className="uppercase font-light text-xs mb-2">ONLINE CASE STUDIES</div>
                  <h3 className="text-3xl font-bold mb-2">{zone.name}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="font-mono text-lg">{zone.area}</div>
                    {zone.year && <div className="text-sm opacity-80">Thành lập: {zone.year}</div>}
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Doanh nghiệp:</span>
                      <span className="font-semibold">{zone.companies}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tỉ lệ lấp đầy:</span>
                      <span className="font-semibold">{zone.fillRate}%</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="writing-vertical-lr transform -rotate-180 w-full h-full flex items-center justify-center text-sm font-medium">
                  {zone.id.toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

const IndustrialZones = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 bg-gradient-to-r from-dseza-dark-bg to-dseza-dark-secondary dark:from-dseza-dark-bg dark:to-dseza-dark-secondary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">
            KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG
          </h2>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white"
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white"
              onClick={() => setActiveIndex(Math.min(zones.length - 1, activeIndex + 1))}
            >
              <ArrowDown className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex h-[500px] gap-2">
          {zones.map((zone, index) => (
            <ZoneCard 
              key={zone.id} 
              zone={zone}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile/tablet view */}
        <div className="lg:hidden">
          <Carousel>
            <CarouselContent>
              {zones.map((zone) => (
                <CarouselItem key={zone.id}>
                  <ZoneCard zone={zone} isActive={true} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 hover:bg-white/20 text-white border-white/20" />
            <CarouselNext className="bg-white/10 hover:bg-white/20 text-white border-white/20" />
          </Carousel>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {zones.map((zone, index) => (
            <div 
              key={`thumbnail-${zone.id}`}
              className={cn(
                "bg-white/10 dark:bg-white/10 rounded-md p-4 text-center text-white cursor-pointer transition-all",
                index === activeIndex ? "border-b-2 border-primary" : "opacity-60 hover:opacity-100"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-xs uppercase">{zone.id}</div>
              {zone.year && <div className="text-sm opacity-80">{zone.year}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialZones;
