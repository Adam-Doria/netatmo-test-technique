import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className=" logo"><span>N</span>etatmo<span>.</span></h2>
      <ul className="navigation">
        <li className="navlink"> <a href="#">Accueil</a> </li>
        <li className="navlink"> <a href="#">Service</a> </li>
        <li className="navlink"> <a href="#">Tarifs</a> </li>
        <li className="navlink"> <a href="#">Contact</a> </li>
      </ul>
    </nav>
  );
}
