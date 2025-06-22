import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10 md:py-12 text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
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
