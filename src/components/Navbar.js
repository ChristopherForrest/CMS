import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap';


  


    
  export default class DashNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
    
      this.state = {
        isOpen: false,

      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
        
      return (
       
          <Navbar color="light" light expand="md" className="sticky-top" style={{borderBottom: 'rgb(189, 184, 184) solid 1px'}}>
            <NavbarBrand  href="/dashboard"><img src="./Sandhurst_Logo.jpg" alt="Sandhurst Logo"></img></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Logout</NavLink>
                </NavItem>
       
                
              </Nav>
            </Collapse>
          </Navbar>
     
      );
    }
  }