function Soups(props) {

  let data = props.data;
  
  return (
    <div className="box-shadow">

      <h1>{data.menu[5].title}</h1>
      <p>{data.menu[5].description}</p>
      <hr></hr>
      
      {data.menu[5].soupSizes.map(soupSize => (
        <li key={soupSize.id}>{soupSize[0]} - {soupSize[1]}</li>
      ))}
      <p>{data.menu[5].currentChoice}</p>
      
    </div>
  );
}

export default Soups;