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

          <h3>Types</h3>
          <ul>
          <h3>Types</h3>
            {data.menu[0].bagels.map(bagel => (
              <li key={bagel.id}>{bagel}</li>
            ))}
          </ul>

          <h3>Prices{data.menu[0].sizes.map(size => (
              <li key={size.id}>{size[0]} - {size[1]}</li>
            ))}</h3>
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
          <ul>
            {data.menu[1].bagelSandwiches.map(bagelSandwich => (
              <li key={bagelSandwich.id}>{bagelSandwich[0]} - {bagelSandwich[1]}</li>
            ))}
          </ul>
          
        </fieldset>

        <fieldset>

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
          
        </fieldset>

        <fieldset>

          <h1>{data.menu[3].title}</h1>
          <p>{data.menu[3].description}</p>
          <ul>
            {data.menu[3].breakfastSandwiches.map(breakfastSandwich => (
              <li key={breakfastSandwich.id}>{breakfastSandwich[0]} - {breakfastSandwich[1]}</li>
            ))}
          </ul>
          
        </fieldset>

        <fieldset>

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
          
        </fieldset>

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

        <fieldset>

          <h1>{data.menu[6].title}</h1>
          <p>{data.menu[6].description}</p>
         
          <h3>{data.menu[6].titleTeas}</h3>
          <ul>
            {data.menu[6].teas.map(tea => (
              <li key={tea.id}>{tea[0]} - {tea[1]}</li>
            ))}
          </ul>
          <ul>
            {data.menu[6].teaFlavors.map(teaFlavor => (
              <li key={teaFlavor.id}>{teaFlavor}</li>
            ))}
          </ul>

          <h3>{data.menu[6].titleCoffees}</h3>
          <ul>
            {data.menu[6].coffees.map(coffee => (
              <li key={coffee.id}>{coffee[0]} - {coffee[1]}</li>
            ))}
          </ul>
          
        </fieldset>

        <fieldset>

          <h1>{data.menu[7].title}</h1>
          <p>{data.menu[7].description}</p>
         
          <h3>{data.menu[7].titleIcedDrinks}</h3>
          <ul>
            {data.menu[7].icedDrinks.map(icedDrink => (
              <li key={icedDrink.id}>{icedDrink[0]} - {icedDrink[1]}</li>
            ))}
          </ul>

          <h3>{data.menu[7].titleBlends}</h3>
          <ul>
            {data.menu[7].blends.map(blend => (
              <li key={blend.id}>{blend[0]} - {blend[1]}</li>
            ))}
          </ul>

          <h3>{data.menu[7].titleSmoothies}</h3>
          <p>{data.menu[7].descriptionSmoothies[0]} - {data.menu[7].descriptionSmoothies[1]}</p>
          <ul>
            {data.menu[7].smoothies.map(smoothie => (
              <li key={smoothie.id}>{smoothie}</li>
            ))}
          </ul>
          
        </fieldset>

        <fieldset>

          <h1>{data.menu[8].title}</h1>
          <p>{data.menu[8].description}</p>
          <ul>
            {data.menu[8].desserts.map(dessert => (
              <li key={dessert.id}>{dessert[0]} - {dessert[1]}</li>
            ))}
          </ul>
          
        </fieldset>


      </main>
    );
  }
}

export default Menu;