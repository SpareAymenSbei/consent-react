import bbkImg from '../assets/mock/BBK.png';
import BisBImg from '../assets/mock/BisB.png';
import ithmaarBankImg from '../assets/mock/ithmaar-logo.png';
import salamBankImg from '../assets/mock/Al-Salam-Bank-Logo.jpg';
export default interface Bank {
    id:number
    img: string
    name: string
}

export const DUMMY_BANKS: Bank[] = [
    {
        id:1,
        img: bbkImg,
        name: 'BBK'
    },
    {
        id:2,
        img: BisBImg,
        name: 'BisB'
    },
    {
        id:3,
        img: ithmaarBankImg,
        name: 'Ithmaar Bank'
    },
    {
        id:4,
        img: salamBankImg,
        name: 'Al Salam Bank'
    }
]