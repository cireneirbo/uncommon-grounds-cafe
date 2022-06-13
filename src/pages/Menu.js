import { useState, useEffect } from 'react';
import Data from '../services/data/Data';
import Bagels from '../components/menuItems/Bagels';
import BagelSandwiches from '../components/menuItems/BagelSandwiches';
import BreakfastSandwich from '../components/menuItems/BreakfastSandwich';
import ColdDrinks from '../components/menuItems/ColdDrinks';
import CreateYourOwn from '../components/menuItems/CreateYourOwn';
import Desserts from '../components/menuItems/Desserts';
import HotDrinks from '../components/menuItems/HotDrinks';
import Salads from '../components/menuItems/Salads';
import Soups from '../components/menuItems/Soups';

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