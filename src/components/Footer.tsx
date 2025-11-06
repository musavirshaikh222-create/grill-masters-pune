import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/barbecue_experts_pune/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
                <span className="text-muted-foreground">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">barbequeexperts@gmail.com</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Hours:</strong> 12 PM – 11 PM Daily
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for exclusive offers and updates!
            </p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" className="bg-secondary" />
              <Button variant="default" size="sm">Subscribe</Button>
            </div>
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
