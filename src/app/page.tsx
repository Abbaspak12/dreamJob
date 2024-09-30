import { Inter } from "next/font/google";
import {
  HeaderBar,
  Footer,
  SocialMediaInfo,
  OurTeam,
  HowtoExplore,
  ExploreDreamStudio,
  HeroSection,
} from "./components/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
