import { useState } from "react";

import firehouses from "./firehouse.json";
import CurrentHouse from "./CurrentHouse"
import HouseList from "./HouseList";
import FilterButtons from "./FilterButtons";

function App() {
  function selectHouse(house) {
    setHouse(house);
  }

  function filterHouses(borough) {
    setHouses(firehouses.filter((house) => house.Borough === borough))
  }

  function resetFilter() {
    setHouses(firehouses);
  }

  const [house, setHouse] = useState(null);
  const [houses, setHouses] = useState(firehouses)

  return (
    <div className="App">
      <CurrentHouse house={house} selectHouse={selectHouse} />
      <FilterButtons filterHandler={filterHouses} resetHandler={resetFilter}/>
      <HouseList houses={houses} selectHouse={selectHouse} />
    </div>
  );
}

export default App;
