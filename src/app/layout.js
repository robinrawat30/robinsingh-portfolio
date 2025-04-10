import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";


const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Robin Singh",
  description: "I'm a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background", anek.className)}>
        <Menu />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
