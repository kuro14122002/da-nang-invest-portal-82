
import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

type SubMenuItem = {
  title: string;
  url: string;
  items?: SubMenuItem[];
};

type MenuItem = {
  title: string;
  url: string;
  items?: SubMenuItem[];
};

const NavigationBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Mock menu data structure based on the requirements
  const menuItems: MenuItem[] = [
    {
      title: "Giới thiệu",
      url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/",
      items: [
        {
          title: "Giới thiệu",
          url: "#",
          items: [
            { title: "Thư ngỏ", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/thu-ngo/" },
            { title: "Tổng quan về Đà Nẵng", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/tong-quan-ve-tpda-nang/" },
            { title: "Tổng quan về Ban Quản lý", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/tong-quan-ve-ban-quan-ly/" },
            { title: "Chức năng, nhiệm vụ, quyền hạn Ban Quản lý", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/chuc-nang-nhiem-vu-quyen-han-ban-quan-ly/" },
            { title: "Các phòng ban", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/cac-phong-ban/" },
            { title: "Đơn vị trực thuộc", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/don-vi-truc-thuoc/" }
          ]
        },
        {
          title: "Khu hành chính",
          url: "#",
          items: [
            { title: "Khu công nghệ cao Đà Nẵng", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghe-cao-da-nang/" },
            { title: "Khu thương mại tự do Đà Nẵng", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-thuong-mai-tu-do-da-nang/" },
            { title: "Khu CNTT tập trung", url: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghe-thong-tin-tap-trung/" },
            { title: "Các Khu công nghiệp Đà Nẵng", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/khu-hanh-chinh/cac-khu-cong-nghiep-da-nang/" }
          ]
        }
      ]
    },
    {
      title: "Tin tức",
      url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/",
      items: [
        {
          title: "Tin tức | Sự kiện",
          url: "#",
          items: [
            { title: "Đầu tư - Hợp tác Quốc tế", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/dau-tu-hop-tac-quoc-te/" },
            { title: "Doanh nghiệp", url: "#" },
            { title: "Chuyển đổi số", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/chuyen-doi-so/" },
            { title: "Đào tạo, Ươm tạo Khởi nghiệp", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/dao-tao-uom-tao-khoi-nghiep/" }
          ]
        },
        {
          title: "Xem thêm",
          url: "#",
          items: [
            { title: "Lịch công tác", url: "https://dseza.danang.gov.vn/lich-cong-tac/" },
            { title: "Thông báo", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/thong-bao/" },
            { title: "Thông tin báo chí", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/thong-tin-bao-chi/" }
          ]
        }
      ]
    },
    {
      title: "Doanh nghiệp",
      url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/",
      items: [
        {
          title: "Báo cáo",
          url: "#",
          items: [
            { title: "Báo cáo trực tuyến về DSEZA", url: "https://maps.dhpiza.vn/login?ReturnUrl=%2Fadmin%2Fbaocaonhadautu%2Fyeucaubaocao" },
            { title: "Báo cáo giám sát và đánh giá đầu tư", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/bao-cao-giam-sat-va-danh-gia-dau-tu/" },
            { title: "Mẫu | Bảng biểu báo cáo", url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/mau-bang-bieu-bao-cao/" }
          ]
        }
      ]
    },
    {
      title: "Cẩm nang đầu tư",
      url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/cam-nang-dau-tu/",
      items: []
    },
    {
      title: "Văn bản",
      url: "https://dseza.danang.gov.vn/van-ban/",
      items: [
        {
          title: "Văn bản pháp luật",
          url: "#",
          items: [
            { title: "Văn bản pháp quy trung ương", url: "https://dseza.danang.gov.vn/van-ban/van-ban-phap-quy-tw/" },
            { title: "Văn bản pháp quy địa phương", url: "https://dseza.danang.gov.vn/van-ban/van-ban-phap-quy-dia-phuong/" },
            { title: "Văn bản chỉ đạo điều hành", url: "https://dseza.danang.gov.vn/van-ban/van-ban-chi-dao-dieu-hanh/" }
          ]
        }
      ]
    },
    {
      title: "Cải cách hành chính",
      url: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/moi-truong-dau-tu/cai-cach-hanh-chinh/",
      items: [
        {
          title: "Ứng dụng và dịch vụ",
          url: "#",
          items: [
            { title: "Dịch vụ công trực tuyến", url: "https://dichvucong.danang.gov.vn/" },
            { title: "Bưu chính công ích", url: "https://egov.danang.gov.vn/dailyDVc" },
            { title: "Tra cứu hồ sơ", url: "https://dichvucong.danang.gov.vn/web/guest/tra-cuu-ho-so" }
          ]
        }
      ]
    },
    {
      title: "Liên hệ",
      url: "https://dseza.danang.gov.vn/lien-he/",
      items: []
    }
  ];

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="glass-nav sticky top-0 z-20">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              className="group relative py-4 px-3 hover:text-dseza-light-primary-hover dark:hover:text-dseza-dark-primary"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={item.url}
                className="flex items-center gap-1 text-sm font-medium"
              >
                {item.title}
                {item.items && item.items.length > 0 && (
                  <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </a>
              
              {item.items && item.items.length > 0 && activeIndex === index && (
                <div className="dropdown-content bg-white dark:bg-dseza-dark-secondary w-60 mt-4 py-2 rounded-md shadow-lg border border-gray-200 dark:border-dseza-dark-hover animate-slide-down">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="relative group/sub">
                      <a 
                        href={subItem.url}
                        className="block px-4 py-2 hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover"
                      >
                        <div className="flex items-center justify-between">
                          <span>{subItem.title}</span>
                          {subItem.items && subItem.items.length > 0 && (
                            <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                          )}
                        </div>
                      </a>
                      
                      {subItem.items && subItem.items.length > 0 && (
                        <div className="invisible absolute left-full top-0 w-60 bg-white dark:bg-dseza-dark-secondary rounded-md shadow-lg border border-gray-200 dark:border-dseza-dark-hover group-hover/sub:visible">
                          {subItem.items.map((nestedItem, nestedIndex) => (
                            <a 
                              key={nestedIndex}
                              href={nestedItem.url}
                              className="block px-4 py-2 hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover"
                            >
                              {nestedItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
