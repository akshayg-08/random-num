import { useState } from "react";
import "./style.css"; // Import CSS

function App() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="app-container">
      <div className="random-box">
        <h1>Random Number Generator 🎲</h1>
        <h2>{number !== null ? number : "Click to Generate"}</h2>
        <button onClick={generateRandomNumber}>Generate Number</button>
      </div>
    </div>
  );
}

export default App;