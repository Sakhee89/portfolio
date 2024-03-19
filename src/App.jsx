import "./App.css";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Home } from "./components/Home";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-6 xl:max-w-[1300px] xl:mx-auto xl:last:relative">
        <Home />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
