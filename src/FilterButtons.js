function FilterButtons(props) {
  return (
    <div className="btn-group">
      <button className="btn btn-outline-primary" onClick={() => props.filterHandler('Manhattan')}>Manhattan</button>
      <button className="btn btn-outline-primary" onClick={() => props.filterHandler('Bronx')}>Bronx</button>
      <button className="btn btn-outline-primary" onClick={() => props.filterHandler('Brooklyn')}>Brooklyn</button>
      <button className="btn btn-outline-primary" onClick={() => props.filterHandler('Queens')}>Queens</button>
      <button className="btn btn-outline-primary" onClick={() => props.filterHandler('Staten Island')}>Staten Island</button>
      <button className="btn btn-outline-primary" onClick={props.resetHandler}>All</button>
    </div>
  )
}

export default FilterButtons;
