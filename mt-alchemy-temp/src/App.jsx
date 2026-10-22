
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Store from "./pages/Store";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import "./App.css";

function getPageFromHash() {
  const hash = window.location.hash;
  if (hash === "#our-story") return "our-story";
  if (hash === "#store") return "store";
  if (hash === "#careers") return "careers";
  if (hash === "#contact") return "contact";
  if (hash === "#learning") return "learning";
  return "home";
}
function ComingSoon() {
  return (
    <main style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>Learning Portal</h1>
      <p>This page is coming soon. We're working on it!</p>
      <a href="#home">Back to Home</a>
    </main>
  );
}
function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Navbar />
     
      {currentPage === "our-story" ? (
        <OurStory />
      ) : currentPage === "store" ? (
        <Store />
      ) : currentPage === "careers" ? (
        <Careers />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : currentPage === "learning" ? (
        <ComingSoon />
      ) : (
        <Home />
      )}

    </>
  );
}

export default App;
