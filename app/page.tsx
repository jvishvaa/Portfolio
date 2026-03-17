import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeMessage from "@/components/MarqueeMessage";
import SkillsMarquee from "@/components/MarqueeSkills";
import InteractiveStatsDetails from "@/components/IntercativeStatsDetails";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MarqueeMessage />
      <About />
      <InteractiveStatsDetails />
      <SkillsMarquee />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
