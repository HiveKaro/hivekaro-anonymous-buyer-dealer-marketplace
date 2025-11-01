import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hivekaro.india@gmail.com",
      href: "mailto:hivekaro.india@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7389937401",
      href: "tel:+917389937401",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "Raipur",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Everyday 9:00 AM - 6:00 PM",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground text-lg">
                Have questions? We're here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Whether you're a buyer looking for the best vehicle deals or a dealer wanting to join our platform,
                  we're ready to assist you. Contact us during business hours and we'll get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
