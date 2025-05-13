
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CirclePlay, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ZoneProps = {
  id: string;
  name: string;
  shortName: string;
  companies: number;
  fillRate: number;
  area: string;
  image: string;
  year?: string;
}

const zones: ZoneProps[] = [
  {
    id: "kcnc",
    name: "Khu công nghệ Cao Đà Nẵng",
    shortName: "KCNC Đà Nẵng",
    companies: 32,
    fillRate: 42.85,
    area: "1.128,4 ha",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    year: "2010"
  },
  {
    id: "hkmr",
    name: "Hòa Khánh MR",
    shortName: "Hòa Khánh MR",
    companies: 42,
    fillRate: 100,
    area: "132,34 ha",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    year: "2008"
  },
  {
    id: "kcndn",
    name: "KCN Đà Nẵng",
    shortName: "KCN Đà Nẵng",
    companies: 45,
    fillRate: 100,
    area: "50,1 ha",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    year: "2000"
  },
  {
    id: "hk",
    name: "Hòa Khánh",
    shortName: "Hòa Khánh",
    companies: 228,
    fillRate: 100,
    area: "394 ha",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    year: "1998"
  },
  {
    id: "kcnlc",
    name: "KCN Liên Chiểu",
    shortName: "KCN Liên Chiểu",
    companies: 36,
    fillRate: 60.07,
    area: "289,35 ha",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    year: "2004"
  },
  {
    id: "dvts",
    name: "KCN DV Thủy Sản",
    shortName: "KCN DV Thủy Sản",
    companies: 56,
    fillRate: 100,
    area: "50,63 ha",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    year: "2003"
  },
  {
    id: "hc",
    name: "Hòa Cầm",
    shortName: "Hòa Cầm",
    companies: 81,
    fillRate: 97.66,
    area: "149,84 ha",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    year: "2002"
  },
  {
    id: "cntttt",
    name: "Khu CNTT Tập Trung",
    shortName: "Khu CNTT TT",
    companies: 5,
    fillRate: 31.82,
    area: "131,1 ha",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    year: "2016"
  }
];

const ZonesOverview = () => {
  const [selectedZone, setSelectedZone] = useState<string>(zones[0].id);
  
  const activeZone = zones.find(zone => zone.id === selectedZone) || zones[0];

  return (
    <section className="py-16 bg-dseza-dark-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-10 max-w-5xl mx-auto leading-tight">
          KHU CÔNG NGHỆ CAO, TRUNG TÂM VI MẠCH BÁN DẪN VÀ TRÍ TUỆ NHÂN TẠO, CÁC KHU CÔNG NGHIỆP, 
          KHU CNTT TẬP TRUNG, KHU THƯƠNG MẠI TỰ DO
        </h2>
        
        {/* Featured Zone Display */}
        <div className="relative w-full rounded-xl overflow-hidden">
          <AspectRatio ratio={5/2} className="w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${activeZone.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button 
                className="rounded-full w-16 h-16 bg-dseza-dark-primary/80 hover:bg-dseza-dark-primary text-white border-2 border-white/20"
                variant="default"
              >
                <CirclePlay className="h-10 w-10" />
                <span className="sr-only">Play Video</span>
              </Button>
            </div>
            
            {/* Content Cluster */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              {/* Left Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] mb-2">
                  {activeZone.name}
                </h3>
                <div className="flex items-center text-sm md:text-base">
                  <Users size={18} className="mr-2" />
                  {activeZone.companies} Doanh nghiệp
                </div>
                {activeZone.year && <div className="text-sm opacity-80 mt-1">Thành lập: {activeZone.year}</div>}
              </div>
              
              {/* Right Info */}
              <div className="md:text-right">
                <div className="text-sm md:text-base">
                  Tỉ lệ lấp đầy: {activeZone.fillRate}%
                </div>
                <div className="mt-1 w-[150px] md:ml-auto">
                  <Progress value={activeZone.fillRate} className="h-2 bg-white/30" />
                </div>
                <div className="text-xs md:text-sm mt-1">
                  Diện tích: {activeZone.area}
                </div>
              </div>
            </div>
          </AspectRatio>
        </div>
        
        {/* Zone Selector Thumbnail Strip */}
        <ScrollArea className="w-full mt-6">
          <div className="flex gap-4 pb-4">
            {zones.map((zone) => (
              <div 
                key={zone.id}
                className={cn(
                  "relative min-w-[220px] h-[150px] rounded-lg overflow-hidden cursor-pointer transition-all",
                  selectedZone === zone.id 
                    ? "border-4 border-dseza-dark-primary" 
                    : "border-2 border-transparent hover:border-dseza-dark-primary/60"
                )}
                onClick={() => setSelectedZone(zone.id)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${zone.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <h5 className="absolute bottom-3 left-3 text-white font-['Montserrat'] font-medium text-sm md:text-base">
                  {zone.shortName}
                </h5>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Grid of thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 mt-8">
          {zones.map((zone, index) => (
            <div 
              key={`thumbnail-${zone.id}`}
              className={cn(
                "bg-white/10 dark:bg-white/10 rounded-md p-4 text-center text-white cursor-pointer transition-all",
                index === zones.findIndex(z => z.id === selectedZone) ? "border-b-2 border-dseza-dark-primary" : "opacity-60 hover:opacity-100"
              )}
              onClick={() => setSelectedZone(zone.id)}
            >
              <div className="text-xs uppercase">{zone.shortName}</div>
              {zone.year && <div className="text-sm opacity-80">{zone.year}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesOverview;
