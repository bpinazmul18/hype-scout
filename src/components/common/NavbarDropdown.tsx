import React from 'react'
import { Nav, Dropdown } from 'react-bootstrap'
import avatar from '../../assets/img/avatar.png'

interface NavbarDropdownProps {
    onClick: (name: string) => void
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ onClick }) => {
    return (
        <Nav className="navbar-dropdown flex-row ms-auto order-lg-3">
            <Nav.Item>
                <Dropdown>
                    <Dropdown.Toggle className='border-0' variant="transparent">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.03809 19.6016C8.03809 20.0599 8.10541 20.8388 8.7026 21.2535C9.2998 21.6682 10.0333 21.8932 10.7881 21.8932C11.5429 21.8932 12.2764 21.6682 12.8736 21.2535C13.4708 20.8388 13.5381 20.0599 13.5381 19.6016" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.60076 9.89453C4.60076 6.47727 7.371 3.70703 10.7883 3.70703V2.33203C6.61161 2.33203 3.22576 5.71788 3.22576 9.89453V12.743C3.22576 13.4228 3.00525 14.0844 2.59732 14.6283L2.35618 14.9498C2.10009 15.2913 1.72093 15.894 1.86452 16.6009C2.09334 17.7271 3.0733 18.1262 3.88353 18.272C4.55165 18.3923 5.32744 18.3836 5.94527 18.3766C6.07949 18.3751 6.20628 18.3737 6.32287 18.3737H10.7883V16.9987H6.32287C6.17314 16.9987 6.0228 17.0002 5.87291 17.0016C5.25936 17.0076 4.6532 17.0135 4.12713 16.9188C3.46949 16.8004 3.26506 16.5883 3.212 16.3271C3.20497 16.2925 3.20446 16.2338 3.24312 16.1337C3.28328 16.0297 3.35494 15.9098 3.45618 15.7748L3.69732 15.4533C4.28375 14.6714 4.60076 13.7204 4.60076 12.743V9.89453Z" fill="#637381"/>
                            <path d="M16.9765 9.89453C16.9765 6.47727 14.2055 3.70703 10.7883 3.70703V2.33203C14.9649 2.33203 18.3515 5.71788 18.3515 9.89453V12.743C18.3515 13.4228 18.572 14.0844 18.9799 14.6283L19.2211 14.9498C19.4772 15.2913 19.8563 15.894 19.7127 16.6009C19.4839 17.7271 18.504 18.1262 17.6937 18.272C17.0256 18.3923 16.2498 18.3836 15.632 18.3766C15.4978 18.3751 15.371 18.3737 15.2544 18.3737H10.7883V16.9987H15.2544C15.4041 16.9987 15.5544 17.0002 15.7043 17.0016C16.3179 17.0076 16.924 17.0135 17.4501 16.9188C18.1078 16.8004 18.3122 16.5883 18.3653 16.3271C18.3723 16.2925 18.3728 16.2338 18.3341 16.1337C18.294 16.0297 18.2223 15.9098 18.1211 15.7748L17.8799 15.4533C17.2935 14.6714 16.9765 13.7204 16.9765 12.743V9.89453Z" fill="#637381"/>
                        </svg>
                    </Dropdown.Toggle>
                </Dropdown>
            </Nav.Item>

            <Nav.Item>
                <Dropdown>
                    <Dropdown.Toggle className='border-0' variant="transparent">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.476 5.48325C17.7303 5.48325 17.9364 5.27713 17.9364 5.02288C17.9364 4.76861 17.7303 4.5625 17.476 4.5625C17.2218 4.5625 17.0156 4.76861 17.0156 5.02288C17.0156 5.27713 17.2218 5.48325 17.476 5.48325Z" fill="#637381"/>
                            <path d="M18.3969 9.1981C18.6512 9.1981 18.8572 8.99198 18.8572 8.73772C18.8572 8.48346 18.6512 8.27734 18.3969 8.27734C18.1426 8.27734 17.9365 8.48346 17.9365 8.73772C17.9365 8.99198 18.1426 9.1981 18.3969 9.1981Z" fill="#637381"/>
                            <path d="M11.0304 19.3588C14.3862 19.3588 17.3638 17.1898 18.4401 14.0076C18.5058 13.8139 18.4352 13.5999 18.2674 13.4826C18.1002 13.3662 17.875 13.3733 17.7149 13.5019C16.7227 14.3017 15.5254 14.7243 14.2531 14.7243C11.2066 14.7243 8.69783 12.2462 8.69783 9.19978C8.69783 7.29488 9.69558 5.51708 11.3159 4.49605C11.4894 4.38678 11.5497 4.17504 11.4926 3.97812C11.436 3.7812 11.2354 3.64453 11.0304 3.64453C6.71482 3.64453 3.14258 7.18607 3.14258 11.5017C3.14258 15.8172 6.71482 19.3588 11.0304 19.3588Z" fill="#637381"/>
                            <path d="M11.9516 7.35546C12.7132 7.35546 13.3327 7.97501 13.3327 8.73661C13.3327 8.99107 13.5387 9.19698 13.7931 9.19698C14.0476 9.19698 14.2535 8.99107 14.2535 8.73661C14.2535 7.97501 14.8731 7.35546 15.6346 7.35546C15.8891 7.35546 16.095 7.14955 16.095 6.89509C16.095 6.64062 15.8891 6.43471 15.6346 6.43471C14.8731 6.43471 14.2535 5.78446 14.2535 5.02288C14.2535 4.76841 14.0476 4.5625 13.7931 4.5625C13.5387 4.5625 13.3327 4.76841 13.3327 5.02288C13.3327 5.78446 12.7132 6.43471 11.9516 6.43471C11.6971 6.43471 11.4912 6.64062 11.4912 6.89509C11.4912 7.14955 11.6971 7.35546 11.9516 7.35546Z" fill="#637381"/>
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="d-flex align-items-center" as="li" onClick={() => onClick('light')}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9912 5.1571C9.83511 5.15688 8.70501 5.4995 7.74369 6.1416C6.78237 6.7837 6.03305 7.69646 5.5905 8.76444C5.14795 9.8324 5.03204 11.0077 5.25744 12.1415C5.48283 13.2754 6.0394 14.3169 6.85676 15.1345C7.67413 15.952 8.71557 16.5088 9.84941 16.7343C10.9832 16.96 12.1585 16.8443 13.2265 16.402C14.2946 15.9597 15.2075 15.2105 15.8498 14.2494C16.4921 13.2881 16.835 12.1581 16.835 11.0021C16.8333 9.45253 16.2172 7.96697 15.1216 6.87123C14.0261 5.77547 12.5407 5.15901 10.9912 5.1571Z"/>
                                <path d="M20.282 9.9707H18.9081C18.6346 9.9707 18.3723 10.0793 18.1788 10.2727C17.9854 10.4662 17.8767 10.7285 17.8767 11.0021C17.8767 11.2757 17.9854 11.538 18.1788 11.7314C18.3723 11.9249 18.6346 12.0335 18.9081 12.0335H20.282C20.5556 12.0335 20.8179 11.9249 21.0113 11.7314C21.2048 11.538 21.3134 11.2757 21.3134 11.0021C21.3134 10.7285 21.2048 10.4662 21.0113 10.2727C20.8179 10.0793 20.5556 9.9707 20.282 9.9707Z"/>
                                <path d="M10.9912 17.8745C10.7179 17.875 10.4558 17.9838 10.2626 18.1771C10.0693 18.3704 9.96072 18.6326 9.96045 18.9059V20.2811C9.96045 20.5545 10.0691 20.8166 10.2623 21.0099C10.4556 21.2032 10.7178 21.3117 10.9911 21.3117C11.2645 21.3117 11.5267 21.2032 11.7199 21.0099C11.9132 20.8166 12.0218 20.5545 12.0218 20.2811V18.9059C12.0216 18.6326 11.9129 18.3705 11.7198 18.1771C11.5266 17.9838 11.2646 17.875 10.9912 17.8745Z"/>
                                <path d="M4.12258 11.0021C4.12235 10.7287 4.0137 10.4666 3.82047 10.2733C3.62724 10.0799 3.3652 9.97107 3.09184 9.9707H1.71819C1.44463 9.9707 1.18229 10.0793 0.988868 10.2727C0.795435 10.4662 0.686768 10.7285 0.686768 11.0021C0.686768 11.2757 0.795435 11.538 0.988868 11.7314C1.18229 11.9249 1.44463 12.0335 1.71819 12.0335H3.09185C3.36521 12.0331 3.62725 11.9243 3.82047 11.7309C4.0137 11.5376 4.12235 11.2755 4.12258 11.0021Z"/>
                                <path d="M10.9913 4.12548C11.2647 4.12506 11.5266 4.01624 11.7199 3.82289C11.9131 3.62953 12.0218 3.36743 12.022 3.09407V1.71889C12.022 1.44554 11.9135 1.18339 11.7201 0.990105C11.5269 0.79682 11.2647 0.688232 10.9914 0.688232C10.718 0.688232 10.4559 0.79682 10.2626 0.990105C10.0693 1.18339 9.96069 1.44554 9.96069 1.71889V3.09407C9.96088 3.36741 10.0695 3.62951 10.2627 3.82287C10.456 4.01623 10.718 4.12506 10.9913 4.12548Z"/>
                                <path d="M17.3119 6.13915L18.2843 5.16677C18.3803 5.07114 18.4565 4.95751 18.5086 4.83238C18.5606 4.70726 18.5875 4.57309 18.5877 4.43757C18.5878 4.30205 18.5612 4.16784 18.5094 4.04261C18.4576 3.91737 18.3816 3.8036 18.2857 3.70777C18.1899 3.61194 18.0762 3.53595 17.9509 3.48415C17.8257 3.43235 17.6914 3.40576 17.556 3.40588C17.4205 3.40602 17.2863 3.43288 17.1612 3.48492C17.036 3.53697 16.9224 3.61318 16.8267 3.70919L15.8544 4.6816C15.7584 4.77724 15.6821 4.89087 15.63 5.016C15.5781 5.14113 15.5512 5.27529 15.551 5.41081C15.5509 5.54633 15.5775 5.68054 15.6293 5.80577C15.6811 5.931 15.7571 6.04478 15.8529 6.1406C15.9488 6.23643 16.0625 6.31241 16.1877 6.36422C16.313 6.41602 16.4473 6.44261 16.5827 6.44247C16.7182 6.44234 16.8524 6.41548 16.9775 6.36344C17.1027 6.31139 17.2163 6.23518 17.3119 6.13915Z"/>
                                <path d="M17.3117 15.865C17.2161 15.7691 17.1024 15.6929 16.9773 15.6408C16.8522 15.5888 16.718 15.562 16.5826 15.5619C16.4471 15.5617 16.3129 15.5884 16.1877 15.6402C16.0624 15.692 15.9487 15.768 15.8529 15.8637C15.757 15.9595 15.6811 16.0733 15.6292 16.1985C15.5774 16.3237 15.5508 16.4579 15.551 16.5934C15.5511 16.7289 15.578 16.8631 15.63 16.9882C15.682 17.1133 15.7582 17.2269 15.8542 17.3226L16.8266 18.295C16.9222 18.391 17.0358 18.4672 17.1609 18.5191C17.286 18.5712 17.4202 18.598 17.5557 18.5982C17.6912 18.5983 17.8254 18.5717 17.9506 18.5199C18.0758 18.4681 18.1896 18.3921 18.2854 18.2962C18.3812 18.2004 18.4571 18.0867 18.5089 17.9614C18.5608 17.8362 18.5874 17.702 18.5872 17.5665C18.5871 17.4311 18.5603 17.297 18.5083 17.1718C18.4562 17.0467 18.38 16.933 18.2841 16.8374L17.3117 15.865Z"/>
                                <path d="M4.67061 15.8649L3.69823 16.8373C3.60218 16.9329 3.52594 17.0466 3.47387 17.1717C3.4218 17.2968 3.39492 17.4309 3.39478 17.5665C3.39463 17.7021 3.42121 17.8363 3.47301 17.9615C3.52481 18.0868 3.60081 18.2005 3.69664 18.2964C3.79248 18.3922 3.90629 18.4682 4.03153 18.52C4.15677 18.5718 4.29101 18.5984 4.42654 18.5983C4.56208 18.5981 4.69625 18.5712 4.82138 18.5192C4.94652 18.4671 5.06016 18.3908 5.15578 18.2948L6.12818 17.3225C6.22417 17.2268 6.30035 17.1131 6.35237 16.9881C6.40439 16.8629 6.43123 16.7287 6.43134 16.5933C6.43146 16.4578 6.40486 16.3236 6.35306 16.1984C6.30126 16.0731 6.22529 15.9594 6.12947 15.8636C6.03366 15.7677 5.91989 15.6917 5.79467 15.6399C5.66947 15.5881 5.53528 15.5616 5.39977 15.5616C5.26427 15.5618 5.13013 15.5886 5.005 15.6407C4.87989 15.6926 4.76626 15.7688 4.67061 15.8649Z"/>
                                <path d="M4.67083 6.13905C4.76652 6.23488 4.88014 6.31093 5.00523 6.36283C5.1303 6.41473 5.26439 6.44148 5.3998 6.44154C5.53523 6.44159 5.66934 6.41496 5.79447 6.36316C5.91959 6.31137 6.03328 6.23542 6.12904 6.13966C6.2248 6.04391 6.30074 5.93021 6.35254 5.80509C6.40433 5.67996 6.43097 5.54585 6.43091 5.41043C6.43085 5.27501 6.4041 5.14092 6.3522 5.01585C6.3003 4.89077 6.22425 4.77714 6.12842 4.68146L5.15602 3.70906C5.06041 3.61291 4.94677 3.53658 4.82161 3.48443C4.69645 3.43229 4.56222 3.40534 4.42663 3.40515C4.29104 3.40497 4.15674 3.43153 4.03144 3.48333C3.90613 3.53514 3.79228 3.61115 3.6964 3.70703C3.60053 3.80291 3.52451 3.91676 3.47271 4.04207C3.4209 4.16738 3.39434 4.30167 3.39453 4.43726C3.39472 4.57286 3.42167 4.70708 3.47381 4.83224C3.52596 4.9574 3.6023 5.07104 3.69844 5.16665L4.67083 6.13905Z"/>
                            </svg>
                            <div className="dropdown-item-text">
                                Light
                            </div>
                        </Dropdown.Item>

                        <Dropdown.Item className="d-flex align-items-center" as="li" onClick={() => onClick('dark')}>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.476 5.48325C17.7303 5.48325 17.9364 5.27713 17.9364 5.02288C17.9364 4.76861 17.7303 4.5625 17.476 4.5625C17.2218 4.5625 17.0156 4.76861 17.0156 5.02288C17.0156 5.27713 17.2218 5.48325 17.476 5.48325Z"/>
                                <path d="M18.3969 9.1981C18.6512 9.1981 18.8572 8.99198 18.8572 8.73772C18.8572 8.48346 18.6512 8.27734 18.3969 8.27734C18.1426 8.27734 17.9365 8.48346 17.9365 8.73772C17.9365 8.99198 18.1426 9.1981 18.3969 9.1981Z"/>
                                <path d="M11.0304 19.3588C14.3862 19.3588 17.3638 17.1898 18.4401 14.0076C18.5058 13.8139 18.4352 13.5999 18.2674 13.4826C18.1002 13.3662 17.875 13.3733 17.7149 13.5019C16.7227 14.3017 15.5254 14.7243 14.2531 14.7243C11.2066 14.7243 8.69783 12.2462 8.69783 9.19978C8.69783 7.29488 9.69558 5.51708 11.3159 4.49605C11.4894 4.38678 11.5497 4.17504 11.4926 3.97812C11.436 3.7812 11.2354 3.64453 11.0304 3.64453C6.71482 3.64453 3.14258 7.18607 3.14258 11.5017C3.14258 15.8172 6.71482 19.3588 11.0304 19.3588Z"/>
                                <path d="M11.9516 7.35546C12.7132 7.35546 13.3327 7.97501 13.3327 8.73661C13.3327 8.99107 13.5387 9.19698 13.7931 9.19698C14.0476 9.19698 14.2535 8.99107 14.2535 8.73661C14.2535 7.97501 14.8731 7.35546 15.6346 7.35546C15.8891 7.35546 16.095 7.14955 16.095 6.89509C16.095 6.64062 15.8891 6.43471 15.6346 6.43471C14.8731 6.43471 14.2535 5.78446 14.2535 5.02288C14.2535 4.76841 14.0476 4.5625 13.7931 4.5625C13.5387 4.5625 13.3327 4.76841 13.3327 5.02288C13.3327 5.78446 12.7132 6.43471 11.9516 6.43471C11.6971 6.43471 11.4912 6.64062 11.4912 6.89509C11.4912 7.14955 11.6971 7.35546 11.9516 7.35546Z"/>
                            </svg>
                            <div className="dropdown-item-text">
                                Dark
                            </div>
                        </Dropdown.Item>

                        <Dropdown.Item className="d-flex align-items-center" as="li" onClick={() => onClick('system')}>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.231689 1.61738V11.9496C0.231689 12.7757 0.907548 13.4515 1.73359 13.4515H6.92994V15.8377H4.64385C3.9394 15.8377 3.36308 16.2982 3.36308 16.861V17.8844H16.6369V16.861C16.6369 16.2982 16.0606 15.8377 15.3561 15.8377H13.07V13.4515H18.2663C19.0923 13.4515 19.7681 12.7757 19.7681 11.9496V1.61738C19.7681 0.791337 19.0922 0.115479 18.2663 0.115479H1.73359C0.907548 0.115479 0.231689 0.791337 0.231689 1.61738ZM10.828 7.07641C11.1375 7.15553 11.4296 7.27807 11.6976 7.43693L12.7859 6.64897L13.6568 7.5198L12.8688 8.60825C13.0277 8.87619 13.1501 9.16833 13.2293 9.47771L14.5558 9.69001V10.2914H11.8196C11.8118 9.29309 11.0002 8.48606 9.99992 8.48606C8.99974 8.48606 8.18813 9.29309 8.18034 10.2914H5.44414V9.69001L6.77061 9.47762C6.84975 9.16824 6.9722 8.8761 7.13109 8.60825L6.34306 7.5198L7.21397 6.64897L8.30225 7.43693C8.57028 7.27798 8.86234 7.1555 9.1718 7.07641L9.3841 5.75005H10.6157L10.828 7.07641ZM13.7906 5.27606C13.3713 5.27606 13.0314 4.93618 13.0314 4.51689C13.0314 4.09761 13.3713 3.75773 13.7906 3.75773C14.2098 3.75773 14.5497 4.09761 14.5497 4.51689C14.5497 4.93618 14.2098 5.27606 13.7906 5.27606ZM1.48761 10.9216V1.57969C1.48761 1.46515 1.58136 1.3714 1.6959 1.3714H18.3039C18.4185 1.3714 18.5122 1.46515 18.5122 1.57969V10.9216C12.8374 10.9216 7.16249 10.9216 1.48761 10.9216Z"/>
                            </svg>

                            <div className="dropdown-item-text">
                                System
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>

            <Nav.Item>
                <Dropdown>
                    <Dropdown.Toggle className='border-0 profile-nav' variant="transparent">
                        <div className="profile">
                            <div className="profile-text d-none d-lg-block">
                                <span className='greetings'>Hi</span>, Nazmul
                            </div>
                            <div className="avatar">
                                <img src={avatar} alt={'Nazmul'} />
                            </div>
                        </div>
                    </Dropdown.Toggle>
                </Dropdown>
            </Nav.Item>
        </Nav>
    )
}

export default NavbarDropdown