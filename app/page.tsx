import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="md:px-20 px-10">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
