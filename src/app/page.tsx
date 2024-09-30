import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import SocialMediaInfo from "./components/SocialMediaInfo";
import OurTeam from "./components/OurTeam";
import HowtoExplore from "./components/HowtoExplore";
import ExploreDreamStudio from "./components/ExploreDreamStudio";
import HeroSection from "./components/HeroSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] });
  return (
    <main className={`w-full min-h-screen bg-whiteColor ${inter.className}`}>
      <HeaderBar />
      <HeroSection />
      <ExploreDreamStudio />
      <HowtoExplore />
      <OurTeam />
      <SocialMediaInfo />
      <Footer />
    </main>
  );
}
