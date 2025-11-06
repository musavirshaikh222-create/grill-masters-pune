import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Users, Clock } from "lucide-react";

const WEBHOOK_TEST_URL = "https://buckss.app.n8n.cloud/webhook/c47cb5d5-172a-45fa-ba82-de50189fdf49";
// When ready for production, replace with:
// const WEBHOOK_PROD_URL = "https://buckss.app.n8n.cloud/webhook/5ffb6ddb-cd2d-4837-97f5-be732f4f2f05";

const BookTable = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
    "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // For Select components that provide onValueChange
  const handleGuestsChange = (value: string) => setFormData(prev => ({ ...prev, guests: value }));
  const handleTimeChange = (value: string) => setFormData(prev => ({ ...prev, time: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.guests || !formData.time || !date) {
      toast({
        title: "Missing information",
        description: "Please fill required fields: name, phone, guests, time and date.",
        variant: "destructive",
      });
      return;
    }

    // Prepare payload
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      guests: formData.guests,
      time: formData.time,
      date: date?.toISOString(),
      notes: formData.notes,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_TEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Optional: add a simple secret header for n8n to verify
          // "x-webhook-secret": "your-secret-token-here"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Booking Confirmed!",
          description: "Your table has been reserved. We'll send you a confirmation email shortly.",
        });

        // Optional: clear form
        setFormData({ name: "", phone: "", email: "", guests: "", time: "", notes: "" });
        setDate(new Date());
      } else {
        const text = await response.text();
        console.error("Webhook error:", response.status, text);
        toast({
          title: "Error",
          description: "Unable to submit booking. Try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Network error:", err);
      toast({
        title: "Network Error",
        description: "Unable to reach the booking service. Try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Book Your <span className="text-primary">Table</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Reserve your spot for an unforgettable dining experience
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Reservation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="+91-XXXXXXXXXX" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select value={formData.guests} onValueChange={handleGuestsChange}>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7+">7+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block">Select Date *</Label>
                    <div className="border border-border rounded-lg p-4 bg-secondary/20">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="time">Select Time *</Label>
                    <Select value={formData.time} onValueChange={handleTimeChange}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-3 text-sm">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Pick your preferred date</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Open 12 PM - 11 PM daily</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Perfect for all group sizes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Input id="notes" placeholder="Any special requirements or occasions?" value={formData.notes} onChange={handleChange} />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Need help? Call us at <span className="text-primary font-semibold">+91-XXXXXXXXXX</span></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookTable;
