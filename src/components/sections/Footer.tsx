import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 md:py-12 text-primary-foreground">
      <Image
        src="/PC-Elements-13.jpg"
        alt="Primal Cuts textured background for footer"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="texture dark wood"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay for text readability, opacity reduced */}
      
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        
        <Link
          href="https://primalcutsusa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-lg hover:text-accent transition-colors duration-300"
        >
          primalcutsusa.com
        </Link>
        <div className="mt-6 w-full max-w-xs md:max-w-md h-px bg-primary-foreground/20"></div>
        <p className="mt-6 text-sm font-body text-primary-foreground/70">
          © {currentYear} Primal Cuts. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
