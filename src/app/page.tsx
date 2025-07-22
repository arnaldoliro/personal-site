import Hero from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
