
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        <span className="brand-icon">✦</span>
        <span>MT Alchemy</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#store">Store</a>
        <a href="#learning">Learning</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <div className="nav-actions">
        <a href="#signin" className="sign-in">SIGN IN</a>
        <a href="#register" className="register-button">REGISTER</a>
      </div>
    </header>
  );
}

export default Navbar;
