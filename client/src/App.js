import { Outlet, Link } from "react-router-dom";
import Nav from './components/Nav';
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
    <div class="body">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );

}

export default App;
