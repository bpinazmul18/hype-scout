import React from 'react'
import Form from "../components/common/Form";
import { fetchProfiles } from "../services/profiles";
import {Button} from "react-bootstrap";

class Dashboard extends Form {
    state = {
        data: {
            influencersIndustry: '',
            influencersCountry: '',
            audiencesCountry: '',
            influencersSocialMediaPlatform: '',
            influencersFollowers: '',
            influencersGender: ''
        },
        profiles: [],
        errors: {}
    }

    async componentDidMount () {
        const profiles = await fetchProfiles()
        console.log(profiles)
        this.setState({ profiles: profiles.data })
    }

    doSubmit = async () => {
        // calling the api
    }


    render () {
        return (
            <div className="text-light d-none">
                <div className="search-panel">
                    <div className="profile-count">
                        Profile {this.state.profiles.length}
                    </div>

                    <div className="profile-search">

                    </div>

                    <div className="advanced-filter">
                        <Button variant="primary">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.45645V2.5C1 1.67157 1.67157 1 2.5 1H17.5C18.3284 1 19 1.67157 19 2.5V4.45645C19 5.11829 18.7086 5.74656 18.2034 6.17407L12.677 10.8502C12.5648 10.9452 12.5 11.0848 12.5 11.2319V17.7169C12.5 17.8925 12.4079 18.0553 12.2572 18.1457L8.25725 20.5457C7.92399 20.7456 7.5 20.5056 7.5 20.1169V11.2319C7.5 11.0848 7.43525 10.9452 7.32297 10.8502L1.79663 6.17407C1.29139 5.74656 1 5.11829 1 4.45645Z" stroke="white" strokeWidth="1.5"/>
                            </svg>
                            Advance Filter
                        </Button>
                    </div>
                </div>
                <div>Profiles</div>
                <div>Pagination</div>
            </div>
        )
    }
}

export default Dashboard