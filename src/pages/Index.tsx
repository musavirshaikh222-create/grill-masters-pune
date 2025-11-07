import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Flame, Users, Star, Clock } from "lucide-react";
import heroBbqVideo from "@/assets/barbeque-animated.mp4";
import buffetSpread from "@/assets/buffet-spread.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Index = () => {
  const features = [
    {
      icon: Flame,
      title: "Live Grill Experience",
      description: "Enjoy unlimited grilling at your table with premium quality ingredients"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect ambience for families, friends, and corporate gatherings"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Top-quality food with exceptional service and presentation"
    },
    {
      icon: Clock,
      title: "Open Daily",
      description: "Serving delicious buffet from 12 PM to 11 PM every day"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best barbeque experience in Pune! The unlimited buffet is worth every penny."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing ambience and delicious food. Perfect place for family dinners!"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Live grill at the table is fantastic. Great variety in both veg and non-veg."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section with Animated Fire Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroBbqVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
          
          {/* Subtle Upward Flame Animation - Motion Only */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute flame-layer-1"
              style={{
                bottom: '20%',
                left: '5%',
                width: '150px',
                height: '200px',
                background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 100, 0, 0.15) 0%, transparent 60%)',
                filter: 'blur(30px)',
              }}
            />
            <div 
              className="absolute flame-layer-2"
              style={{
                bottom: '25%',
                left: '15%',
                width: '120px',
                height: '180px',
                background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 150, 0, 0.12) 0%, transparent 55%)',
                filter: 'blur(25px)',
              }}
            />
            <div 
              className="absolute flame-layer-3"
              style={{
                bottom: '22%',
                left: '8%',
                width: '100px',
                height: '160px',
                background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 200, 50, 0.1) 0%, transparent 50%)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Unlimited Flavours.
            <br />
            <span className="text-primary animate-glow">Unforgettable</span> <span className="text-accent animate-glow">Moments.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in stagger-1">
            Experience the finest unlimited barbeque buffet in Pune
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in stagger-2">
            <Button asChild size="lg" className="text-lg px-8 hover-lift">
              <Link to="/book-table">Book a Table</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 hover-lift">
              <Link to="/events">Events & Offers</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 hover-lift">
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Welcome to <span className="text-primary">Barbeque Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in stagger-1">
              At Barbeque Experts, we bring you an unparalleled dining experience with unlimited barbeque buffet, 
              live grill at your table, and a perfect blend of Indian, Mughlai, and Chinese cuisines. 
              Located at Dhanori Jakatnaka, Lohegaon, we serve food lovers across Pune with passion and excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-primary transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            Experience the <span className="text-accent">Best</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden group animate-slide-in-left">
              <img 
                src={buffetSpread} 
                alt="Buffet Spread" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Unlimited Buffet</h3>
                  <p className="text-muted-foreground">Endless variety of dishes to satisfy every craving</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden group animate-slide-in-right">
              <img 
                src={restaurantInterior} 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Ambience</h3>
                  <p className="text-muted-foreground">Elegant dining experience for every occasion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover-lift animate-fade-in stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready for an Amazing Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in stagger-1">
            Book your table now and enjoy unlimited flavours!
          </p>
          <Button asChild size="lg" className="text-lg px-8 animate-scale-in stagger-2 hover-lift">
            <Link to="/Reserve Your Table">Reserve Your Table</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;