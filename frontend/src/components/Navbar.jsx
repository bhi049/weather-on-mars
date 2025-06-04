import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#weather">Weather</a></li>
        <li><a href="#fun-facts">Fun Facts</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;