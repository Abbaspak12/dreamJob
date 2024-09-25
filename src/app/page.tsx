import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import SocialMediaInfo from "./components/SocialMediaInfo";
export default function Home() {
  return (
<main className="w-full min-h-screen">
<HeaderBar/>
<div className="h-60 w-full">
</div>
<SocialMediaInfo/>
<Footer/>
</main>
  );
}
