// App.jsx
import "../index.css";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "./Hero.jsx";
import StatsSection from "./Stats.jsx";
import Services from "./Services.jsx";
import OurWorks from "./OurWorks.jsx";
import FaqSection from "./FAQs.jsx";
import Testimonials from "./Testimonials.jsx";
import DigitalPresenceSection from "./DigitalPresenceSection.jsx";

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <StatsSection />
      <br />
      <br />
      <br />
      <Services />

      <OurWorks />

      <FaqSection />
      <Testimonials />

      <DigitalPresenceSection />

      <Footer />
    </div>
  );
};

export default App;
