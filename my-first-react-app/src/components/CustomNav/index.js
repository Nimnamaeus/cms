import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import './CustomNav.css'; // Import the custom CSS file for styling
import coinIcon from './coin.png'; // Import the gold coin icon image file
import logo from './logo.png'; // Import your logo image file

const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='custom-nav'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} alt="Logo" className="mr-2" style={{ width: '45px', height: '45px' }} />
           Kingly
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wallet">
                <img src={coinIcon} alt="Coins" className="mr-2" style={{ width: '25px', height: '25px' }} />
                1000
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout" className="nav-link">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
