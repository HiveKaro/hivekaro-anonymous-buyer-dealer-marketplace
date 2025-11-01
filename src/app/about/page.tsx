"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, MapPin, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit">
                About HiveKaro
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Welcome to HiveKaro
              </h1>
              <p className="text-xl text-muted-foreground">
                India's first community-driven marketplace for smarter car buying.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Introduction */}
              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At HiveKaro, we believe buying a car shouldn't mean running from one showroom to another or falling for confusing offers.
                    Instead, we're building a digital community where buyers unite, share intent, and collectively negotiate better deals — all while staying safe and anonymous.
                  </p>
                  <p>
                    Our platform connects real buyers with verified dealers in a transparent, efficient way.
                    Dealers can share their best offers directly to genuine, ready-to-buy groups — helping them sell faster and smarter.
                    Buyers, on the other hand, get the power of group negotiation without compromising privacy.
                  </p>
                </CardContent>
              </Card>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Our Vision</h3>
                        <p className="text-muted-foreground">
                          To build India's most trusted community marketplace for cars — where collective intent drives collective benefit.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
                        <p className="text-muted-foreground">
                          Empower both buyers and dealers through fairness, transparency, and simplicity.
                          Because good deals should be built, not hunted.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Status */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Currently</h3>
                    </div>
                    <p className="text-muted-foreground">
                      HiveKaro is running pilot programs across major Indian cities including Raipur, focusing on real user feedback and building a product that truly changes how people buy vehicles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="py-12 space-y-4">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Join the Hive.</h3>
                  <p className="text-xl text-muted-foreground">Experience smarter buying.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
