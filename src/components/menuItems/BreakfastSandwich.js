function BreakfastSandwich(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[3].title}</h1>
      <p>{data.menu[3].description}</p>
      <ul>
        {data.menu[3].breakfastSandwiches.map(breakfastSandwich => (
          <li key={breakfastSandwich.id}>{breakfastSandwich[0]} - {breakfastSandwich[1]}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default BreakfastSandwich;