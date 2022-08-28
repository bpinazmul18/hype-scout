import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import logo from '../assets/img/hype-scout.png'
import SocialItem from './common/SocialItem';
import NavItem from './common/NavItem';

const Footer: React.FC = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md="3">
                        <div className="footer-col text-center text-md-start">
                            <img src={logo} alt="HypeScout" />
                            <div className="company-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed ultricies volutpat rhoncus faucibus sit. 
                            </div>

                            <div className="company-social-media">
                                <Nav className="justify-content-center justify-content-md-start">
                                    <SocialItem href="https://facebook.com/" iconName="icon-fb"/>
                                    <SocialItem href="https://instagram.com/" iconName="icon-instagram"/>
                                    <SocialItem href="https://linkedin.com/" iconName="icon-linkedin"/>
                                    <SocialItem href="https://twitter.com/" iconName="icon-twitter"/>
                                </Nav>
                            </div>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="footer-col">

                            <h4 className="px-4 text-light">Company</h4>

                            <Nav className="navbar-nav category-nav" as="ul">
                                <NavItem to="about-us" linkName="About Us"/>
                                <NavItem to="careers" linkName="Careers"/>
                                <NavItem to="case-study" linkName="Case Study"/>
                                <NavItem to="blog" linkName="Blog"/>
                                <NavItem to="contact-us" linkName="Contact Us"/>
                            </Nav>
                            
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="footer-col">
                            <h4 className="px-4 text-light">Influencer</h4>

                            <Nav className="navbar-nav category-nav" as="ul">
                                <NavItem to="join-as-influencer" linkName="Join as Influencer"/>
                                <NavItem to="hype-social" linkName="HypeSocial"/>
                            </Nav>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="footer-col">
                            <h4 className="px-4 text-light">Advertiser</h4>

                            <Nav className="navbar-nav category-nav" as="ul">
                                <NavItem to="join-as-advertiser" linkName="Join as Advertiser"/>
                                <NavItem to="hype-link" linkName="Hypelink"/>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="footer-col d-flex align-items-center justify-content-between flex-column-reverse flex-sm-row">
                        <div className="footer-copy-right-text">
                            <p>© Hypescout 2022. All rights reserved</p>
                        </div>

                        <Nav className="navbar-nav flex-row" as="ul">
                            <NavItem to="terms-conditions" linkName="Terms & Conditions"/>
                            <NavItem to="privacy" linkName="Privacy"/>
                            <NavItem to="sitemap" linkName="Sitemap"/>
                        </Nav>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
