function HotDrinks(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[6].title}</h1>
      <p>{data.menu[6].description}</p>
      <hr></hr>

      <h3>{data.menu[6].titleTeas}</h3>
      
        {data.menu[6].teas.map(tea => (
          <li key={tea.id}>{tea[0]} - {tea[1]}</li>
        ))}
      <hr></hr>
      
      <h3>Flavors</h3>
      
        {data.menu[6].teaFlavors.map(teaFlavor => (
          <li key={teaFlavor.id}>{teaFlavor}</li>
        ))}
      <hr></hr>

      <h3>{data.menu[6].titleCoffees}</h3>
      
        {data.menu[6].coffees.map(coffee => (
          <li key={coffee.id}>{coffee[0]} - {coffee[1]}</li>
        ))}
      
      
      </div>
  );
}

export default HotDrinks;