import Header from "./components/_header";
import Hero from "./components/_hero";
import Solutions from "./components/_solutions";
import CoreBanking from "./components/_coreBanking";
import PaperlessCta from "./components/_paperlessCta";
import DigitalBanking from "./components/_digitalBanking";
import Insights from "./components/_insights";
import CaseStudies from "./components/_case-studies";
import Footer from "./components/_footer";

function App() {
  return (
    <main className="flex flex-col flex-1 min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <CoreBanking />
      <PaperlessCta />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <PaperlessCta bgColorEnabled={false} />
      <Footer />
    </main>
  );
}

export default App;
