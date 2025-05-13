
import { Progress } from "@/components/ui/progress";

type ZoneProps = {
  name: string;
  companies: number;
  fillRate: number;
  area: string;
}

const ZoneCard = ({ name, companies, fillRate, area }: ZoneProps) => (
  <div className="bg-white dark:bg-dseza-dark-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-dseza-dark-hover">
    <h3 className="text-lg font-bold mb-4 text-dseza-light-primary dark:text-dseza-dark-primary">{name}</h3>
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span>Doanh nghiệp:</span>
        <span className="font-semibold">{companies}</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>Tỉ lệ lấp đầy:</span>
          <span className="font-semibold">{fillRate}%</span>
        </div>
        <Progress value={fillRate} className="h-2" />
      </div>
      <div className="flex justify-between text-sm">
        <span>Diện tích:</span>
        <span className="font-semibold">{area}</span>
      </div>
    </div>
  </div>
);

const IndustrialZones = () => {
  const zones = [
    {
      name: "Khu công nghệ cao Đà Nẵng",
      companies: 25,
      fillRate: 45,
      area: "1.010,6 ha"
    },
    {
      name: "Trung tâm Vi mạch bán dẫn",
      companies: 3,
      fillRate: 20,
      area: "22,7 ha"
    },
    {
      name: "Khu CNTT tập trung",
      companies: 12,
      fillRate: 65,
      area: "131 ha"
    },
    {
      name: "Khu công nghiệp Hòa Khánh",
      companies: 46,
      fillRate: 95,
      area: "196 ha"
    },
    {
      name: "Khu công nghiệp Hòa Cầm",
      companies: 38,
      fillRate: 92,
      area: "144,7 ha"
    },
    {
      name: "Khu công nghiệp Liên Chiểu",
      companies: 12,
      fillRate: 40,
      area: "75 ha"
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          KHU CÔNG NGHỆ CAO, TRUNG TÂM VI MẠCH BÁN DẪN VÀ TRÍ TUỆ NHÂN TẠO, CÁC KHU CÔNG NGHIỆP, KHU CNTT TẬP TRUNG, KHU THƯƠNG MẠI TỰ DO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {zones.map((zone, index) => (
            <ZoneCard key={index} {...zone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialZones;
