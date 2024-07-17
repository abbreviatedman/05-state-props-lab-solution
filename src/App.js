import { useState } from "react";

import firehouses from "./firehouse.json";
import CurrentHouse from "./CurrentHouse"
import HouseList from "./HouseList";

function App() {
  function selectHouse(house) {
    setHouse(house);
  }

  const [houses, setHouses] = useState(firehouses);
  const [house, setHouse] = useState(null);

  return (
    <div className="App">
      <CurrentHouse house={house} selectHouse={selectHouse} />
      <HouseList houses={houses} selectHouse={selectHouse} />
    </div>
  );
}

export default App;
