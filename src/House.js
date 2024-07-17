function House(props) {
  return (
    <li className="list-group-item">
      {props.house ? <p onClick={() => props.selectHouse(props.house)}>{props.house.FacilityName}</p> : <p>Select a house.</p>}
    </li>
  );
}

export default House;
