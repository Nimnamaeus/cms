import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import './CustomNav.css'; // Import the custom CSS file for styling
import coinIcon from './coin.png'; // Import the gold coin icon image file
import logo from './logo.png'; // Import your logo image file

const CustomNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  return (
    <div className='custom-nav'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} alt="Logo" className="mr-2" style={{ width: '45px', height: '45px' }} /> {/* Add logo image */}
          <span className="navbar-brand__text">GameSphere Interactive</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/my-games" className="nav-link">My Games</NavLink> {/* Add My Games feature */}
            </NavItem>
            <NavItem>
              <NavLink href="/cart" className="nav-link">Cart</NavLink> {/* Add Cart feature */}
            </NavItem>
            <NavItem>
              <div className="nav-link nav-coin">
                <img src={coinIcon} alt="Coin" className="coin-icon" />
                <span className="coin-text">100</span> {/* Display current coin count */}
              </div>
            </NavItem>
            <NavItem>
              <NavLink href="/logout" className="nav-link logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
