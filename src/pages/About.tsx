import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Target } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "Every dish is crafted with love and dedication to authentic flavors"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our top priority, always exceeding expectations"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only the finest ingredients and highest standards in our kitchen"
    },
    {
      icon: Target,
      title: "Consistency",
      description: "Delivering the same great experience with every visit"
    }
  ];

  const milestones = [
    { number: "1000+", label: "Happy Diners Monthly" },
    { number: "50+", label: "Dishes in Buffet" },
    { number: "5★", label: "Average Rating" },
    { number: "7", label: "Days a Week" }
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
              About <span className="text-primary">Barbeque Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where passion for food meets exceptional dining experience
            </p>
          </div>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Barbeque Experts was born from a simple dream - to create a dining experience 
                  where quality meets affordability, and every guest feels like family. Located 
                  in the heart of Dhanori, Lohegaon, we've been serving Pune with unlimited 
                  barbeque buffet that brings people together.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our live grill concept allows you to customize your dining experience, 
                  choosing from a vast array of marinades and cooking styles. From traditional 
                  Indian tandoori to contemporary grills, we celebrate the art of flame-cooked 
                  perfection.
                </p>
                <p className="text-muted-foreground">
                  What started as a vision to redefine buffet dining has grown into a beloved 
                  destination for families, friends, and food enthusiasts across Pune. Every 
                  dish tells a story, and every visit creates memories.
                </p>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src={restaurantInterior}
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our <span className="text-accent">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Milestones Section */}
          <section className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {milestone.number}
                  </div>
                  <p className="text-muted-foreground">{milestone.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Behind every great meal is a dedicated team of chefs, servers, and managers 
              working tirelessly to ensure your experience is nothing short of exceptional. 
              Our passionate team brings years of culinary expertise and genuine hospitality 
              to create memorable dining moments.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
