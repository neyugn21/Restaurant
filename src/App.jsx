import React from "react";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Newsletter from "./Newsletter/Newsletter";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 700,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
