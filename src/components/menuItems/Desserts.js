function Desserts(props) {

  let data = props.data;

  return (
    <div className="box-shadow">

      <h1>{data.menu[8].title}</h1>
      <p>{data.menu[8].description}</p>
      <ul>
        {data.menu[8].desserts.map(dessert => (
          <li key={dessert.id}>{dessert[0]} - {dessert[1]}</li>
        ))}
      </ul>

    </div>
  );
}

export default Desserts;