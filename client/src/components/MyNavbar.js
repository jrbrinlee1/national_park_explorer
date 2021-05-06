import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">National Park Explorer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/ParksPage/">Parks</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/TrailsPage/">Trails</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Wildlife/">Wildlife</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Biodiversity">Biodiversity</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Visitor_Stats">Visitor Stats</NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;