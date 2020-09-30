import React, {Component} from 'react'
import {Navbar, NavItem, NavLink } from 'reactstrap'

class PrincipalNavbar extends Component{
    render(){
        return(
            <Navbar color="primary" light expand="md" >
                <NavItem>
                    <NavLink>
                        <a href="#">Estado mecanico</a>
                    </NavLink>
                </NavItem>
            </Navbar>
        )
    }
}

export default PrincipalNavbar;