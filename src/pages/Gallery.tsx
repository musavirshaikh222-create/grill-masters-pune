import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroVideo from "../assets/hero-bbq.mp4";
import buffetSpread from "@/assets/buffet-spread.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroBbq, title: "Live Grill Experience", category: "Grill" },
    { src: buffetSpread, title: "Buffet Spread", category: "Food" },
    { src: restaurantInterior, title: "Restaurant Interior", category: "Ambience" },
    { src: heroBbq, title: "BBQ Delights", category: "Food" },
    { src: buffetSpread, title: "Indian Delicacies", category: "Food" },
    { src: restaurantInterior, title: "Dining Area", category: "Ambience" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A visual journey through our culinary excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-xs text-accent mb-1">{image.category}</p>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Follow us on social media for more photos and updates
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
