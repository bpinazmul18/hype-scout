import React from 'react'
import {Nav} from 'react-bootstrap'

interface SocialItemProps {
    to: string,
    children: React.ReactNode
}

const SocialItem: React.FC<SocialItemProps> = ({ to, children }) => {
    return ( 
        <Nav.Item as="li">
            <Nav.Link href={to}>{children}</Nav.Link>
        </Nav.Item>
     );
}
 
export default SocialItem