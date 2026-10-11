
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.location.hash === "#our-story" ? "our-story" : "home"
  );

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash;

      if (hash === "#our-story") {
        setCurrentPage("our-story");
      } else {
        setCurrentPage("home");
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Navbar />

      {currentPage === "our-story" ? <OurStory /> : <Home />}
    </>
  );
}

export default App;
