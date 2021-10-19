import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function openNav() {
    document.getElementById("sidebarNavigation").style.width = "200px";
    document.getElementById("main").style.paddingLeft = "220px";
    document.getElementById("navbar").style.marginLeft = "200px";

  }
class Header extends Component {
    render(){
        return(
            //Top Navigation Bar
            <Navbar color="dark" dark expand="md" id="navbar">
                <Nav navbar className="mr-auto">
                    <NavItem>
                    <a href="#" styles="font-size:100px" onClick={() => openNav()}>
                    Open Navigation Pane
                    </a>
                    </NavItem>
                    <NavItem>
                    <input type="text" placeholder="Search..."></input>
                    <span><button class="btn btn-primary">Search</button></span>                  
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}


export default Header;