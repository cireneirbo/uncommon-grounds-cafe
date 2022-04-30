function BagelSandwiches(props) {
  
  let data = props.data;
  
  return (
    <fieldset>

      <h1>{data.menu[1].title}</h1>
      <p>{data.menu[1].description}</p>
      <ul>
        {data.menu[1].bagelSandwiches.map(bagelSandwich => (
          <li key={bagelSandwich.id}>{bagelSandwich[0]} - {bagelSandwich[1]}</li>
        ))}
      </ul>
      
    </fieldset>
  );
}

export default BagelSandwiches;