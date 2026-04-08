import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FranchiseInfo from "../components/FranchiseInfo";
import Benefits from "../components/Benefits";
import Investment from "../components/Investment";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import GallerySlider from "../components/GallerySlider";
import VideoSlider from "../components/VideoSlider";
import TeamSlider from "../components/TeamSlider";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GallerySlider />
      <VideoSlider />
      <FranchiseInfo />
      <TeamSlider />
      <Benefits />
      <Investment />
      <ProductSlider />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;