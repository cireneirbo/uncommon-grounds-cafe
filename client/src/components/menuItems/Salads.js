function Salads(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[4].title}</h1>
      <p>{data.menu[4].description}</p>
      <h3>Salads</h3>
      <ul>
        {data.menu[4].salads.map(salad => (
          <li key={salad.id}>{salad[0]} - {salad[1]}</li>
        ))}
      </ul>
      
      <h3>Protein</h3>
      <ul>
        {data.menu[4].proteins.map(protein => (
          <li key={protein.id}>{protein} (+{data.menu[4].addProtein[1]})</li>
        ))}
      </ul>
      <h3>Dressings</h3>
      <ul>
        {data.menu[4].dressings.map(dressing => (
          <li key={dressing.id}>{dressing}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default Salads;