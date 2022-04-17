import { Link } from "react-router-dom";

function Nav() {
  return (
    <main>
      <div className="nav-bar">
        <fieldset>
          <h1>Uncommon Grounds Cafe</h1>

          <nav className="App-link"> 
            <Link to="/" className="App-link">Home</Link> |{" "}
            <Link to="/menu" className="App-link">Menu</Link> |{" "}
            <Link to="/about" className="App-link">About</Link>
          </nav>
        </fieldset>
      </div>
    </main>
  );
}

export default Nav;