import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecuritySection from "./components/SecuritySection";
import GamesSection from "./components/GamesSection";
import LiveSection from "./components/LiveSection";
import SupportSection from "./components/SupportSection";
import ResponsiblePlaySection from "./components/ResponsiblePlaySection";
import ResourcesSection from "./components/ResourcesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CTASection from "./components/CTASection";
import BonusPage from "./pages/Bonus";
import Footer from "./components/Footer";
import FAQPage from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SecuritySection />
              <GamesSection />
              <LiveSection />
              <SupportSection />
              <ResponsiblePlaySection />
              <ResourcesSection />
              <WhyChooseSection />
              <CTASection />
            </>
          }
        />
        <Route path="/bonus" element={<BonusPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
