import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Service from "./components/Service";
import Review from "./components/Review";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <Service />
      <Review />
      <Team />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
}
