import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div
          className="h-20 w-20 md:h-24 md:w-24 bg-primary-foreground/10 border-2 border-primary-foreground/30 rounded-full mb-4 flex items-center justify-center shadow-lg"
          aria-label="Primal Cuts Logo Placeholder"
        >
          {/* Placeholder for a more elaborate logo, maybe a stylized steer head or initials "PC" */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground opacity-70">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M12.48 12.87c.24-.49.76-.87 1.32-.95.7-.09 1.38.21 1.84.76.04.04.08.09.11.14l.19.25c.2.27.45.49.73.63s.59.22.89.16l.47-.09a.92.92 0 0 1 .84.42l.29.48c.19.32.25.71.15 1.08s-.38.69-.73.86l-.41.19c-.29.13-.52.34-.68.6s-.22.56-.15.86l.12.51a.91.91 0 0 1-.52.97l-.48.18a1.9 1.9 0 0 1-1.22-.1c-.31-.11-.59-.3-.82-.55l-.26-.28c-.22-.24-.5-.43-.81-.54s-.65-.14-.95.03l-.5.28a.96.96 0 0 1-.95-.13 1.01 1.01 0 0 1-.4-1.06l.13-.51c.09-.3.08-.61-.02-.9s-.29-.54-.53-.73l-.38-.3c-.25-.2-.44-.47-.54-.77s-.12-.62.01-.91l.21-.48a.91.91 0 0 1 .8-.53l.5-.08c.3-.05.59-.18.83-.37s.43-.44.55-.72l.08-.19C12.37 13.02 12.42 12.95 12.48 12.87z"></path>
          </svg>
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
