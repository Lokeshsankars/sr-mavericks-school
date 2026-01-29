import { Phone, Mail, Youtube, Facebook } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-1.5 sm:py-2">
      <div className="section-container flex items-center justify-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        <span className="hidden sm:inline font-medium">Have a Query?</span>
        
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
          <a 
            href="tel:+91 9384813886" 
            className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">+91 9384813886</span>
          </a>

          <a 
            href="mailto:info@srmavericks.com" 
            className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">info@srmavericks.com</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://youtube.com/@srmavericksinternationalschool?si=cXLgq4H6DTKZjig5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a 
            href="https://www.facebook.com/p/SR-Mavericks-100064615425772/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a 
            href="https://www.instagram.com/sr_mavericks_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
