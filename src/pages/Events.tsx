import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, Cake, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const offers = [
    {
      icon: Gift,
      title: "Weekend Special",
      discount: "20% OFF",
      description: "Enjoy 20% discount on buffet every Saturday and Sunday",
      validity: "Valid till end of month"
    },
    {
      icon: Cake,
      title: "Birthday Celebration",
      discount: "Free Cake",
      description: "Birthday person eats free + complimentary cake",
      validity: "Valid on all days"
    },
    {
      icon: Users,
      title: "Group Booking",
      discount: "15% OFF",
      description: "Groups of 10+ get special discount",
      validity: "Advance booking required"
    },
    {
      icon: PartyPopper,
      title: "Festive Special",
      discount: "25% OFF",
      description: "Special discount during festive seasons",
      validity: "Check current offers"
    }
  ];

  const packages = [
    {
      name: "Birthday Package",
      price: "Starting from ₹5,999",
      features: [
        "Decorated table for birthday person",
        "Complimentary cake (1kg)",
        "Birthday special playlist",
        "Unlimited buffet for all guests",
        "Special photography session"
      ]
    },
    {
      name: "Corporate Events",
      price: "Starting from ₹8,999",
      features: [
        "Private dining area available",
        "Custom menu options",
        "Audio/Visual equipment support",
        "Dedicated service staff",
        "Flexible timing arrangements"
      ]
    },
    {
      name: "Anniversary Package",
      price: "Starting from ₹7,499",
      features: [
        "Romantic table decoration",
        "Complimentary dessert",
        "Special couple seating",
        "Live music on request",
        "Photographer available"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Events & <span className="text-primary">Offers</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Special deals and packages for every celebration
            </p>
          </div>

          {/* Current Offers */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Current <span className="text-accent">Offers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offers.map((offer, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <offer.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <Badge variant="default" className="mb-3">{offer.discount}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{offer.description}</p>
                    <p className="text-xs text-accent">{offer.validity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Event Packages */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Special <span className="text-primary">Packages</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-6">
                      <Link to="/book-table">Reserve Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Group Booking Info */}
          <section className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Planning a Large Group Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We have special arrangements for corporate events, family gatherings, and celebrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-table">Book Group Event</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
