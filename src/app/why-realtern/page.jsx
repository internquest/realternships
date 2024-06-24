import Banner from "@/components/WhyRealtern/Banner";
import BlueBanner from "@/components/WhyRealtern/BlueBanner";
import GrayBanner from "@/components/WhyRealtern/GrayBanner";
import Hero from "@/components/WhyRealtern/Hero";
import MarqueeComponent from "@/components/WhyRealtern/MarqueeComponent";
import Poster from "@/components/WhyRealtern/Poster";
import SecuringInternship from "@/components/WhyRealtern/SecuringInternship";
import SliderComponent from "@/components/WhyRealtern/Slider";

const WhyRealtern = () => {
  return (
    <div>
      <Hero />
      <MarqueeComponent />
      <Banner />
      <Poster />
      <SliderComponent />
      <SecuringInternship />
      <GrayBanner />
      <BlueBanner />
    </div>
  );
};

export default WhyRealtern;
