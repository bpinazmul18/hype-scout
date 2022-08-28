import { SocialsProps } from './SocialItem'

export interface ProfileItemProps {
    id: number,
    name: string,
    location: string,
    joiningDate: string,
    socials: SocialsProps[],
    profileImage: string,
    followers: string,
    categoryName: string,
    gender: string
}