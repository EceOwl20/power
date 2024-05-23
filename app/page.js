import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";
import Station from "./components/Station";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      home
      <Panel/>
      <About />
      <Station />
      <Contact />
      
     
    </div>
  );
}
