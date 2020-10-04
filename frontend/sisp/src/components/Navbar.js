import React, {Component} from 'react'
import {Navbar, NavItem, NavLink, Nav } from 'reactstrap'

class PrincipalNavbar extends Component{
    render(){
        return(
            <Navbar color="primary" light expand="md" >
                <Nav>
                    <NavItem>
                        <NavLink href="#">
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default PrincipalNavbar;