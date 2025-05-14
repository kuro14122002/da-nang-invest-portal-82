
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, MapPinIcon, GlobeIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  // Format date in Vietnamese
  const formatDateVi = (date: Date) => {
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    
    return `${weekday}, ngày ${day} tháng ${month} năm ${year}`;
  };
  
  // Format date in English
  const formatDateEn = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };
  
  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: language === 'en'
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="w-full bg-dseza-light-secondary dark:bg-dseza-dark-secondary text-sm py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <p className="text-gray-600 dark:text-gray-300">
            {language === 'vi' ? formatDateVi(currentTime) : formatDateEn(currentTime)}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{formatTime(currentTime)}</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://dseza.danang.gov.vn/so-do-site" className="flex items-center hover:text-dseza-light-primary dark:hover:text-dseza-dark-primary transition-colors">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{language === 'vi' ? 'Sơ đồ site' : 'Site map'}</span>
          </a>
          <button onClick={toggleLanguage} className="flex items-center hover:text-dseza-light-primary dark:hover:text-dseza-dark-primary transition-colors">
            <GlobeIcon className="h-4 w-4 mr-1" />
            <span>{language === 'vi' ? 'Tiếng Việt' : 'English'}</span>
          </button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleTheme} 
            className="flex items-center p-0 hover:bg-transparent hover:text-dseza-light-primary dark:hover:text-dseza-dark-primary"
          >
            {isDark ? <SunIcon className="h-4 w-4 mr-1" /> : <MoonIcon className="h-4 w-4 mr-1" />}
            <span>{isDark ? (language === 'vi' ? 'Chế độ tối' : 'Dark mode') : (language === 'vi' ? 'Chế độ sáng' : 'Light mode')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
