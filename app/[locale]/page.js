import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";
import Station from "./components/Station";
import { defaultLocale, locales } from "@/config";
import Partner from "./components/Partner";
import Form from "./components/ContactForm";
import panelImage from "@/public/assets/images/panel.jpeg";

const imagesCarousel = [panelImage, panelImage, panelImage];

export default function Home() {

  return (
    <div className="flex flex-col gap-20">
      
      <Panel images={imagesCarousel}/>
      <About />
      <Form/>
      <Station />
      <Contact />
      <Partner/>
     
    </div>
  );
}
