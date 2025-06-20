import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Highlight from '@/components/sections/Highlight';
import Showcase from '@/components/sections/Showcase';
import DescriptionSection from '@/components/sections/DescriptionSection';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero section typically doesn't need fade-in as it's immediately visible, but can be added for consistency */}
      <FadeInScroll threshold={0.01}>
        <Hero />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Features />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Highlight />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Showcase />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <DescriptionSection />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <ContactCTA />
      </FadeInScroll>
      
      <Footer />
    </div>
  );
}
