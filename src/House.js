function House(props) {
  return (
    <div>
      {props.house ? <p onClick={() => props.selectHouse(props.house)}>{props.house.FacilityName}</p> : <p>Select a house.</p>}
    </div>
  );
}

export default House;
