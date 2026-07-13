import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import DummiLogo from "@/components/DummiLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" id="contact">
      {/* Delivery Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-white font-medium">
            ☁️ Dummi Biriyani Cloud Kitchen — Delivery Only • Free delivery above ₹299 • 10 AM – 8 PM
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <DummiLogo className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-bold text-white">Dummi Biriyani</h3>
                <p className="text-xs text-amber-400 font-medium tracking-wider uppercase">
                  ☁️ Hubli Cloud Kitchen
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Hubli's favorite cloud kitchen serving authentic biryani, chitranna, dal rice & more. 
              No dine-in, no waiting — just fresh food cooked to order and delivered hot to your doorstep.
              Open daily 10 AM to 8 PM.
            </p>
            <div className="flex gap-3">
              {["In", "Fb", "X"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-slate-400 hover:text-white"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-3">
              {[
                { href: "/products", label: "Full Menu" },
                { href: "/products?category=Biryani", label: "Biryanis" },
                { href: "/products?category=Rice", label: "Rice & Chitranna" },
                { href: "/products?category=Combos", label: "Combos" },
                { href: "/products?category=Budget", label: "Budget Meals" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Order Now</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:order@dummibiriyani.com" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  order@dummibiriyani.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 text-center shrink-0">💬</span>
                <a href="https://wa.me/919876543210" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                  WhatsApp Order
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  Cloud Kitchen (Delivery Only)<br />
                  Hubli-Dharwad, Karnataka
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kitchen Hours</h4>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="text-sm text-white font-bold">10:00 AM – 8:00 PM</p>
                  <p className="text-xs text-slate-400">Every day, including Sundays</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-xs text-amber-400 font-medium">🚚 Free delivery above ₹299</p>
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-xs text-green-400 font-medium">🏢 Bulk orders (10+) — Call us!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Dummi Biriyani Cloud Kitchen, Hubli. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
