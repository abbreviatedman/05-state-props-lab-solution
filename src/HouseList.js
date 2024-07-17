import House from "./House";

function HouseList(props) {
  return (
    <ul className="list-group" style={{marginLeft: "20px"}}>
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
