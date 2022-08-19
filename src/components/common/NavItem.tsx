import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavItemProps } from '../../models/navItem';

const NavItem = ({ to, linkName }: NavItemProps) => {
    return ( 
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to={to}>{linkName}</Nav.Link>
        </Nav.Item>
     );
}
 
export default NavItem