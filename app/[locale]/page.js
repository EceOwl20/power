import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";
import Station from "./components/Station";
import { cookies } from 'next/headers';
import LangSwitcher from "../../LangSwitcher";

export default function Home() {
  
  const cookieLanguage = cookies();
  const lang = cookieLanguage.get('language');
  const langValue = lang?.value;

  return (
    <div className="flex flex-col gap-12">
      home
      <Panel/>
      <About />
      <Station />
      <Contact />
      
     
    </div>
  );
}
