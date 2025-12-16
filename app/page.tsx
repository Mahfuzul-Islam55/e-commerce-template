import Navbar from "@/app/components/Navbar/Navbar";
import Sidenav from "@/app/components/Sidenav/Sidenav";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Category from "@/app/components/Category/Category";
import NewArrival from "@/app/components/NewArrival/NewArrival";
import Footer from "@/app/components/Footer/Footer";
import Offer from "@/app/components/Offer/Offer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <HeroSection />
      <Category />
      <NewArrival />
      <Offer />
      <Footer />
    </>
  );
}
