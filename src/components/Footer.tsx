import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hk-1761924474475.jpg?width=8000&height=8000&resize=contain"
                alt="HiveKaro Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">HiveKaro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Anonymous community marketplace connecting vehicle buyers with verified dealers through blind quotations.
            </p>
          </div>

          {/* For Buyers */}
          <div>
            <h3 className="font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/buyer-dashboard" className="hover:text-primary transition-colors">
                  Create Request
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* For Dealers */}
          <div>
            <h3 className="font-semibold mb-4">For Dealers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/dealer-dashboard" className="hover:text-primary transition-colors">
                  View Requests
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Submit Quotes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 HiveKaro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://x.com/HiveKaro" className="hover:text-primary transition-colors">
                X (Twitter)
              </Link>
              <Link href="https://www.linkedin.com/in/hive-karo/" className="hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="https://www.instagram.com/hivekaro.india/" className="hover:text-primary transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}