import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Choose from "./components/Choose";
import Practices from "./components/Practices";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full bg-[#111111]">
        <Navbar />
        <Hero />
      </div>
      <div className="w-full bg-[#1d1d1d]">
        <Introduction />
        <Choose />
        <Practices />
        <Clients />
        <Team />
        <Faq />
        <Subscribe />
        <div className="w-full bg-[#171717]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
