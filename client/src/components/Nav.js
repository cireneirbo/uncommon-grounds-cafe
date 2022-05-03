import { Link } from "react-router-dom";

function Nav() {
  return (
    <main>
      <fieldset className="nav-bar">
        <h1>Uncommon Grounds Cafe</h1>

        <nav className="App-link"> 
          <Link to="/" className="App-link">Home</Link> |{" "}
          <Link to="/menu" className="App-link">Menu</Link> |{" "}
          <Link to="/about" className="App-link">About</Link> |{" "}
          <Link to="/contact" className="App-link">Contact</Link>
        </nav>
      </fieldset>
    </main>
  );
}

export default Nav;