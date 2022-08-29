import React from 'react'
import { Col, Nav } from 'react-bootstrap'
import SocialItem from './common/SocialItem'
import { ProfileItemProps } from '../models/ProfileItem'

const ProfileItem: React.FC<ProfileItemProps> = ({ id, name, location, joiningDate, socials, profileImage, followers, categoryName, gender }) => {
    return (
        <Col md="6" lg="4" key={id}>
            <div className="profile-item text-center my-3">
                <div className="profile-item-wrap">
                    <div className="profile-item-img-wrap">
                        <img className="img-fluid rounded-pill" src={profileImage} alt={name}/>
                    </div>
                </div>
                <div className="profile-item-info">
                    <h3 className="mb-2">{name}</h3>

                    <div className="location d-flex align-items-center justify-content-center mb-2">
                        <i className="icon-location"></i>
                        <small className="location-name ms-2">
                            {location}
                        </small>
                    </div>

                    <div className="joining-date-wrapper d-flex align-items-center justify-content-center mb-4">
                        <i className="icon-clock"></i>
                        <small className="joining-date ms-2">
                            {joiningDate}
                        </small>
                    </div>

                    <Nav className="justify-content-center my-4">
                        {socials.map((social) => {
                            return (
                                <SocialItem key={social.pid} href={social.socialLink} iconName={social.icon}/>
                            )
                        })}
                    </Nav>

                    <div className="profile-footer d-flex align-items-center justify-content-center pt-2">
                        <div className="widget p-2">
                            <div className="widget-value">
                                {followers}k
                            </div>

                            <div className="widget-title">
                                Follwers
                            </div>
                        </div>

                        <div className="widget p-2">
                            <div className="widget-value">
                                {categoryName}
                            </div>

                            <div className="widget-title">
                                Category
                            </div>
                        </div>

                        <div className="widget p-2">
                            <div className="widget-value">
                                {gender}
                            </div>

                            <div className="widget-title">
                                Gender
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProfileItem