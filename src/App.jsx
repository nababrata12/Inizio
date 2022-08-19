import {
  About,
  Event,
  Footer,
  Hero,
  Navbar,
  Sponsers,
  Taimeline,
} from "./components";
import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Taimeline />
          <About />
          <Event />
          <Sponsers />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
