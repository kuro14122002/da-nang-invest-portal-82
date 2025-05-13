
import { Component, FileText, MessageSquare, Calendar, ExternalLink } from 'lucide-react';

type QuickLinkProps = {
  icon: React.ElementType;
  title: string;
  url: string;
}

const QuickLinkItem = ({ icon: Icon, title, url }: QuickLinkProps) => (
  <a 
    href={url}
    className="flex flex-col items-center bg-white dark:bg-dseza-dark-secondary p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-dseza-dark-hover flex-1 text-center"
  >
    <div className="bg-dseza-light-primary/10 dark:bg-dseza-dark-primary/10 p-3 rounded-full mb-3">
      <Icon className="h-6 w-6 text-dseza-light-primary dark:text-dseza-dark-primary" />
    </div>
    <span className="text-sm font-medium">{title}</span>
  </a>
);

const QuickLinks = () => {
  const links = [
    {
      icon: Component,
      title: "Dịch vụ công trực tuyến",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: FileText,
      title: "Thủ tục hành chính",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: ExternalLink,
      title: "Công khai KQ giải quyết TTHC",
      url: "https://dichvucong.danang.gov.vn/"
    },
    {
      icon: MessageSquare,
      title: "Kênh thông tin tiếp nhận phản ánh, kiến nghị",
      url: "https://dseza.danang.gov.vn/lien-he/"
    },
    {
      icon: Calendar,
      title: "Đặt lịch hẹn giao dịch trực tuyến",
      url: "http://49.156.54.87/index.php?option=com_hengio&view=hengioonline&task=formdangkyonline&tmpl=widget"
    }
  ];

  return (
    <div className="bg-dseza-light-secondary dark:bg-dseza-dark-secondary py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-between">
          {links.map((link, index) => (
            <QuickLinkItem key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
