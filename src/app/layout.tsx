import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aero",
  description: "Discover the wonders of nature at Eden Wildlife Preserve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    // Control browser's scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Reset scroll position when route changes
    window.scrollTo(0, 0);
  }, [pathname]); // This will run whenever the path changes

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}