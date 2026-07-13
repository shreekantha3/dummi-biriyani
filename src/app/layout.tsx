import type { Metadata } from "next";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Dummi Biriyani - Hubli's Favorite Cloud Kitchen",
  description: "Hubli's favorite cloud kitchen delivering Donne Biryani, Mushroom Biryani, Chitranna, Dal Rice & more. Open 10 AM - 8 PM. Fresh, fast & affordable — order online now!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
