import type { Metadata } from "next";
import { Poppins} from "next/font/google";
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