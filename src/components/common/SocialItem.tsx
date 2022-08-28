import React from 'react'
import {Nav} from 'react-bootstrap'

interface SocialItemProps {
    href: string,
    iconName: string,
}

const SocialItem: React.FC<SocialItemProps> = ({ href, iconName }) => {
    return ( 
        <Nav.Item as="li">
            <Nav.Link href={href}>
                <i className={iconName}></i>
            </Nav.Link>
        </Nav.Item>
     );
}
 
export default SocialItem