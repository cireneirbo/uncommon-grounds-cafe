function Soups(props) {

  let data = props.data;
  
  return (
    <fieldset>

      <h1>{data.menu[5].title}</h1>
      <p>{data.menu[5].description}</p>
      <ul>
        {data.menu[5].soupSizes.map(soupSize => (
          <li key={soupSize.id}>{soupSize[0]} - {soupSize[1]}</li>
        ))}
      </ul>
      <p>{data.menu[5].currentChoice}</p>
      
    </fieldset>
  );
}

export default Soups;