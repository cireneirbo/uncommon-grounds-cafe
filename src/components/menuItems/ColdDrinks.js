function ColdDrinks(props) {
  
  let data = props.data;

  return (
    <div className="box-shadow">

      <h1>{data.menu[7].title}</h1>
      <p>{data.menu[7].description}</p>
      <hr></hr>
      
      <h3>{data.menu[7].titleIcedDrinks}</h3>
      
        {data.menu[7].icedDrinks.map(icedDrink => (
          <li key={icedDrink.id}>{icedDrink[0]} - {icedDrink[1]}</li>
        ))}
      <hr></hr>

      <h3>{data.menu[7].titleBlends}</h3>
      
        {data.menu[7].blends.map(blend => (
          <li key={blend.id}>{blend[0]} - {blend[1]}</li>
        ))}
      <hr></hr>

      <h3>{data.menu[7].titleSmoothies}</h3>
      <p>{data.menu[7].descriptionSmoothies[0]} - {data.menu[7].descriptionSmoothies[1]}</p>
      
        {data.menu[7].smoothies.map(smoothie => (
          <li key={smoothie.id}>{smoothie}</li>
        ))}
      
      
    </div>
  );
}

export default ColdDrinks;