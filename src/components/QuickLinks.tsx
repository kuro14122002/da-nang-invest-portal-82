
import { ClipboardList, FileText, CheckSquare, MessageCircle, CalendarDays } from 'lucide-react';

type QuickLinkProps = {
  icon: React.ElementType;
  title: string;
  url: string;
}

const QuickLinkItem = ({ icon: Icon, title, url }: QuickLinkProps) => (
  <a 
    href={url}
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-dseza-light-secondary dark:bg-dseza-dark-secondary text-center transform transition-all duration-300 hover:translate-y-[-4px] hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover"
  >
    <div className="mb-3">
      <Icon className="h-10 w-10 text-dseza-light-accent dark:text-dseza-dark-primary" />
    </div>
    <span className="font-medium font-['Montserrat']">{title}</span>
  </a>
);

const QuickLinks = () => {
  const links = [
    {
      icon: ClipboardList,
      title: "Dịch vụ công trực tuyến",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: FileText,
      title: "Thủ tục hành chính",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: CheckSquare,
      title: "Công khai KQ giải quyết TTHC",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: MessageCircle,
      title: "Kênh thông tin tiếp nhận phản ánh, kiến nghị",
      url: "/lien-he/"
    },
    {
      icon: CalendarDays,
      title: "Đặt lịch hẹn giao dịch trực tuyến",
      url: "http://49.156.54.87/index.php?option=com_hengio&view=hengioonline&task=formdangkyonline&tmpl=widget"
    }
  ];

  return (
    <div className="w-full py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {links.map((link, index) => (
            <QuickLinkItem key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
