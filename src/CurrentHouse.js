function CurrentHouse(props) {
  return (
    <div>
      {!props.house ? (
        <h1>Select a house.</h1>
      ) : (
        <div className="card" style={{width: "1000px", margin: "20px"}}>
          <div className="card-body">
            <h3 className="card-title">{props.house.FacilityName}</h3>
            <h5 className="card-text">{props.house.FacilityAddress}</h5>
            <h5 className="card-text">{props.house.Borough}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentHouse;
