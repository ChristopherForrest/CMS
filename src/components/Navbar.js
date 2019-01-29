import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap';
import { withAuth } from '@okta/okta-react';

  


    
  export default withAuth(class DashNavbar extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.state = {
        isOpen: false,
      };
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }
    

    componentDidUpdate() {
      this.checkAuthentication();
    }
    
    async login() {
      // Redirect to '/' after login
      this.props.auth.login('/');
    }
  
    async logout() {
      // Redirect to '/' after logout
      this.props.auth.logout('/');
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
        
      return (
       
          <Navbar color="light" light expand="md" className="sticky-top" style={{borderBottom: 'rgb(189, 184, 184) solid 1px'}}>
            <NavbarBrand  href="/"><img src="./Sandhurst_Logo.jpg" alt="Sandhurst Logo"></img></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Button color="danger" onClick={this.logout}>Logout</Button></NavLink>
                </NavItem>
                     </Nav>
            </Collapse>
          </Navbar>
     
      );
    }
  })