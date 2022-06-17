function Salads(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[4].title}</h1>
      <p>{data.menu[4].description}</p>
      <hr></hr>

      <h3>Salads</h3>
        {data.menu[4].salads.map(salad => (
          <li key={salad.id}>{salad[0]} - {salad[1]}</li>
        ))}
      <hr></hr>
      
      <h3>Protein</h3>
        {data.menu[4].proteins.map(protein => (
          <li key={protein.id}>{protein} (+{data.menu[4].addProtein[1]})</li>
        ))}
      <hr></hr>

      <h3>Dressings</h3>
        {data.menu[4].dressings.map(dressing => (
          <li key={dressing.id}>{dressing}</li>
        ))}
      
    </div>
  );
}

export default Salads;