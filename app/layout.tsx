import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Sidenav from "@/app/components/Sidenav/Sidenav";
import Footer from "@/app/components/Footer/Footer";

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
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <div>
          <Navbar />
          <Sidenav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
