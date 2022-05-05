import { Outlet, Link } from "react-router-dom";
import Nav from './components/Nav';
import Footer from "./components/Footer";
import './App.css';



function App() {


  const images = ['../public/images/fancycoffeeshop.jpg', "../public/images/chattycoffeshop.jpg", "../public/images/npccoffeeshop.jpg"];
  let index = 0;

  // function buildImage() {
  //     document.getElementById('body').style.backgroundImage = 'url('+images[index]+')';
  // }

  function changeImage() {
      index++;
      if (index >= images.length) index = 0;
      document.getElementsByClassName('body').style.backgroundImage = 'url(' + images[index] + ')';
  }

  return (
    <div class="body">
      <Nav />
      <Outlet />
      <Footer />
      <button onclick={changeImage}>NextImage</button>
    </div>
  );
}

export default App;
