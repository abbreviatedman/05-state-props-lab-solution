import House from "./House";

function HouseList(props) {
  return (
    <ul className="list-group">
      {props.houses.map((house) => (
        <House
          key={house.FacilityName}
          house={house}
          selectHouse={props.selectHouse}
        />
      ))}
    </ul>
  );
}

export default HouseList;
