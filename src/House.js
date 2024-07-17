function House(props) {
  return (
    <li className="list-group-item">
      <p onClick={() => props.selectHouse(props.house)}>
        {props.house.FacilityName}
      </p>
    </li>
  );
}

export default House;
