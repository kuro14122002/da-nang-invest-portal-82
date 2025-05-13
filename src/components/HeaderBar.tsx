
import { useState } from 'react';
import { SearchIcon, UserIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeaderBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  return (
    <div className="w-full bg-white dark:bg-dseza-dark-bg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="mr-8">
            <h1 className="text-2xl font-bold text-dseza-light-primary dark:text-dseza-dark-primary">
              DSEZA
            </h1>
            {/* In a real implementation, replace the text with an actual logo image */}
            {/* <img src="/logo.svg" alt="DSEZA Logo" className="h-12" /> */}
          </a>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="flex">
            <Input
              type="search"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 dark:border-dseza-dark-hover rounded-l-md focus-visible:ring-1 focus-visible:ring-dseza-light-primary dark:focus-visible:ring-dseza-dark-primary"
            />
            <Button 
              type="submit"
              className="bg-dseza-light-primary hover:bg-dseza-light-primary-hover dark:bg-dseza-dark-primary dark:hover:bg-dseza-dark-primary-hover rounded-r-md rounded-l-none"
            >
              <SearchIcon className="h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div>
          <a 
            href="https://dseza.danang.gov.vn/umbraco/login" 
            className="flex items-center text-dseza-light-primary dark:text-dseza-dark-primary hover:underline"
          >
            <UserIcon className="h-5 w-5 mr-2" />
            <span>Đăng nhập</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
