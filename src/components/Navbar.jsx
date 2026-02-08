import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="contanier">
        <div class="header-top">
  <img className="semiconiclogo" src="/src/assets/Images/11111.png" />
</div>

      
      </div>

      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">

            {/* HOME */}
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >Home</NavLink>
            </li>

            {/* ABOUT */}
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? "active-link" : ""}
              >About Us</NavLink>
            </li>

            {/* SEGMENT DROPDOWN */}
            <li className="dropdown">
              <NavLink 
                to="/Segment"
                className={({ isActive }) => isActive ? "active-link" : ""}
              >Segment ▾</NavLink>

              <ul className="dropdown-menu">
                <li><NavLink to="/Lighting">Lighting</NavLink></li>
                <li><NavLink to="/Bldc">BLDC</NavLink></li>
                <li><NavLink to="/Emeter">E-Meter</NavLink></li>



                <li><NavLink to="/Smps">SMPS</NavLink></li>



                <li><NavLink to="/Industrial">Industrial</NavLink></li>
                <li><NavLink to="/Auto">Automotive</NavLink></li>
                <li><NavLink to="/Medical">Medical</NavLink></li>
                <li><NavLink to="/Solar">Solar</NavLink></li>
                <li><NavLink to="/Module">Module</NavLink></li>
                <li><NavLink to="/Io">IOTFY</NavLink></li>
              </ul>
            </li>

            {/* LINE CARD */}
            <li>
              <NavLink 
                to="/linecard"
                className={({ isActive }) => isActive ? "active-link" : ""}
              >Line Card</NavLink>
            </li>

            {/* SMPS DROPDOWN */}
          <li className="dropdown">
  <NavLink to="/Smc">SMPS ▾</NavLink>
  <ul className="dropdown-menu">
    <li><NavLink to="/smc">SMC</NavLink></li>
  </ul>
</li>


            <li><NavLink to="/Research" className={({ isActive }) => isActive ? "active-link" : ""}>Research & Development</NavLink></li>
            <li><NavLink to="/Solutions" className={({ isActive }) => isActive ? "active-link" : ""}>Solutions</NavLink></li>
            <li><NavLink to="/Servies" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/clients" className={({ isActive }) => isActive ? "active-link" : ""}>Clients</NavLink></li>
            <li><NavLink to="/Career" className={({ isActive }) => isActive ? "active-link" : ""}>Career</NavLink></li>
            <li><NavLink to="/Contect" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
            {/* SOCIAL ICONS */}



          </ul>
                  <li className="nav-social">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</li>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
