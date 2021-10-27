import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
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
            <Navbar id="navbar">
                <div>
                    <NavItem>
                    <a onClick={() => openNav()}>
                        Open Navigation Pane</a>
                    </NavItem>
                    <NavItem>
                    <ul className="navbar-custom">
                        <li>
                            <input id="inputText" type="text"></input>
                            <Button>Search</Button>
                        </li>
                    </ul>
                    </NavItem>
                </div>
            </Navbar>
        );
    }
}


export default Header;