// import logo from './logo.svg';
import Header from "./components/Header";
import "./App.css";
import Menu from "./components/Menu";
import "./index.css";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="firstPage">
          <Header />
          <div id="menuTab">
            <Menu />
          </div>
        </div>
        <div>
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}

export default App;
