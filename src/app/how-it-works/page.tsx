import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageSquare,
  FileText,
  Eye,
  EyeOff,
  ShieldCheck,
  TrendingDown,
  CheckCircle,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorksPage() {
  const buyerSteps = [
    {
      icon: Users,
      title: "Join a Buyer Group",
      description: "Create or join an existing buyer group based on your vehicle interest. Your identity remains anonymous with a unique anonymous ID.",
    },
    {
      icon: MessageSquare,
      title: "Discuss with Community",
      description: "Chat with fellow vehicle buyers in the group. Share requirements, ask questions, and refine your needs together - all anonymously.",
    },
    {
      icon: FileText,
      title: "Post Your Request",
      description: "Submit your detailed vehicle requirements. Specify model preferences, budget range, and timeline. All verified dealers can see it.",
    },
    {
      icon: Eye,
      title: "Receive Blind Quotes",
      description: "Verified dealers submit their quotes independently. Each dealer cannot see other dealers' offers, ensuring fair pricing.",
    },
    {
      icon: CheckCircle,
      title: "Compare & Decide",
      description: "Review all submitted quotes side-by-side. Compare pricing, delivery times, and offerings. Discuss with your buyer group.",
    },
    {
      icon: ShieldCheck,
      title: "Choose the Best Deal",
      description: "Select the quote that best fits your needs. Connect with the dealer directly to finalize the vehicle purchase securely.",
    },
  ];

  const dealerSteps = [
    {
      icon: Building2,
      title: "Get Verified",
      description: "Complete the dealer verification process. Provide business credentials and documents to ensure trust and authenticity.",
    },
    {
      icon: Eye,
      title: "Browse Requests",
      description: "Access the marketplace to view all active vehicle buyer requests. Filter by category, budget range, and timeline to find relevant opportunities.",
    },
    {
      icon: FileText,
      title: "Submit Your Quote",
      description: "Provide your best offer with pricing, delivery time, and detailed vehicle description. Be competitive but focus on value, not just price.",
    },
    {
      icon: EyeOff,
      title: "Blind Submission",
      description: "Your quote is submitted privately. You cannot see other dealers' quotes or interact with the buyer group chat. Keep it fair.",
    },
    {
      icon: TrendingDown,
      title: "Wait for Decision",
      description: "Buyers will review all submitted quotes and make their choice. You'll be notified if your quote is selected.",
    },
    {
      icon: CheckCircle,
      title: "Close the Deal",
      description: "If selected, connect with the buyer to finalize vehicle details and complete the transaction. Build your reputation with quality service.",
    },
  ];

  const privacyFeatures = [
    {
      icon: Lock,
      title: "Anonymous Buyer Identity",
      description: "Buyers are identified only by anonymous IDs. Personal information is never shared with dealers until a quote is accepted.",
    },
    {
      icon: EyeOff,
      title: "Blind Dealer Quotes",
      description: "Dealers submit quotes without seeing competitors' offers. This prevents price fixing and ensures genuine competitive pricing.",
    },
    {
      icon: ShieldCheck,
      title: "Group Chat Privacy",
      description: "Buyer group chats are completely private. Dealers have no access to discussions, ensuring unbiased quote submissions.",
    },
    {
      icon: Users,
      title: "Verified Participants",
      description: "All dealers are verified. Buyers can trust that quotes come from legitimate, vetted vehicle businesses.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mx-auto w-fit">
              📚 Complete Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              How HiveKaro Works
            </h1>
            <p className="text-xl text-muted-foreground">
              A transparent, fair, and community-driven vehicle marketplace built on privacy.
            </p>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">For Buyers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Journey as a Vehicle Buyer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From joining a community to closing the best deal on your dream vehicle - here's how buyers use HiveKaro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {buyerSteps.map((step, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/buyer-dashboard">
              <Button size="lg" className="group">
                Start as a Buyer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Dealers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">For Dealers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Journey as a Vehicle Dealer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From verification to winning vehicle deals - here's how dealers succeed on HiveKaro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dealerSteps.map((step, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/dealer-dashboard">
              <Button size="lg" variant="outline">
                Start as a Dealer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4 bg-green-500">Privacy First</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Trust & Transparency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy and fair vehicle pricing are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {privacyFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Principles
              </h2>
              <p className="text-muted-foreground">
                What makes HiveKaro different from traditional vehicle marketplaces
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-500 font-bold">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Anonymity for Buyers</h3>
                      <p className="text-sm text-muted-foreground">
                        Vehicle buyers maintain complete anonymity throughout the process. Personal information is only shared after accepting a quote, giving buyers full control over their privacy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-500 font-bold">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Blind Dealer Quotations</h3>
                      <p className="text-sm text-muted-foreground">
                        Dealers submit vehicle quotes without knowing what others are offering. This prevents price wars, collusion, or undercutting, ensuring genuine competitive pricing based on value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 text-green-500 font-bold">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Community-Driven Decisions</h3>
                      <p className="text-sm text-muted-foreground">
                        Buyers can discuss and collaborate with each other in private group chats. Share vehicle insights, compare options, and make informed decisions together as a community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500 font-bold">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Verified & Trusted Dealers</h3>
                      <p className="text-sm text-muted-foreground">
                        All vehicle dealers undergo a verification process. This ensures buyers receive quotes from legitimate businesses, reducing fraud and building trust in the marketplace.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg">
                Join HiveKaro today and experience the future of fair, transparent vehicle marketplace transactions.
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
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}