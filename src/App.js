import { Outlet, Link } from "react-router-dom";
import Nav from './components/layout/navigation/Nav';
import Footer from "./components/layout/footer/Footer";
import './App.css';

function App() {

  return (
    <div class="full-site-content">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );

}

export default App;
