import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <img
              src="https://content.jdmagicbox.com/v2/comp/chennai/g1/044pxx44.xx44.141129133009.q2g1/catalogue/sr-mavericks-international-play-school-poonamallee-chennai-day-care-centres-8jn66l4bu2.jpg"
              alt="SR Mavericks Logo"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              SR MAVERICKS is a nurturing Nursery & Primary School committed to
              holistic development, joyful learning, and building strong
              foundations for lifelong success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/admissions", label: "Admissions" },
                { path: "/curriculum", label: "Curriculum" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Programmes</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Nursery</li>
              <li>LKG</li>
              <li>UKG</li>
              <li>Class 1 to 5</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Chennai, Tamil Nadu - 600056</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <div className="flex flex-col text-sm">
                <a href="tel:+919384813886" className="hover:text-primary transition-colors">
                  +91 9384813886
                </a> 
                <a href="tel:+919384813887" className="hover:text-primary transition-colors">
                  +91 9384813887
                </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@srmavericks.com" className="hover:text-primary transition-colors">
                  info@srmavericks.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/p/SR-Mavericks-100064615425772/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sr_mavericks_/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@srmavericksinternationalschool?si=cXLgq4H6DTKZjig5"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-4">
        <div className="section-container text-center text-sm text-background/60">
          © 2026 SR MAVERICKS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
