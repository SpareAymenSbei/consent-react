import gear from '../assets/infoImages/account-details.svg';
import transaction from '../assets/infoImages/transfers.svg';
import features from '../assets/infoImages/features.svg';
import info from '../assets/infoImages/information.svg';
export default interface AuthItemModel {
    imgUrl: string
    title: string
    description: string
}

export const DUMMY_AUTH_ITEMS: AuthItemModel[] = [
    {
        title: 'Your account details',
        description: 'This includes your account name, account details and balance',
        imgUrl: gear
    },
    {
        title: 'Your transactions',
        description: `
            This includes your account's incoming/outgoing
            transactions from the past 6 months (or more, if
            available) along with any regular payments
        `,
        imgUrl: transaction
    },
    {
        title: 'Your account features and benefits',
        description: `
            This includes the type of account you have, any
            fees charges and interest you pay, as well as any benefits,
            and interest your account offers
        `,
        imgUrl: features
    },
    {
        title: 'How will we use your account::information?',
        description: `
            No third parties or apps will ever have access to 
            your information, Spare will never store or share
            your sensitive data, and that data is protected
            using the highest levels of encryption. You may
            revoke or renew this consent at any time from the 
            Spare app, or directly from your bank account
        `,
        imgUrl: info
    }
]