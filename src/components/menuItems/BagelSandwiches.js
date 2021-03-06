function BagelSandwiches(props) {
  
  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[1].title}</h1>
      <p>{data.menu[1].description}</p>
      <hr></hr>

      {data.menu[1].bagelSandwiches.map(bagelSandwich => (
        <li key={bagelSandwich.id}>{bagelSandwich[0]} - {bagelSandwich[1]}</li>
      ))}
      
    </div>
  );
}

export default BagelSandwiches;