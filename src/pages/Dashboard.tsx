import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

import Form from '../components/common/Form'
import SearchBox from '../components/common/SearchBox'
import ProfileItem from '../components/ProfileItem'
import MyPagination from '../components/common/Pagination'

import { DashboardState } from '../models/Dashboard'
import { profiles } from '../fakeData'

class Dashboard extends Form {
    state: DashboardState = {
        data: {
            influencersIndustry: '',
            influencersCountry: '',
            audiencesCountry: '',
            influencersSocialMediaPlatform: '',
            influencersFollowers: '',
            influencersGender: ''
        },
        profiles: [],
        errors: '',
        searchQuery: '',
        currentPage: 1,
        profilesPerPage: 6
    }

    async componentDidMount () {
        this.setState({ profiles })
    }

    doSubmit = async () => {
        // calling the api
    }

    handleSearch = (query: string) => {
        this.setState({ searchQuery: query })
    }

    handlePaginate = (page: number) => {
        this.setState({ currentPage: page })
    }

    handlePrev = () => {
        this.setState({ currentPage: this.state.currentPage - 1 })
    }

    handleNext = () => {
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    getPagedData = () => {
        const { profilesPerPage, currentPage, profiles, searchQuery} = this.state
        let filtered = profiles

        // Searching
        if (searchQuery)
            filtered = profiles.filter(m => m.name.toLowerCase().startsWith(searchQuery.toLowerCase()))

        // pagination
        const indexOfLastProfile = currentPage * profilesPerPage
        const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
        const _profile = filtered.slice(indexOfFirstProfile, indexOfLastProfile)

        return { totalCount: filtered.length, data: _profile}
    }


    render () {
        const { searchQuery, profilesPerPage, currentPage } = this.state
        const { data, totalCount } = this.getPagedData()

        return (
            <div className="dashboard-page">
                <section className="search-section mb-5">
                    <div className="section-inner">
                        <Container>
                            <div className="search-panel d-flex align-items-center flex-column flex-md-row">
                                <div className="profile-count align-self-start align-self-md-center py-3 py-md-0 pe-0 pe-md-5">
                                    Profile ({totalCount})
                                </div>

                                <div className="profile-search flex-grow-1 py-3 py-md-0 px-0 px-md-3">
                                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                                </div>

                                <div className="profile-filter py-3 py-md-0 ps-0 ps-md-3">
                                    <Button variant="primary" size="lg">
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4.45645V2.5C1 1.67157 1.67157 1 2.5 1H17.5C18.3284 1 19 1.67157 19 2.5V4.45645C19 5.11829 18.7086 5.74656 18.2034 6.17407L12.677 10.8502C12.5648 10.9452 12.5 11.0848 12.5 11.2319V17.7169C12.5 17.8925 12.4079 18.0553 12.2572 18.1457L8.25725 20.5457C7.92399 20.7456 7.5 20.5056 7.5 20.1169V11.2319C7.5 11.0848 7.43525 10.9452 7.32297 10.8502L1.79663 6.17407C1.29139 5.74656 1 5.11829 1 4.45645Z" stroke="white" strokeWidth="1.5"/>
                                        </svg>
                                        <span className="ps-2">
                                            Advance Filter
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="profiles-section">
                    <div className="section-inner">
                        <Container>
                            <Row>
                                {
                                    data.map((profile) => {
                                        return (
                                            <ProfileItem key={profile.id} {...profile} followers={parseInt(profile.followers)}/>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>
                </section>

                <section className="pagination-section pt-4">
                    <div className="section-inner">
                        <Container>
                             <MyPagination currentPage={currentPage} profilesPerPage={profilesPerPage} totalProfile={totalCount} paginate={this.handlePaginate} onPrev={this.handlePrev} onNext={this.handleNext}/>
                        </Container>
                    </div>
                </section>
            </div>

        )
    }
}

export default Dashboard
