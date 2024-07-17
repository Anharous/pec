import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/page";
import Hero from "./Components/Hero/page"
import Module from "./Components/Modules/page"
import About from "./Components/About/page"
import Footer from "./Components/Footer/page"



export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Module/>
      <About/>
      
      <Footer/>
    </div>

  );
}
