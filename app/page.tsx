import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Specials from "./components/specials";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Menu />
      {/* <Specials /> */}
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
