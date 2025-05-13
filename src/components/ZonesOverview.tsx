
import { useState } from "react";
import { Users } from "lucide-react";

const ZonesOverview = () => {
  // List of zones with data
  const zones = [
    {
      id: "kcnc",
      name: "KCNC Đà Nẵng",
      enterprises: 32,
      occupancy: 42.85,
      area: "1.128,4 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=KCNC+Da+Nang",
    },
    {
      id: "hkmr",
      name: "Hòa Khánh MR", 
      enterprises: 42,
      occupancy: 100,
      area: "132,34 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=Hoa+Khanh+MR",
    },
    {
      id: "kcndn",
      name: "KCN Đà Nẵng",
      enterprises: 45,
      occupancy: 100,
      area: "50,1 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=KCN+Da+Nang",
    },
    {
      id: "hk",
      name: "Hòa Khánh",
      enterprises: 228,
      occupancy: 100,
      area: "394 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=Hoa+Khanh",
    },
    {
      id: "kcnlc",
      name: "KCN Liên Chiểu",
      enterprises: 36,
      occupancy: 60.07,
      area: "289,35 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=KCN+Lien+Chieu",
    },
    {
      id: "dvts",
      name: "KCN DV Thủy Sản",
      enterprises: 56,
      occupancy: 100,
      area: "50,63 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=KCN+DV+Thuy+San",
    },
    {
      id: "hc",
      name: "Hòa Cầm",
      enterprises: 81,
      occupancy: 97.66,
      area: "149,84 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=Hoa+Cam",
    },
    {
      id: "cntttt",
      name: "Khu CNTT TT",
      enterprises: 5,
      occupancy: 31.82,
      area: "131,1 ha",
      image: "https://via.placeholder.com/1200x500/1E272F/FFFFFF?text=Khu+CNTT+TT",
    },
  ];

  // State for selected zone
  const [selectedZone, setSelectedZone] = useState(zones[0]);

  return (
    <section className="w-full py-16 px-6 bg-dseza-dark-bg text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-10 max-w-5xl mx-auto leading-tight">
          KHU CÔNG NGHỆ CAO, TRUNG TÂM VI MẠCH BÁN DẪN VÀ TRÍ TUỆ NHÂN TẠO, CÁC KHU CÔNG NGHIỆP, KHU CNTT TẬP TRUNG, KHU THƯƠNG MẠI TỰ DO
        </h2>
        
        {/* Featured Zone Display */}
        <div className="relative w-full pt-[40%] rounded-xl overflow-hidden">
          <img 
            src={selectedZone.image}
            alt={selectedZone.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] mb-2">{selectedZone.name}</h3>
              <div className="flex items-center gap-x-2">
                <Users size={18} />
                <span>{selectedZone.enterprises} Doanh nghiệp</span>
              </div>
            </div>
            
            <div className="text-white">
              <div className="text-right mb-1">Tỉ lệ lấp đầy: {selectedZone.occupancy}%</div>
              <div className="w-40 h-2 bg-white/30 rounded-full">
                <div 
                  className="h-full rounded-full bg-dseza-dark-primary" 
                  style={{ width: `${selectedZone.occupancy}%` }}
                />
              </div>
              <div className="text-right mt-1 text-sm">Diện tích: {selectedZone.area}</div>
            </div>
          </div>
        </div>
        
        {/* Zone Selector Thumbnails */}
        <div className="mt-6 flex gap-4 pb-4 overflow-x-auto scrollbar-none">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`relative min-w-[220px] h-36 rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedZone.id === zone.id
                  ? "border-4 border-dseza-dark-primary"
                  : "border-2 border-transparent hover:border-2 hover:border-dseza-dark-primary/60"
              }`}
              onClick={() => setSelectedZone(zone)}
            >
              <img 
                src={zone.image}
                alt={zone.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h5 className="absolute bottom-3 left-3 text-white font-['Montserrat'] font-medium">{zone.name}</h5>
            </div>
          ))}
        </div>
        
        {/* Grid of thumbnails with visual indicator of selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 mt-8">
          {zones.map((zone) => (
            <div 
              key={`thumbnail-${zone.id}`}
              className={`bg-white/10 rounded-md p-4 text-center text-white cursor-pointer transition-all ${
                selectedZone.id === zone.id ? "border-b-2 border-dseza-dark-primary" : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => setSelectedZone(zone)}
            >
              <div className="text-xs uppercase">{zone.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesOverview;
