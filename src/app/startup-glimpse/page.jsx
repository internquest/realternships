import CardsGrid from "@/components/StartupGlimpse/CardsGrid";
import Header from "@/components/StartupGlimpse/Header";
import Imagine from "@/components/StartupGlimpse/Imagine";
import NextBigThing from "@/components/StartupGlimpse/NextBigThing";
import Tagline from "@/components/StartupGlimpse/Tagline";

const StartupGlimpsePage = () => {
  return (
    <>
      <Header />
      <Imagine />
      <CardsGrid />
      <NextBigThing />
      <Tagline />
    </>
  );
};

export default StartupGlimpsePage;
