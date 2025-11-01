import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuCategories = {
    starters_veg: [
      { name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: "Unlimited" },
      { name: "Mushroom Tikka", description: "Marinated grilled mushrooms", price: "Unlimited" },
      { name: "Corn Seekh", description: "Spiced corn kebabs", price: "Unlimited" },
      { name: "Veg Seekh Kebab", description: "Mixed vegetable kebabs", price: "Unlimited" },
    ],
    starters_nonveg: [
      { name: "Chicken Tikka", description: "Classic marinated grilled chicken", price: "Unlimited" },
      { name: "Tangdi Kebab", description: "Spicy chicken drumsticks", price: "Unlimited" },
      { name: "Fish Tikka", description: "Fresh fish marinated and grilled", price: "Unlimited" },
      { name: "Mutton Seekh", description: "Premium mutton kebabs", price: "Unlimited" },
    ],
    main_course: [
      { name: "Dal Makhani", description: "Creamy black lentils", price: "Unlimited" },
      { name: "Butter Chicken", description: "Tender chicken in rich gravy", price: "Unlimited" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in tomato gravy", price: "Unlimited" },
      { name: "Biryani", description: "Aromatic rice with spices", price: "Unlimited" },
      { name: "Naan & Roti", description: "Fresh breads from tandoor", price: "Unlimited" },
    ],
    chinese: [
      { name: "Manchurian", description: "Fried balls in spicy sauce", price: "Unlimited" },
      { name: "Hakka Noodles", description: "Stir-fried noodles", price: "Unlimited" },
      { name: "Fried Rice", description: "Vegetable or chicken fried rice", price: "Unlimited" },
      { name: "Chilli Chicken", description: "Spicy chicken appetizer", price: "Unlimited" },
    ],
    desserts: [
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "Unlimited" },
      { name: "Ice Cream", description: "Assorted flavors", price: "Unlimited" },
      { name: "Kulfi", description: "Traditional Indian ice cream", price: "Unlimited" },
      { name: "Brownie", description: "Chocolate brownie", price: "Unlimited" },
    ],
    drinks: [
      { name: "Soft Drinks", description: "Pepsi, Sprite, etc.", price: "Unlimited" },
      { name: "Fresh Lime", description: "Sweet or salty", price: "Unlimited" },
      { name: "Buttermilk", description: "Traditional chaas", price: "Unlimited" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Unlimited buffet with endless varieties to choose from
            </p>
            <Badge variant="default" className="mt-4 text-lg px-6 py-2">
              All items included in buffet
            </Badge>
          </div>

          <Tabs defaultValue="starters_veg" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              <TabsTrigger value="starters_veg">Veg Starters</TabsTrigger>
              <TabsTrigger value="starters_nonveg">Non-Veg Starters</TabsTrigger>
              <TabsTrigger value="main_course">Main Course</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
            </TabsList>

            {Object.entries(menuCategories).map(([key, items]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                        <p className="text-primary font-bold">{item.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
