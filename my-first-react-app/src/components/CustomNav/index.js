import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import logo from './logo.png'; // Import your logo image file

const CustomNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);
  
  return (
    <div className='custom-nav'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} alt="Logo" className="mr-2" style={{ width: '45px', height: '45px' }} /> {/* Add logo image */}
            GameSphere Interactive
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
