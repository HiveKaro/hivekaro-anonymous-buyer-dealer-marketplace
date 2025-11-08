"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageSquare, Lock, Users, Building2, Shield, Mail, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string | string[];
  category: "general" | "buyers" | "dealers" | "safety";
}

const faqItems: FAQItem[] = [
  {
    id: "what-is-hivekaro",
    icon: <HelpCircle className="h-6 w-6" />,
    category: "general",
    question: "🐝 What is HiveKaro?",
    answer: "HiveKaro is a platform that connects real car buyers with verified dealers to get the best offers in one place. No middlemen, no spam calls — just clean, transparent communication.",
  },
  {
    id: "how-works",
    icon: <MessageSquare className="h-6 w-6" />,
    category: "general",
    question: "🚗 How does HiveKaro work?",
    answer: [
      "1. You tell us what car or variant you're looking for.",
      "2. Verified dealers share their best quotes and offers.",
      "3. You compare deals, ask questions, and pick what suits you.",
      "That's it — fast, transparent, and hassle-free.",
    ],
  },
  {
    id: "free-platform",
    icon: <HelpCircle className="h-6 w-6" />,
    category: "buyers",
    question: "💬 Do I have to pay to use HiveKaro?",
    answer: "No. HiveKaro is 100% free for buyers. You only pay directly to the authorized dealer once you finalize your purchase — not through us.",
  },
  {
    id: "verified-dealers",
    icon: <Shield className="h-6 w-6" />,
    category: "dealers",
    question: "🏢 Are the dealers on HiveKaro verified?",
    answer: "Yes. We manually verify every dealer using business credentials, GST numbers, and dealership documents before they're allowed on the platform. We also monitor dealer behavior to ensure a trustworthy community.",
  },
  {
    id: "data-safety",
    icon: <Lock className="h-6 w-6" />,
    category: "safety",
    question: "🔐 Is my data safe on HiveKaro?",
    answer: "Absolutely. We only collect minimal details needed to connect you with dealers. We never sell, trade, or misuse your information. You can read our full Privacy Policy for details.",
  },
  {
    id: "direct-dealer",
    icon: <Building2 className="h-6 w-6" />,
    category: "general",
    question: "📄 Does HiveKaro sell cars directly?",
    answer: "No. HiveKaro is not a dealer or broker. We only connect buyers and dealers — all payments and final paperwork happen directly between you and the dealership.",
  },
  {
    id: "suspicious-message",
    icon: <AlertCircle className="h-6 w-6" />,
    category: "safety",
    question: "⚠️ I received a suspicious message claiming to be HiveKaro. What should I do?",
    answer: [
      "Do not share any personal details or OTPs.",
      "Immediately forward the message or screenshot to hivekaro.india@gmail.com so we can verify and take action.",
    ],
  },
  {
    id: "multiple-quotes",
    icon: <MessageSquare className="h-6 w-6" />,
    category: "buyers",
    question: "🧾 Can I get official quotes from multiple dealers?",
    answer: "Yes — that's the main benefit! You can compare official quotes from several dealers at once and pick the best offer without visiting multiple showrooms.",
  },
  {
    id: "dealer-signup",
    icon: <Building2 className="h-6 w-6" />,
    category: "dealers",
    question: "💼 I'm a dealer. How can I join HiveKaro?",
    answer: "If you're an authorized dealer, you can apply to join via our Dealer Signup Form. Once verified, you'll get access to genuine buyer leads and our dealer dashboard.",
  },
  {
    id: "contact-support",
    icon: <Mail className="h-6 w-6" />,
    category: "general",
    question: "💬 Can I contact HiveKaro for help or feedback?",
    answer: [
      "Yes! We love hearing from users.",
      "Email us at hivekaro.india@gmail.com",
      "Or message us on Instagram: @hivekaro.india",
    ],
  },
  {
    id: "why-name",
    icon: <HelpCircle className="h-6 w-6" />,
    category: "general",
    question: "🐝 Why the name \"HiveKaro\"?",
    answer: "Because like a hive, our goal is to connect everyone who makes car buying smoother — buyers, dealers, and communities — in one place.",
  },
];

const categoryIcons = {
  general: <HelpCircle className="h-5 w-5" />,
  buyers: <Users className="h-5 w-5" />,
  dealers: <Building2 className="h-5 w-5" />,
  safety: <Shield className="h-5 w-5" />,
};

const categoryLabels = {
  general: "General",
  buyers: "For Buyers",
  dealers: "For Dealers",
  safety: "Safety & Security",
};

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "general" | "buyers" | "dealers" | "safety">("all");

  const filteredFAQs = selectedCategory === "all" ? faqItems : faqItems.filter(item => item.category === selectedCategory);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit">
                ❓ FAQ
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about HiveKaro
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Filter */}
              <div className="mb-12 flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary text-foreground"
                  }`}
                >
                  All Questions
                </button>
                <button
                  onClick={() => setSelectedCategory("general")}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === "general"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary text-foreground"
                  }`}
                >
                  {categoryIcons.general}
                  General
                </button>
                <button
                  onClick={() => setSelectedCategory("buyers")}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === "buyers"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary text-foreground"
                  }`}
                >
                  {categoryIcons.buyers}
                  For Buyers
                </button>
                <button
                  onClick={() => setSelectedCategory("dealers")}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === "dealers"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary text-foreground"
                  }`}
                >
                  {categoryIcons.dealers}
                  For Dealers
                </button>
                <button
                  onClick={() => setSelectedCategory("safety")}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === "safety"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary text-foreground"
                  }`}
                >
                  {categoryIcons.safety}
                  Safety
                </button>
              </div>

              {/* FAQ Items */}
              <div className="space-y-3">
                {filteredFAQs.map((item) => (
                  <Card
                    key={item.id}
                    className="cursor-pointer hover:border-primary/50 transition-all"
                    onClick={() => toggleExpanded(item.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="text-primary mt-1">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-left">{item.question}</h3>
                          </div>
                          <div className="text-muted-foreground flex-shrink-0">
                            {expandedId === item.id ? "−" : "+"}
                          </div>
                        </div>

                        {/* Expanded Answer */}
                        {expandedId === item.id && (
                          <div className="pl-9 pt-4 border-t">
                            {Array.isArray(item.answer) ? (
                              <div className="space-y-2 text-muted-foreground">
                                {item.answer.map((line, idx) => (
                                  <p key={idx}>{line}</p>
                                ))}
                              </div>
                            ) : (
                              <p className="text-muted-foreground">{item.answer}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Still Have Questions */}
              <Card className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Still have questions?</h3>
                    </div>
                    <div className="text-muted-foreground space-y-3">
                      <p>Can't find the answer you're looking for? We're here to help!</p>
                      <div className="space-y-2">
                        <a 
                          href="mailto:hivekaro.india@gmail.com" 
                          className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
                        >
                          📧 Email us at hivekaro.india@gmail.com
                        </a>
                        <p>or message us on Instagram: <span className="font-semibold text-primary">@hivekaro.india</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Footer Message */}
              <Card className="mt-8 bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground italic">
                    🐝 <span className="font-semibold text-foreground\">HiveKaro</span> • Community. Clarity. Car Deals.
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
