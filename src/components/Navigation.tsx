"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Users, Building2 } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState<"buyer" | "dealer" | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hk-1761923262135.jpg"
                alt="HiveKaro Logo"
                fill
                className="rounded-lg"
                priority
              />
            </div>
            <span className="text-xl font-bold">HiveKaro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/buyer-dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Buyer Dashboard
            </Link>
            <Link href="/dealer-dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dealer Dashboard
            </Link>
            <Link href="/safety-guidelines" className="text-sm font-medium hover:text-primary transition-colors">
              Safety Guidelines
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/how-it-works"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/buyer-dashboard"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Buyer Dashboard
            </Link>
            <Link
              href="/dealer-dashboard"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dealer Dashboard
            </Link>
            <Link
              href="/safety-guidelines"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Safety Guidelines
            </Link>
            <Link
              href="/faq"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Link href="/contact">
                <Button size="sm" className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}