import Features from "@/components/Community/Features";
import Hero from "@/components/Community/Hero";
import MobileBanner from "@/components/Community/MobileBanner";
import PcBanner from "@/components/Community/PcBanner";

const CommunityPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className="hidden lg:block">
        <PcBanner />
      </div>
      <div className="block lg:hidden">
        <MobileBanner />
      </div>
    </>
  );
};

export default CommunityPage;
