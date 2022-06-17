function CreateYourOwn(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[2].title}</h1>
      <p>{data.menu[2].description}</p>
      <hr></hr>

      <h3>Proteins</h3>
      
        {data.menu[2].proteins.map(protein => (
          <li key={protein.id}>{protein}</li>
        ))}
      <hr></hr>

      <h3>Cheeses</h3>
      
        {data.menu[2].cheeses.map(cheese => (
          <li key={cheese.id}>{cheese}</li>
        ))}
      <hr></hr>

      <h3>Garnishes</h3>
      
        {data.menu[2].garnishes.map(garnish => (
          <li key={garnish.id}>{garnish}</li>
        ))}
      <hr></hr>

      <h3>Condiments</h3>
      
        {data.menu[2].condiments.map(condiment => (
          <li key={condiment.id}>{condiment}</li>
        ))}
      
    </div>
  );
}

export default CreateYourOwn;