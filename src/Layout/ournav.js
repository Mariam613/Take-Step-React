import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,Button,
  Input
} from 'reactstrap';

const Navmai = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="p-0 pl-3">
        <NavbarBrand href="/">

         <img  width="50%" src="/img/logo.png"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{marginRight:"23.1rem"}} navbar>
            <NavItem>
            
            <Input className="p-3 mt-1"  placeholder="search ..." style={{height:"22px",borderRadius:"35px"}}type="text"/>
            </NavItem>
            <NavItem className=" ml-2 mt-2">
              <i className="fas fa-search" ></i>
            </NavItem>
            </Nav>
            <Nav style={{marginRight:"3rem" ,backgroundColor:"#EBC010",padding:"10px 75px 10px 32px"}}>
            <NavItem >
            <NavLink style={{cursor:"pointer"}}>About Us</NavLink>
            
            </NavItem>
            <NavItem className="ml-2 ">
            <NavLink style={{cursor:"pointer"}}>Sign In</NavLink>
            
            </NavItem>
            </Nav>
           
         <Button  style={{borderRadius:"35px",color:"#fffff",backgroundColor:"black",    padding: "4px 29px"}}> Sign  Up</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmai;