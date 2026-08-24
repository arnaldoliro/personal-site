import Hero from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutSection />
      <CertificatesSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
