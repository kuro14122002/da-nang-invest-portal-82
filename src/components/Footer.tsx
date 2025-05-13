
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dseza-light-primary dark:bg-dseza-dark-bg text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
              <p>Lô A17, đường Trung tâm, Khu công nghệ cao, xã Hòa Liên, huyện Hòa Vang, Đà Nẵng</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
              <div>
                <p>SĐT: 0236 3666117</p>
                <p>Điện thoại bộ phận Tiếp nhận hồ sơ và Trả kết quả: 0236.3666100</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
              <p>Email: dseza@danang.gov.vn</p>
            </div>
          </div>
          
          {/* Google Map */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bản đồ</h3>
            <div className="aspect-video w-full rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8727747904867!2d108.25431687475083!3d16.062332084655663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142198c825000e9%3A0x1e19932fa29407b4!2zS2h1IEPDtG5nIE5naOG7hyBDYW8gxJDDoCBO4bq1bmc!5e0!3m2!1sen!2s!4v1713918961978!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Certifications and Copyright */}
          <div>
            <h3 className="text-lg font-bold mb-4">Chứng nhận và Giấy phép</h3>
            <div className="space-y-3 text-sm">
              <p>Website đạt chứng nhận tín nhiệm mạng.</p>
              <p>Giấy phép: Số 05/GP-STTTT do Sở Thông tin và Truyền thông Đà Nẵng cấp ngày 02/01/2020.</p>
              <p>Trưởng Ban biên tập: Trần Văn Tỵ, Phó Trưởng ban Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng.</p>
              <p>Yêu cầu ghi rõ nguồn khi trích dẫn thông tin.</p>
              
              <div className="border-t border-white/20 pt-3 mt-6">
                <p>© Bản quyền của Ban Quản lý Khu công nghệ cao và các Khu công nghiệp Đà Nẵng.</p>
                <p>Số lượt truy cập: 28734</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
