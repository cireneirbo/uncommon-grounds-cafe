import { useState, useEffect } from 'react';
import Data from './Data';
import Bagels from './menuItems/Bagels';
import BagelSandwiches from './menuItems/BagelSandwiches';
import BreakfastSandwich from './menuItems/BreakfastSandwich';
import ColdDrinks from './menuItems/ColdDrinks';
import CreateYourOwn from './menuItems/CreateYourOwn';
import Desserts from './menuItems/Desserts';
import HotDrinks from './menuItems/HotDrinks';
import Salads from './menuItems/Salads';
import Soups from './menuItems/Soups';

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
        <div className="box-shadow">
          <p>Awaiting API data...</p>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Bagels data={data}/>

        <BagelSandwiches data={data}/>

        <CreateYourOwn data={data}/>

        <BreakfastSandwich data={data}/>

        <Salads data={data}/>

        <Soups data={data}/>

        <HotDrinks data={data}/>

        <ColdDrinks data={data}/>

        <Desserts data={data}/>

      </main>
    );
  }
}

export default Menu;