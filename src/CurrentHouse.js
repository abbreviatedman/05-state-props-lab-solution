function CurrentHouse(props) {
  return (
    <div>
      {!props.house ? (
        <p>Select a house.</p>
      ) : (
        <div>
          <h3>{props.house.FacilityName}</h3>
          <h5>{props.house.FacilityAddress}</h5>
          <h5>{props.house.Borough}</h5>
        </div>
      )}
    </div>
  );
}

export default CurrentHouse;
