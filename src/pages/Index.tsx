
import { useEffect } from 'react';
import TopBar from "../components/TopBar";
import HeaderBar from "../components/HeaderBar";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import QuickLinks from "../components/QuickLinks";
import FeaturedEvents from "../components/FeaturedEvents";
import NewsSection from "../components/NewsSection";
import ZonesOverview from "../components/ZonesOverview";
import IndustrialZones from "../components/IndustrialZones";
import Footer from "../components/Footer";

const Index = () => {
  // Set the page title
  useEffect(() => {
    document.title = "DSEZA - Ban Quản Lý Khu Công Nghệ Cao và Các Khu Công Nghiệp Đà Nẵng";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <HeaderBar />
      <NavigationBar />
      <main className="flex-1">
        <HeroSection />
        <QuickLinks />
        <FeaturedEvents />
        <NewsSection />
        <ZonesOverview />
        <IndustrialZones />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
