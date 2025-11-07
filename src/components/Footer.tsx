import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Barbeque</span>
              <span className="text-accent"> Experts</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Experience unlimited barbeque buffet with live grill dining. Serving the finest Indian, Mughlai, and Chinese cuisine in Pune.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Barbecue-Experts-Pune-61558040581332/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/barbecue_experts_pune/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.zomato.com/pune/barbecue-experts-lohegaon/order" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.51 12.38c0-.45-.14-.85-.42-1.2-.28-.35-.67-.53-1.17-.53-.5 0-.89.18-1.17.53-.28.35-.42.75-.42 1.2v5.18h3.18v-5.18zm7.49-9.88c0-.28-.1-.51-.29-.7-.19-.19-.42-.29-.7-.29h-17c-.28 0-.51.1-.7.29-.19.19-.29.42-.29.7v19c0 .28.1.51.29.7.19.19.42.29.7.29h17c.28 0 .51-.1.7-.29.19-.19.29-.42.29-.7v-19zm-13.32 15.06h-1.59v-7.65h-1.35v-1.47h1.35v-.88c0-.67.17-1.18.51-1.53.34-.35.82-.53 1.44-.53.28 0 .58.04.9.12v1.35c-.21-.06-.42-.09-.63-.09-.28 0-.48.08-.6.24-.12.16-.18.39-.18.69v.63h1.41v1.47h-1.41v7.65h.15zm6.17 0h-4.77v-9.12h4.5c.7 0 1.29.25 1.77.75.48.5.72 1.13.72 1.89 0 .45-.11.86-.33 1.23-.22.37-.52.65-.9.84.5.16.89.44 1.17.84.28.4.42.88.42 1.44 0 .82-.27 1.48-.81 1.98-.54.5-1.25.75-2.13.75h-.64v.3zm1.59-5.62v-2.03h-1.35v2.03h1.35z"/>
                </svg>
              </a>
              <a href="https://www.swiggy.com/city/pune/barbecue-experts-porwal-rd-lohgaon-rest878962" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.93 13.93c.35-.35.35-.91 0-1.26l-2.4-2.4-2.4-2.4c-.35-.35-.91-.35-1.26 0-.35.35-.35.91 0 1.26l2.4 2.4-2.4 2.4c-.35.35-.35.91 0 1.26.35.35.91.35 1.26 0l2.4-2.4 2.4-2.4c.35-.35.35-.91 0-1.26zm5.66-10.19c-.19-.13-.42-.19-.64-.19h-14c-.22 0-.45.06-.64.19-.19.13-.32.32-.41.54l-2.81 7.03c-.13.32-.13.67 0 .99l2.81 7.03c.09.22.22.41.41.54.19.13.42.19.64.19h14c.22 0 .45-.06.64-.19.19-.13.32-.32.41-.54l2.81-7.03c.13-.32.13-.67 0-.99l-2.81-7.03c-.09-.22-.22-.41-.41-.54z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors text-sm">Menu</Link></li>
              <li><Link to="/book-table" className="text-muted-foreground hover:text-primary transition-colors text-sm">Book Table</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">Events & Offers</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Dhanori Jakatnaka, Lohegaon, Pune</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 8805022822</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">barbequeexperts@gmail.com</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Hours:</strong> 11 AM – 12:30 AM Daily
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Barbeque Experts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;