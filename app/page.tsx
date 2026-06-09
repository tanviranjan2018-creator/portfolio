import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Sports from "./components/Sports";
import Leadership from "./components/Leadership";
import Arts from "./components/Arts";
import Community from "./components/Community";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Academics />
        <Sports />
        <Leadership />
        <Arts />
        <Community />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
