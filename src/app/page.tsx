import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import SocialMediaInfo from "./components/SocialMediaInfo";
import OurTeam from "./components/OurTeam";
import HowtoExplore from "./components/HowtoExplore";
import ExploreDreamStudio from "./components/ExploreDreamStudio"

export default function Home() {
  return (
<main className="w-full min-h-screen">
<HeaderBar/>
<ExploreDreamStudio/>
<HowtoExplore/>
<OurTeam/>
<SocialMediaInfo/>
<Footer/>
</main>
  );
}
