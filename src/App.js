import styles from "./Style.js";
import "./App.css";
import "./output.css";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  CardDeal,
  Testimonials,
  FeedbackCard,
  Clients,

  Footer,
  Billing,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <FeedbackCard />
          <Clients />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
