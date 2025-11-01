"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, ShieldAlert, Users, Ban, AlertTriangle, Gavel, Mail } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit">
                🧾 Terms of Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground">
                Effective Date: October 2025
              </p>
              <p className="text-lg text-muted-foreground">
                Website: <a href="https://www.hivekaro.com" className="text-primary hover:underline">www.hivekaro.com</a>
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
                    Welcome to HiveKaro! These Terms of Service ("Terms") govern your access to and use of our platform, 
                    including any services, features, content, or applications we offer (collectively, the "Service").
                  </p>
                  <p>
                    By accessing or using HiveKaro, you agree to be bound by these Terms. If you do not agree to these Terms, 
                    please do not use our Service.
                  </p>
                </CardContent>
              </Card>

              {/* 1. Acceptance of Terms */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">1. Acceptance of Terms</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        By creating an account or using any part of HiveKaro, you confirm that you:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Are at least 18 years old or have parental/guardian consent</li>
                        <li>Have the legal capacity to enter into a binding agreement</li>
                        <li>Will comply with all applicable laws and regulations</li>
                        <li>Agree to these Terms and our Privacy Policy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Use of the Platform */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">2. Use of the Platform</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p className="font-semibold text-foreground">Permitted Use:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>HiveKaro is a marketplace connecting buyers and dealers for vehicle-related transactions</li>
                        <li>Buyers can request quotes anonymously and join buyer groups</li>
                        <li>Dealers can submit competitive quotes and connect with potential customers</li>
                        <li>Users must provide accurate and truthful information</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Prohibited Activities */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <Ban className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-semibold text-xl">3. Prohibited Activities</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>You agree NOT to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Use the platform for any illegal, fraudulent, or unauthorized purpose</li>
                        <li>Impersonate any person or entity or misrepresent your affiliation</li>
                        <li>Submit false, misleading, or deceptive information or quotes</li>
                        <li>Harass, abuse, or harm other users, dealers, or platform administrators</li>
                        <li>Attempt to gain unauthorized access to the platform or other users' accounts</li>
                        <li>Use automated systems (bots, scrapers) to access the platform</li>
                        <li>Interfere with or disrupt the platform's operation or security</li>
                        <li>Violate any applicable local, state, national, or international law</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. User Accounts */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ShieldAlert className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">4. User Accounts</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                        <li>You are responsible for all activities that occur under your account</li>
                        <li>You must notify us immediately of any unauthorized use of your account</li>
                        <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                        <li>One person or entity may not maintain multiple accounts without permission</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Buyer and Dealer Responsibilities */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Gavel className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">5. Buyer and Dealer Responsibilities</h3>
                    </div>
                    <div className="text-muted-foreground space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">For Buyers:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Provide accurate information about your vehicle requirements</li>
                          <li>Review dealer quotes carefully before making decisions</li>
                          <li>Engage with dealers professionally and respectfully</li>
                          <li>Understand that HiveKaro is a platform, not a party to transactions</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">For Dealers:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Provide accurate, competitive, and honest quotes</li>
                          <li>Honor the quotes and terms you submit to buyers</li>
                          <li>Maintain valid business licenses and certifications</li>
                          <li>Comply with all automotive industry regulations</li>
                          <li>Respect buyer anonymity until they choose to reveal information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Transactions and Payments */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">6. Transactions and Payments</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>HiveKaro facilitates connections but is not a party to transactions between buyers and dealers</li>
                        <li>All agreements, payments, and disputes are solely between buyers and dealers</li>
                        <li>We do not guarantee the quality, safety, legality, or accuracy of any quotes or transactions</li>
                        <li>Users are responsible for conducting due diligence before entering agreements</li>
                        <li>Platform fees (if applicable) are separate from transaction amounts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 7. Intellectual Property */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">7. Intellectual Property</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>All content, features, and functionality on HiveKaro are owned by us or our licensors</li>
                        <li>You may not copy, modify, distribute, or reverse-engineer any part of the platform</li>
                        <li>The HiveKaro name, logo, and trademarks are our property</li>
                        <li>User-generated content remains your property, but you grant us a license to use it on the platform</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 8. Disclaimer of Warranties */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="font-semibold text-xl">8. Disclaimer of Warranties</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p className="font-semibold text-foreground uppercase">
                        The platform is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>We do not guarantee uninterrupted, error-free, or secure service</li>
                        <li>We do not verify the accuracy, reliability, or legality of user-submitted content</li>
                        <li>We are not responsible for the conduct of buyers, dealers, or third parties</li>
                        <li>Use of the platform is at your own risk</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 9. Limitation of Liability */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <ShieldAlert className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="font-semibold text-xl">9. Limitation of Liability</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        To the fullest extent permitted by law, HiveKaro and its affiliates, officers, directors, 
                        employees, and agents shall not be liable for:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Any indirect, incidental, special, or consequential damages</li>
                        <li>Loss of profits, data, or business opportunities</li>
                        <li>Damages arising from transactions between buyers and dealers</li>
                        <li>Unauthorized access to or alteration of your data</li>
                        <li>Any other matter relating to the Service</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 10. Indemnification */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">10. Indemnification</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        You agree to indemnify, defend, and hold harmless HiveKaro from any claims, liabilities, 
                        damages, losses, or expenses (including legal fees) arising from:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Your use or misuse of the platform</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Any transactions or disputes between you and other users</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 11. Termination */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <Ban className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-semibold text-xl">11. Termination</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>We may suspend or terminate your account at any time for violating these Terms</li>
                        <li>You may terminate your account at any time by contacting us</li>
                        <li>Upon termination, your right to use the platform ceases immediately</li>
                        <li>Provisions that should survive termination (e.g., liability, indemnification) will remain in effect</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 12. Changes to Terms */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">12. Changes to Terms</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                        upon posting on the platform. Your continued use of the platform after changes constitutes 
                        acceptance of the updated Terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 13. Governing Law */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Gavel className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">13. Governing Law</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. 
                        Any disputes arising from these Terms or your use of the platform shall be subject to 
                        the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, India.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 14. Contact Us */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">14. Contact Us</h3>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>If you have any questions about these Terms of Service:</p>
                      <div className="space-y-1">
                        <a 
                          href="mailto:hivekaro.india@gmail.com" 
                          className="text-primary hover:underline font-semibold flex items-center gap-2"
                        >
                          📧 hivekaro.india@gmail.com
                        </a>
                        <p className="flex items-center gap-2">
                          📞 +91 7389937401
                        </p>
                        <p className="flex items-center gap-2">
                          📍 Raipur, Chhattisgarh, India
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Acknowledgment */}
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground italic">
                    By using HiveKaro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
