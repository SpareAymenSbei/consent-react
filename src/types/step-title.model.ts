export interface StepTitleModel{
    title:string
    description:string
}
const stepTitleList:StepTitleModel[] = [
    {
        title: 'Select the Bank you giving access to',
        description: 'After selecting the Bank we will transfer you securely to your banking app to authenticate the connection'
    },
    {
        title: 'We need your permissions',
        description: 'Your security is our priority. In order for us to offer this service, we need your permission to access the following account information.'
    },
    {
        title: 'Account(s) connected',
        description: '',
    }
];
export default stepTitleList