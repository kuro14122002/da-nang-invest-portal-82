import { useState } from 'react';
import { Search as SearchIcon, User as UserIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  // Chọn một chiều cao cố định cho header, ví dụ h-16 (64px), h-20 (80px), h-24 (96px)
  // Giá trị này sẽ quyết định logo to đến mức nào
  const headerHeightClass = "h-20"; // Ví dụ: header cao 80px. Bạn có thể thay đổi giá trị này.

  return (
    <div className={`w-full bg-white dark:bg-dseza-dark-bg border-b border-gray-200 dark:border-dseza-dark-hover`}>
      {/* Áp dụng chiều cao cố định cho container hoặc wrapper trực tiếp của flex items */}
      <div className={`container mx-auto flex ${headerHeightClass} items-center justify-between`}>
        {/* Phần Logo */}
        {/* Link cũng chiếm h-full và có padding dọc nhỏ để logo không sát viền */}
        <Link to="/" className="flex h-full items-center gap-2 sm:gap-3 group mr-4 sm:mr-8 py-2"> {/* Ví dụ py-2 (8px top/bottom padding) */}
          {/* Logo cho Light Mode */}
          <img
            src="/media/lightlogo3.png" // Đường dẫn đến logo light mode
            alt="DSEZA Light Logo"
            className="block h-full w-auto dark:hidden" // h-full để chiếm hết chiều cao của Link (đã trừ padding)
          />
          {/* Logo cho Dark Mode */}
          <img
            src="/media/darklogo3.png" // Đường dẫn đến logo dark mode
            alt="DSEZA Dark Logo"
            className="hidden h-full w-auto dark:block" // h-full để chiếm hết chiều cao của Link (đã trừ padding)
          />
        </Link>

        {/* Thanh tìm kiếm */}
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md mx-2 sm:mx-4">
          <form onSubmit={handleSearch} className="flex w-full">
            <Input
              type="search"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-gray-300 dark:border-dseza-dark-hover rounded-l-md focus-visible:ring-1
                         focus-visible:ring-dseza-light-primary dark:focus-visible:ring-dseza-dark-primary
                         bg-white dark:bg-dseza-dark-secondary dark:text-white text-sm h-9 sm:h-10"
            />
            <Button
              type="submit"
              className="bg-dseza-light-primary hover:bg-dseza-light-primary-hover
                         dark:bg-dseza-dark-primary dark:hover:bg-dseza-dark-primary-hover
                         rounded-r-md rounded-l-none px-3 sm:px-4 h-9 sm:h-10"
            >
              <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </form>
        </div>

        {/* Nút đăng nhập */}
        <div>
          <a
            href="https://dseza.danang.gov.vn/umbraco/login"
            className="flex items-center text-dseza-light-primary dark:text-dseza-dark-primary hover:underline text-sm sm:text-base"
          >
            <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Đăng nhập</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;