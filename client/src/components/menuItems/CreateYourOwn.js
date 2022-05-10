function CreateYourOwn(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[2].title}</h1>
      <p>{data.menu[2].description}</p>
      <h3>Proteins</h3>
      <ul>
        {data.menu[2].proteins.map(protein => (
          <li key={protein.id}>{protein}</li>
        ))}
      </ul>
      <h3>Cheeses</h3>
      <ul>
        {data.menu[2].cheeses.map(cheese => (
          <li key={cheese.id}>{cheese}</li>
        ))}
      </ul>
      <h3>Garnishes</h3>
      <ul>
        {data.menu[2].garnishes.map(garnish => (
          <li key={garnish.id}>{garnish}</li>
        ))}
      </ul>
      <h3>Condiments</h3>
      <ul>
        {data.menu[2].condiments.map(condiment => (
          <li key={condiment.id}>{condiment}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default CreateYourOwn;