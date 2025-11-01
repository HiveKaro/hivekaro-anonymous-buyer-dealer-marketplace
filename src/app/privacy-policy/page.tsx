"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Users, Eye, Cookie, FileText, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit">
                Privacy Policy
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: November 1, 2025
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
                    HiveKaro ("we", "our", or "us") operates as a digital community marketplace designed to connect buyers and dealers transparently and safely.
                    We are committed to protecting your privacy and ensuring that your personal data is handled responsibly.
                  </p>
                </CardContent>
              </Card>

              {/* 1. Information We Collect */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">1. Information We Collect</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>We may collect:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Basic user details (name, email, phone number)</li>
                        <li>Communication data (messages, inquiries, or feedback)</li>
                        <li>Technical data (browser type, device info, cookies, and IP address)</li>
                        <li>Dealer-submitted information (quotes, offers, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. How We Use Your Information */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">2. How We Use Your Information</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>We use this data to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Facilitate communication between buyers and dealers</li>
                        <li>Improve platform experience and features</li>
                        <li>Send relevant updates, offers, or notifications</li>
                        <li>Ensure security and prevent misuse of the platform</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Data Sharing */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">3. Data Sharing</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p className="font-semibold text-foreground">We never sell your data.</p>
                      <p>Information is shared only when:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Necessary for completing a buyer–dealer interaction</li>
                        <li>Required by law or regulatory authorities</li>
                        <li>You have explicitly consented to it</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Data Security */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">4. Data Security</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        We use encryption, limited access, and secure servers to safeguard all user information.
                        Dealers and buyers are never shown each other's personal details unless consented.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Your Rights */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">5. Your Rights</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>You can:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Request data deletion</li>
                        <li>Update your information</li>
                        <li>Opt out of marketing communications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Cookies */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cookie className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">6. Cookies</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        We use cookies to improve site functionality and analyze performance. You may disable cookies in your browser settings if preferred.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 7. Changes to This Policy */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">7. Changes to This Policy</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        We may update this Privacy Policy occasionally. Updates will be reflected with a new "Last updated" date.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 8. Contact Us */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">8. Contact Us</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>For privacy questions or concerns:</p>
                      <a 
                        href="mailto:support@hivekaro.com" 
                        className="text-primary hover:underline font-semibold flex items-center gap-2"
                      >
                        📧 support@hivekaro.com
                      </a>
                    </div>
                  </div>
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
