import { useState, useEffect } from 'react';
import Data from './Data';

function Menu() {

  const [ isProcessed, setIsProcessed ] = useState(false);

  const [ data, setData ] = useState("");

  useEffect(() => {
    if(isProcessed === false) {
      try{
        setData(Data);
      } catch {
        console.log("Something went wrong! We failed at retrieving our own data...");
      };
      return setIsProcessed(true);
    }
  }, []);
  console.log(data)

  if(data === "") {
    return (
      <main>
        <fieldset>
          <p>Awaiting API data...</p>
        </fieldset>
      </main>
    );
  } else {
    return (
      <main>
        <fieldset>

          <p>{data.menu[0].title}</p>
          {/* <h1>{data.title}</h1>

          <p>{data.events.description}</p>

          <table>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Sources</th>
            </tr>
            {data.events.events.map(event => (
              <tr key={event.id}>
                <td><a href={`${frontendURL}${event.id}`}>{event.id}</a></td>
                <td>{event.title}</td>
                <td>{event.categories[0].title}</td>
                <td><a href={event.sources[0].url}>{event.sources[0].id}</a></td>
              </tr>
            ))}
          </table> */}

        </fieldset>
      </main>
    );
  }
}

export default Menu;