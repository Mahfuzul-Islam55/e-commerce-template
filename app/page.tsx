import HeroSection from "@/app/components/HeroSection/HeroSection";
import Category from "@/app/components/Category/Category";
import NewArrival from "@/app/components/NewArrival/NewArrival";
import Offer from "@/app/components/Offer/Offer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <NewArrival />
      <Offer />
    </>
  );
}
