
import Features from '@/components/sections/Features';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero
        backgroundImageSrc="/PC-Elements-16.jpg"
        backgroundImageAlt="Primal Cuts product background"
        backgroundImageAiHint="product background"
        logoImageSrc="/PC-Elements-14.png"
        logoImageAlt="Primal Cuts tagline logo"
        logoImageAiHint="company tagline"
        logoWidth={300}
        logoHeight={300}
        logoClassName="dark:invert-0 invert"
      />
      
      {/* Features component now handles its own item animations */}
      <Features />
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <ContactCTA />
      </FadeInScroll>
      
      {/* Footer is wrapped with FadeInScroll by default, which gives a fade-up effect */}
      <FadeInScroll threshold={0.1}>
        <Footer />
      </FadeInScroll>
    </div>
  );
}
