import ArticalSection from "./ArticalSection";
import ClientTestimonials from "./ClientTestimonials";
import ExperienceSection from "./ExperienceSection";
import FAQ from "./FaqSection";
import Footer from "./FooterSection";
import GetInTouch from "./GetInTouchSection";
import HeroSection from "./HeroSection";
import MeditationSection from "./MeditationSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";
import WellnessInsights from "./WellnessInsights";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <ArticalSection />
      <ServicesSection />
      <MeditationSection />
      <ClientTestimonials />
      <WellnessInsights />
      <FAQ />
      <ExperienceSection />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Landing
