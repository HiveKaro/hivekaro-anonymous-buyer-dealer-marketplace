"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building2, Lock, AlertCircle, CheckCircle2, AlertTriangle, Mail } from "lucide-react";

export default function SafetyGuidelinesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit">
                🛡️ Safety Guidelines
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Your Safety Matters to Us
              </h1>
              <p className="text-xl text-muted-foreground">
                HiveKaro is built around trust, transparency, and community. Follow these essential safety rules to interact with full confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* For Buyers */}
              <Card className="border-2 border-blue-200/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Users className="h-7 w-7 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">🚗 For Buyers</h2>
                        <p className="text-sm text-muted-foreground">Keep yourself safe while shopping</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">✅ Verify before you pay</p>
                          <p className="text-sm text-muted-foreground">Always confirm the offer directly with the official showroom or authorized dealer before making any payment.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🕵️ Stay anonymous</p>
                          <p className="text-sm text-muted-foreground">Do not share your phone number, address, or personal documents in group chats or public spaces.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">💬 Communicate only through official channels</p>
                          <p className="text-sm text-muted-foreground">Avoid private DMs or external links not verified by us.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">📄 Ask for written quotes</p>
                          <p className="text-sm text-muted-foreground">Request officially stamped or letterhead quotes before finalizing any deal.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">💰 No advance payment to unknown individuals</p>
                          <p className="text-sm text-muted-foreground">Only pay directly to the verified dealership after verification.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🧾 Keep records</p>
                          <p className="text-sm text-muted-foreground">Save all screenshots, messages, and receipts related to your deal for safety.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Dealers */}
              <Card className="border-2 border-amber-200/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Building2 className="h-7 w-7 text-amber-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">🏢 For Dealers</h2>
                        <p className="text-sm text-muted-foreground">Maintain trust and integrity</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🏷️ Quote honestly</p>
                          <p className="text-sm text-muted-foreground">Only provide offers that are genuine and backed by your showroom.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🧑‍💼 Respect buyer anonymity</p>
                          <p className="text-sm text-muted-foreground">Do not attempt to identify or contact buyers outside HiveKaro.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">💬 Be transparent</p>
                          <p className="text-sm text-muted-foreground">Clearly mention variant, on-road pricing, and available benefits in your quote.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">❌ No fake leads or competitor tracking</p>
                          <p className="text-sm text-muted-foreground">Violations may lead to removal from the platform.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* General Safety */}
              <Card className="border-2 border-red-200/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <Lock className="h-7 w-7 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">🔐 General Safety</h2>
                        <p className="text-sm text-muted-foreground">Everyone must follow these critical rules</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🔒 HiveKaro will never ask for sensitive information</p>
                          <p className="text-sm text-muted-foreground">We will never ask for your OTP, password, or payment details.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🧠 Beware of imposter accounts</p>
                          <p className="text-sm text-muted-foreground">Be cautious of look-alike websites. Our only official domain is: <span className="font-bold text-primary">www.hivekaro.com</span></p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">🐝 Report suspicious activity</p>
                          <p className="text-sm text-muted-foreground">If you notice any suspicious activity, email us immediately at <span className="font-bold">support@hivekaro.com</span></p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">⚖️ Misuse consequences</p>
                          <p className="text-sm text-muted-foreground">Misuse of the platform may result in suspension or legal action.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Reminder */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">💡 Remember</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        HiveKaro connects real buyers and verified dealers — but we do not sell or collect payment for vehicles directly.
                      </p>
                      <p className="font-semibold text-foreground">
                        Your vigilance and responsible participation help keep our community safe.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-xl">Need Help?</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>If you have safety concerns or want to report suspicious activity:</p>
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

              {/* Footer Message */}
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground italic">
                    🐝 <span className="font-semibold text-foreground">HiveKaro</span> • Community. Clarity. Car Deals.
                  </p>
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
