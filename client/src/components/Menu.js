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

          <h1>{data.menu[0].title}</h1>
          <p>{data.menu[0].description}</p>

          <h3>Bagels</h3>
          <ul>
            {data.menu[0].bagels.map(bagel => (
              <li key={bagel.id}>{bagel}</li>
            ))}
          </ul>

          <h3>Prices</h3>
          <ul>
            {data.menu[0].sizes.map(size => (
              <li key={size.id}>{size[0]} - {size[1]}</li>
            ))}
          </ul>
          
          <h3>Spreads</h3>
          <ul>
            {data.menu[0].toppings.map(topping => (
              <li key={topping.id}>{topping[0]} - {topping[1]}</li>
            ))}
          </ul>

          <h3>Cheeses</h3>
          <ul>
            {data.menu[0].cheeseFlavors.map(cheese => (
              <li key={cheese.id}>{cheese}</li>
            ))}
          </ul>
          
        </fieldset>

        <fieldset>

          <h1>{data.menu[1].title}</h1>
          <p>{data.menu[1].description}</p>

          <h3>Bagel Sandwiches</h3>
          <ul>
            {data.menu[1].bagelSandwiches.map(bagelSandwich => (
              <li key={bagelSandwich.id}>{bagelSandwich[0]} - {bagelSandwich[1]}</li>
            ))}
          </ul>
          
        </fieldset>
      </main>
    );
  }
}

export default Menu;