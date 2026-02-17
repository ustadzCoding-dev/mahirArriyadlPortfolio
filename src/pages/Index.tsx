import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import BrosurSection from "@/components/BrosurSection";
import PendaftaranSection from "@/components/PendaftaranSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSection />
        <BrosurSection />
        <PendaftaranSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
