import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";
import Station from "./components/Station";
import { defaultLocale, locales } from "@/config";

export default function Home() {

  return (
    <div className="flex flex-col gap-12">
    
      <Panel/>
      <About />
      <Station />
      <Contact />
      
     
    </div>
  );
}
