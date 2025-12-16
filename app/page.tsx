import Navbar from "@/app/components/Navbar/Navbar";
import Sidenav from "@/app/components/Sidenav/Sidenav";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Category from "@/app/components/Category/Category";
import NewArrival from "@/app/components/NewArrival/NewArrival";
export default function Home() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <HeroSection />
      <Category />
      <NewArrival />
    </>
  );
}
