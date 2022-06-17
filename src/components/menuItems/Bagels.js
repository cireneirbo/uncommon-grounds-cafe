function Bagels(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[0].title}</h1>
      <p>{data.menu[0].description}</p>
      <hr></hr>
      
      <h3>Types</h3>
      {data.menu[0].bagels.map(bagel => (
        <li key={bagel.id}>{bagel}</li>
      ))}
      <hr></hr>

      <h3>Prices</h3>
      {data.menu[0].sizes.map(size => (
        <li key={size.id}>{size[0]} - {size[1]}</li>
      ))}
      <hr></hr>

      <h3>Spreads</h3>
      {data.menu[0].toppings.map(topping => (
        <li key={topping.id}>{topping[0]} - {topping[1]}</li>
      ))}
      <hr></hr>

      <h3>Cheeses</h3>
      {data.menu[0].cheeseFlavors.map(cheese => (
        <li key={cheese.id}>{cheese}</li>
      ))}
      
    </div>
  );
}

export default Bagels;