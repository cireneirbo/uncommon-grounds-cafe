import { Link } from "react-router-dom";

function Footer() {
  return (
    <main>
      <fieldset className="footer">
        

        <ul className="footer-list"> 
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
            <li> | </li>
          <li>
            <Link to="/menu" className="footer-link">Menu</Link>
          </li>
            <li> | </li>
          <li>
            <Link to="/about" className="footer-link">About</Link>
          </li>
            <li> | </li>
          <li>
            <Link to="/hiring" className="footer-link">Hiring</Link>
          </li>
            <li> | </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
        </ul>
      </fieldset>
    </main>
  );
}

export default Footer;