import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner/>
    </main>
  );
};

export default App;
