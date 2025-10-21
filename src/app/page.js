import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Explore from "../components/Explore";


export default function Home() {
  return (
    <div >
     <Navbar />
     <Hero />
      <Feature />
      <Menu />
      <Explore/>
      <Footer />
    </div>
  );
}
