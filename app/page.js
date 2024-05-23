import Contact from "./components/Contact";
import Panel from "./components/Panel";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      hellu
      <Panel/>
      <About />
      <Contact />
    </div>
  );
}
