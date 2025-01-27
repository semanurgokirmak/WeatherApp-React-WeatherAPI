import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";
import Bgr from "/Background.png";

function App() {
  return (
    <>
      <div className="font-nunito" style={{ backgroundImage: `url(${Bgr})` }}>
        <Navbar />
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
