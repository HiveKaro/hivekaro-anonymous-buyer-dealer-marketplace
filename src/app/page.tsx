"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  ShieldCheck,
  Eye,
  MessageSquare,
  TrendingDown,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Anonymous Buyers",
      description: "Your identity remains protected. Chat and collaborate with other vehicle buyers safely in community groups.",
    },
    {
      icon: Eye,
      title: "Blind Dealer Quotes",
      description: "Dealers can't see competing quotes, ensuring fair pricing and genuine offers every time for your vehicle purchase.",
    },
    {
      icon: MessageSquare,
      title: "Community-Driven",
      description: "Discuss vehicle requirements with fellow buyers, share insights, and make informed decisions together.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Dealers",
      description: "All vehicle dealers are verified and can only submit quotes - no spam or unwanted interactions.",
    },
    {
      icon: TrendingDown,
      title: "Best Prices",
      description: "Competitive blind bidding ensures you get the best possible deals on cars, bikes, and scooters without price manipulation.",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Your data is secure. Dealers only see what you want to share - nothing more.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create a Request",
      description: "Join a buyer group and post your vehicle requirements anonymously.",
    },
    {
      step: "02",
      title: "Discuss with Community",
      description: "Chat with other buyers, refine needs, and share vehicle insights.",
    },
    {
      step: "03",
      title: "Receive Blind Quotes",
      description: "Verified dealers submit quotes without seeing competitors' offers.",
    },
    {
      step: "04",
      title: "Compare & Choose",
      description: "Review all vehicle quotes side-by-side and select the best deal.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              🚗 Cars • Bikes • Scooters • EVs
            </Badge>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Buy Together
              </h1>
              <p className="text-4xl md:text-6xl font-bold tracking-tight">
                Save Together
              </p>
            </div>
            <p className="text-xl text-muted-foreground">
              Join Verified buyer groups and get better deals together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyer-dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  I'm a Buyer
                </Button>
              </Link>
              <Link href="/dealer-dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  I'm a Dealer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HiveKaro?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with privacy and fairness at its core. Experience a vehicle marketplace that truly works for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and designed to give you the best vehicle buying experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < howItWorks.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About The Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                For Buyers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Buy Vehicles Smart with Community Power
              </h2>
              <div className="space-y-4">
                {[
                  "Stay completely anonymous while vehicle shopping",
                  "Chat with fellow buyers and share vehicle insights",
                  "Get multiple competitive quotes instantly from dealers",
                  "Compare vehicle offers without dealer pressure",
                  "Make informed decisions with community support",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/buyer-dashboard">
                <Button size="lg">Start as Buyer</Button>
              </Link>
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                For Dealers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Access Genuine Vehicle Buyer Intent
              </h2>
              <div className="space-y-4">
                {[
                  "Reach vehicle buyers ready to purchase",
                  "Submit quotes without seeing competitors",
                  "Focus on value, not price wars",
                  "Build reputation through quality service",
                  "No spam or unwanted interactions",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/dealer-dashboard">
                <Button size="lg" variant="outline">Start as Dealer</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Experience Fair Vehicle Pricing?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of vehicle buyers and dealers who trust HiveKaro for transparent, community-driven marketplace experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/buyer-dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started as Buyer
                  </Button>
                </Link>
                <Link href="/dealer-dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join as Dealer
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}