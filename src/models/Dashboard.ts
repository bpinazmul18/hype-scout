import React from 'react'

interface Data {
    influencersIndustry: string,
    influencersCountry: string,
    audiencesCountry: string,
    influencersSocialMediaPlatform: string,
    influencersFollowers: string,
    influencersGender: string
}

interface Socials {
    pid: number,
    socialLink: string,
    icon: React.ReactNode
}

interface Profile {
    id: number,
    profileImage: string,
    name: string,
    location: string,
    joiningDate: string,
    socials: Socials[],
    followers: string,
    categoryName: string,
    gender: string
}

export interface DashboardState {
    data: Data,
    profiles: Profile[],
    errors: string,
    searchQuery: string
}