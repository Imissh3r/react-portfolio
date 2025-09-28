export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        <a href="#hero">Sree</a>
      </h2>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}