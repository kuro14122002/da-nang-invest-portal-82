
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Image, Video, File } from 'lucide-react';

const MediaLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('photos');
  
  const mediaTabs = [
    { id: 'photos', label: 'Hình ảnh', icon: <Image className="mr-2" /> },
    { id: 'videos', label: 'Video', icon: <Video className="mr-2" /> },
    { id: 'documents', label: 'Tài liệu', icon: <File className="mr-2" /> },
  ];
  
  // Placeholder media items with more realistic data
  const mediaItems = [
    {
      id: 1,
      title: 'Khu công nghệ cao Đà Nẵng',
      type: 'photos',
      date: '15/05/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Hinh+anh+1',
    },
    {
      id: 2,
      title: 'Hội nghị xúc tiến đầu tư 2023',
      type: 'videos',
      date: '22/06/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Video+1',
    },
    {
      id: 3,
      title: 'Báo cáo thường niên DSEZA',
      type: 'documents',
      date: '30/04/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Tai+lieu+1',
    },
    {
      id: 4,
      title: 'Lễ khởi công dự án mới',
      type: 'photos',
      date: '08/07/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Hinh+anh+2',
    },
    {
      id: 5,
      title: 'Giới thiệu khu công nghệ cao',
      type: 'videos',
      date: '12/03/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Video+2',
    },
    {
      id: 6,
      title: 'Chính sách ưu đãi đầu tư',
      type: 'documents',
      date: '05/02/2023',
      thumbnail: 'https://via.placeholder.com/400x225/1E272F/FFFFFF?text=Tai+lieu+2',
    },
  ];

  // Filtered media based on active tab
  const filteredMedia = mediaItems.filter(item => item.type === activeTab);

  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Tư liệu
        </h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {mediaTabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex items-center transition-all ${
                activeTab === tab.id 
                  ? "" 
                  : "hover:text-foreground"
              }`}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>
        
        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group border border-border"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="font-medium"
                  >
                    {activeTab === 'photos' && "Xem ảnh"}
                    {activeTab === 'videos' && "Xem video"}
                    {activeTab === 'documents' && "Tải xuống"}
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-foreground line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ngày đăng: {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-8">
          <Button variant="default" size="lg" asChild>
            <a href="/tu-lieu">
              Xem tất cả tư liệu
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaLibrary;
