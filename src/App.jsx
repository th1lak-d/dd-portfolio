import Hero from "./components/Hero.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Skills from "./components/Skills.jsx";
import NextProject from "./components/NextProject.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-paper text-ink min-h-screen font-body">
      <Hero />
      <FeaturedProject />
      <Skills />
      <NextProject />
      <Contact />
      <Footer />
    </div>
  );
}
