import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div 
          className="h-20 w-20 md:h-24 md:w-24 bg-primary-foreground/10 border-2 border-primary-foreground/30 rounded-full mb-4 flex items-center justify-center shadow-lg p-2"
          aria-label="Primal Cuts Logo"
        >
          <Image
            src="/PC-Elements-16.png" 
            alt="Primal Cuts Logo"
            width={80} 
            height={80} 
            className="object-contain"
          />
        </div>
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
