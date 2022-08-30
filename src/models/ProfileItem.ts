import { SocialsProps } from './SocialItem'

export interface ProfileItemProps {
    id: number,
    name: string,
    location: string,
    joiningDate: string,
    socials: SocialsProps[],
    profileImage: string,
    followers: number,
    categoryName: string,
    gender: string
}

// const user: ProfileItemProps[] = [
//     {
//         id: 1,
//         name: 'st',
//         location: 'ld',
//         joiningDate: 'dfjdkj',
//         socials: [
//             { 
//                 pid: 1,
//                 socialLink: 'kjkj',
//                 icon: 'dkfjk'
//             }
//         ],
//         profileImage: 'dkfjkd',
//         followers: 1,
//         categoryName: 'dkfj',
//         gender: 'dfjdk'
//     }
// ]