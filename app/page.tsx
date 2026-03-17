import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeMessage from "@/components/MarqueeMessage";
import SkillsMarquee from "@/components/MarqueeSkills";
import StatsCircles from "@/components/statsCircle";
// import InteractiveStats from "@/components/InteractiveStats";
import InteractiveStats from "@/components/IntercativeStatsDetails";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MarqueeMessage />
      <About />
      {/* <StatsCircles /> */}
      <InteractiveStats />
      <SkillsMarquee />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
