import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner/>
      <Subscribe/>
      <Banner2/>
    </main>
  );
};

export default App;
