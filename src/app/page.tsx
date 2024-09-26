import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import SocialMediaInfo from "./components/SocialMediaInfo";
import OurTeam from "./components/OurTeam";

export default function Home() {
  return (
<main className="w-full min-h-screen">
<HeaderBar/>
<OurTeam/>
<SocialMediaInfo/>
<Footer/>
</main>
  );
}
