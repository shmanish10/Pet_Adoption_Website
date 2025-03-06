import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">PetAdoption</div>
      <nav className="navbar-menu">
        <Link to="/" onClick={closeDropdown}>Home</Link>
        <Link to="/about" onClick={closeDropdown}>About Us</Link>

        <div className="dropdown">
          <Link 
            to="#" 
            className="dropdown-toggle" 
            onClick={(e) => { 
              e.preventDefault(); 
              toggleDropdown(); 
            }}
          >
            Pets
          </Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/pets/dogs" onClick={closeDropdown}>Dogs</Link>
              <Link to="/pets/cats" onClick={closeDropdown}>Cats</Link>
              <Link to="/pets/birds" onClick={closeDropdown}>Birds</Link>
            </div>
          )}
        </div>

        <Link to="/list-pet" onClick={closeDropdown}>List Your Pet</Link>
        <Link to="/adoption-form" onClick={closeDropdown}>Adopt a Pet</Link>
        <Link to="/contact" onClick={closeDropdown}>Contact</Link>
      </nav>
      
      <Link to="/loginform">
        <FaUserCircle className="profile-icon" />
      </Link>
    </header>
  );
}
