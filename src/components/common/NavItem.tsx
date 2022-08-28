import React from 'react'
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavItemProps } from '../../models/navItem';

const NavItem: React.FC<NavItemProps> = ({ to, linkName }) => {
    return ( 
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to={to}>{linkName}</Nav.Link>
        </Nav.Item>
     );
}
 
export default NavItem