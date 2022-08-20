import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import logo from '../assets/img/hype-scout.png'
import SocialItem from './common/SocialItem';

const Footer: React.FC = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="footer-col">
                            <img src={logo} alt="HypeScout" />
                            <div className="company-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed ultricies volutpat rhoncus faucibus sit. 
                            </div>

                            <div className="company-social-media">
                                <Nav>
                                    <SocialItem to="https://facebook.com/hypescout">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6688 0.5H1.33125C1.11129 0.501635 0.900811 0.589738 0.745275 0.745275C0.589738 0.900811 0.501635 1.11129 0.5 1.33125V14.6688C0.501635 14.8887 0.589738 15.0992 0.745275 15.2547C0.900811 15.4103 1.11129 15.4984 1.33125 15.5H8.5125V9.7H6.5625V7.43125H8.5125V5.7625C8.5125 3.825 9.69375 2.76875 11.4312 2.76875C12.0125 2.76875 12.5938 2.76875 13.175 2.85625V4.875H11.9813C11.0375 4.875 10.8562 5.325 10.8562 5.98125V7.425H13.1063L12.8125 9.69375H10.8562V15.5H14.6688C14.8887 15.4984 15.0992 15.4103 15.2547 15.2547C15.4103 15.0992 15.4984 14.8887 15.5 14.6688V1.33125C15.4984 1.11129 15.4103 0.900811 15.2547 0.745275C15.0992 0.589738 14.8887 0.501635 14.6688 0.5V0.5Z" fill="#637381"/>
                                        </svg>
                                    </SocialItem>

                                    <SocialItem to="https://instagram.com/hypescout">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0037 4.89652C12.5007 4.89652 12.9037 4.49358 12.9037 3.99652C12.9037 3.49947 12.5007 3.09652 12.0037 3.09652C11.5066 3.09652 11.1037 3.49947 11.1037 3.99652C11.1037 4.49358 11.5066 4.89652 12.0037 4.89652Z" fill="#637381"/>
                                            <path d="M8.00039 4.14861C7.23866 4.14861 6.49403 4.37449 5.86068 4.79768C5.22732 5.22087 4.73368 5.82238 4.44218 6.52612C4.15068 7.22987 4.07441 8.00425 4.22302 8.75135C4.37162 9.49844 4.73843 10.1847 5.27705 10.7233C5.81568 11.2619 6.50193 11.6287 7.24902 11.7774C7.99611 11.926 8.7705 11.8497 9.47425 11.5582C10.178 11.2667 10.7795 10.773 11.2027 10.1397C11.6259 9.50633 11.8518 8.76171 11.8518 7.99998C11.8518 6.97853 11.446 5.99892 10.7237 5.27665C10.0014 4.55437 9.02184 4.14861 8.00039 4.14861ZM8.00039 10.5C7.50593 10.5 7.02258 10.3534 6.61146 10.0787C6.20034 9.80395 5.87991 9.4135 5.69069 8.95669C5.50147 8.49987 5.45196 7.99721 5.54842 7.51226C5.64489 7.0273 5.88299 6.58185 6.23262 6.23221C6.58225 5.88258 7.02771 5.64448 7.51266 5.54802C7.99761 5.45155 8.50028 5.50106 8.9571 5.69028C9.41391 5.8795 9.80436 6.19993 10.0791 6.61106C10.3538 7.02218 10.5004 7.50553 10.5004 7.99998C10.5004 8.66302 10.237 9.29891 9.76815 9.76775C9.29931 10.2366 8.66343 10.5 8.00039 10.5Z" fill="#637381"/>
                                            <path d="M8 1.85137C10.0026 1.85137 10.2398 1.859 11.0306 1.89513C11.5062 1.90079 11.9773 1.98814 12.4233 2.15338C12.7467 2.27818 13.0405 2.4693 13.2856 2.71444C13.5308 2.95958 13.7219 3.25331 13.8467 3.57675C14.0119 4.02276 14.0993 4.49384 14.1049 4.96944C14.141 5.76025 14.1487 5.9975 14.1487 8.00006C14.1487 10.0026 14.1411 10.2399 14.1049 11.0307C14.0993 11.5063 14.0119 11.9774 13.8467 12.4234C13.7219 12.7468 13.5308 13.0405 13.2856 13.2857C13.0405 13.5308 12.7467 13.7219 12.4233 13.8467C11.9773 14.012 11.5062 14.0993 11.0306 14.105C10.2399 14.1411 10.0027 14.1487 8 14.1487C5.99725 14.1487 5.76012 14.1411 4.96937 14.105C4.49378 14.0993 4.02269 14.012 3.57669 13.8467C3.25325 13.7219 2.95951 13.5308 2.71437 13.2857C2.46923 13.0405 2.27812 12.7468 2.15331 12.4234C1.98808 11.9774 1.90072 11.5063 1.89506 11.0307C1.859 10.2399 1.85131 10.0026 1.85131 8.00006C1.85131 5.9975 1.85894 5.76025 1.89506 4.96944C1.90072 4.49384 1.98808 4.02276 2.15331 3.57675C2.27811 3.2533 2.46922 2.95955 2.71436 2.7144C2.95951 2.46925 3.25324 2.27812 3.57669 2.15331C4.02269 1.98808 4.49378 1.90072 4.96937 1.89506C5.76019 1.859 5.99744 1.85137 8 1.85137ZM8 0.5C5.96312 0.5 5.70769 0.508625 4.90775 0.545125C4.28566 0.557614 3.67018 0.675493 3.0875 0.89375C2.58921 1.08645 2.13667 1.38112 1.7589 1.7589C1.38112 2.13667 1.08645 2.58921 0.89375 3.0875C0.675459 3.67028 0.557579 4.28586 0.545125 4.90806C0.508625 5.70769 0.5 5.96312 0.5 8C0.5 10.0369 0.508625 10.2923 0.545125 11.0922C0.557586 11.7144 0.675466 12.33 0.89375 12.9128C1.08645 13.4111 1.38112 13.8636 1.7589 14.2414C2.13667 14.6192 2.58921 14.9139 3.0875 15.1066C3.67028 15.3249 4.28586 15.4427 4.90806 15.4552C5.70769 15.4914 5.96312 15.5 8 15.5C10.0369 15.5 10.2923 15.4914 11.0922 15.4549C11.7144 15.4424 12.33 15.3245 12.9128 15.1062C13.4111 14.9136 13.8636 14.6189 14.2414 14.2411C14.6192 13.8633 14.9139 13.4108 15.1066 12.9125C15.3248 12.3297 15.4427 11.7141 15.4552 11.0919C15.4914 10.2923 15.5 10.0369 15.5 8C15.5 5.96312 15.4914 5.70769 15.4549 4.90775C15.4424 4.28566 15.3245 3.67018 15.1062 3.0875C14.9135 2.58927 14.6188 2.13679 14.2411 1.75907C13.8633 1.38135 13.4108 1.08672 12.9125 0.894062C12.3297 0.675778 11.7141 0.557899 11.0919 0.545438C10.2923 0.508625 10.0369 0.5 8 0.5Z" fill="#637381"/>
                                        </svg>
                                    </SocialItem>

                                    <SocialItem to="https://linkedin.com/hypescout">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.375 0.5H1.625C1 0.5 0.5 1 0.5 1.5625V14.375C0.5 14.9375 1 15.4375 1.625 15.4375H14.375C15 15.4375 15.5 14.9375 15.5 14.375V1.5625C15.5 1 15 0.5 14.375 0.5ZM4.9375 13.25H2.75V6.125H4.9375V13.25ZM3.875 5.125C3.1875 5.125 2.5625 4.5625 2.5625 3.8125C2.5625 3.0625 3.125 2.5 3.875 2.5C4.5625 2.5 5.1875 3.0625 5.1875 3.8125C5.1875 4.5625 4.5625 5.125 3.875 5.125ZM13.3125 13.1875H11.125V9.6875C11.125 8.875 11.125 7.75 9.9375 7.75C8.75 7.75 8.625 8.6875 8.625 9.5625V13.125H6.4375V6.125H8.5V7.0625H8.5625C8.875 6.5 9.625 5.875 10.6875 5.875C12.9375 5.875 13.375 7.375 13.375 9.3125V13.1875H13.3125Z" fill="#637381"/>
                                        </svg>
                                    </SocialItem>

                                    <SocialItem to="https://twitter.com/hypescout">
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.45 11.5875C5.50571 11.5942 6.55224 11.3911 7.52887 10.9902C8.50551 10.5893 9.39282 9.99839 10.1393 9.25187C10.8858 8.50536 11.4767 7.61805 11.8777 6.64141C12.2786 5.66478 12.4816 4.61825 12.475 3.56254C12.475 3.43754 12.475 3.31879 12.475 3.19379C13.0222 2.79285 13.4959 2.30015 13.875 1.73754C13.3597 1.96291 12.8144 2.11238 12.2563 2.18129C12.8481 1.82865 13.2921 1.27358 13.5063 0.618791C12.9547 0.949692 12.3499 1.18231 11.7188 1.30629C11.2937 0.853395 10.7313 0.553201 10.1184 0.452157C9.50558 0.351114 8.87653 0.454853 8.32859 0.747325C7.78065 1.0398 7.34437 1.5047 7.08725 2.07009C6.83014 2.63548 6.76652 3.26985 6.90625 3.87504C5.78502 3.82001 4.68794 3.52943 3.68647 3.02223C2.685 2.51504 1.80159 1.80259 1.09375 0.931291C0.736827 1.55078 0.628642 2.28274 0.7911 2.97899C0.953558 3.67524 1.37452 4.28374 1.96875 4.68129C1.53038 4.66438 1.10216 4.54448 0.71875 4.33129V4.36254C0.714855 5.00994 0.932951 5.63911 1.33669 6.14521C1.74043 6.6513 2.30542 7.00375 2.9375 7.14379C2.52977 7.25345 2.10268 7.27054 1.6875 7.19379C1.87049 7.74591 2.2198 8.2279 2.68753 8.57366C3.15526 8.91942 3.71849 9.11202 4.3 9.12504C3.30576 9.92537 2.07006 10.3659 0.79375 10.375C0.569971 10.3686 0.346717 10.3498 0.125 10.3188C1.41685 11.1419 2.91825 11.5758 4.45 11.5688" fill="#637381"/>
                                        </svg>
                                    </SocialItem>
                                </Nav>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-col">
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-col">
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-col">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
