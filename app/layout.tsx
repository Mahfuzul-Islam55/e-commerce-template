"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Sidenav from "@/app/components/Sidenav/Sidenav";
import Footer from "@/app/components/Footer/Footer";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const hidingLayout = ["/pages/signin", "/pages/profile", "/pages/favourite"];

  return (
    <html lang="en">
      <body className={`${roboto.variable}`} suppressHydrationWarning>
        {!hidingLayout.includes(pathName) ? (
          <div>
            <Navbar />
            <Sidenav />
            <main>{children}</main>
            <Footer />
          </div>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
