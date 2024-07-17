import House from "./House";

function HouseList(props) {
  return (
    <div>
      {props.houses.map((house) => (
        <House
          key={house.FacilityName}
          house={house}
          selectHouse={props.selectHouse}
        />
      ))}
    </div>
  );
}

export default HouseList;
