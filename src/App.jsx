import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const swimmers = data.map((swimmer) => {
    return (
      <Card
      key={swimmer.id}
      swimmer={swimmer}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {swimmers}
      </section>
    </>
  );
}

export default App;
