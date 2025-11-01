import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const OrderOnline = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryType, setDeliveryType] = useState("delivery");
  const { toast } = useToast();

  const menuItems = [
    { id: "1", name: "Veg Buffet Package", price: 499 },
    { id: "2", name: "Non-Veg Buffet Package", price: 699 },
    { id: "3", name: "Premium Buffet Package", price: 899 },
    { id: "4", name: "Family Combo (4 persons)", price: 2499 },
  ];

  const addToCart = (item: { id: string; name: string; price: number }) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed!",
      description: "Your order has been successfully placed. We'll contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Order <span className="text-primary">Online</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Available Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                  <Card key={item.id} className="bg-card border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">₹{item.price}</p>
                      <Button onClick={() => addToCart(item)} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart & Checkout */}
            <div>
              <Card className="bg-card border-border sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Your Cart ({cart.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between pb-4 border-b border-border">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-primary font-semibold">₹{item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-border pt-4 mb-6">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-primary">₹{getTotalPrice()}</span>
                        </div>
                      </div>

                      <form onSubmit={handleCheckout} className="space-y-4">
                        <div>
                          <Label>Delivery Type</Label>
                          <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="delivery" id="delivery" />
                              <Label htmlFor="delivery">Home Delivery</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="takeaway" id="takeaway" />
                              <Label htmlFor="takeaway">Takeaway</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" required />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" required />
                        </div>

                        {deliveryType === "delivery" && (
                          <div>
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" required />
                          </div>
                        )}

                        <Button type="submit" className="w-full" size="lg">
                          Place Order
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderOnline;
