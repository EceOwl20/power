import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";
import Station from "./components/Station";
import { defaultLocale, locales } from "@/config";
import Partner from "./components/Partner";
import Form from "./components/ContactForm";
import panelImage1 from "@/public/assets/images/panel1.jpeg";
import panelImage2 from "@/public/assets/images/panel2.jpeg";
import panelImage4 from "@/public/assets/images/panel4.jpeg";
import panelImage from "@/public/assets/images/onpower1.webp";
import IconSection from "./components/IconSection";

const imagesCarousel = [panelImage, panelImage2, panelImage4];

export default function Home() {

  return (
    <div className="flex flex-col gap-20 ">
      <Panel images={imagesCarousel}/>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[1px]">
      <About />
      <Form/>
      </div>
      <IconSection/>
      <Station />
      <Contact />
      <Partner/>
    </div>
  );
}
