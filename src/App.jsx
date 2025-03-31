import styles from "./App.module.css";
import { About } from "./Components/About/About.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";

import { Experience } from "./Components/Experience/Experience.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Projects } from "./Components/Projects/Projects.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
