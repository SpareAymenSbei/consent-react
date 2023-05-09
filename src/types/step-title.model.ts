export interface StepTitleModel{
    title:string
    description:string
}
const stepTitleList:StepTitleModel[] = [
    {
        title: 'Select the Bank',
        description: 'Select the bank you are giving access to after selecting the Bank we will transfer you securely, to your banking app to authenticate this connection.'
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