import { useContext } from 'react';
import { StepContext } from '../../context/step-context';
import Button from '../Button/Button';
import Classes from './Authentication.module.scss';
import AuthItems from './AuthItems/AuthItems';

function Authentication() {
  const ctx = useContext(StepContext);
  const formatter = new Intl.DateTimeFormat('fr-Fr', {
    dateStyle: 'short'
  });

  const startDate = `You are sharing your data from ${formatter.format(new Date())}`;
  const endDate = `We will access your data until ${formatter.format(setEndDate(new Date()))}`;

  // set endDate 1 year and 1 day from current date (startDate)
  function setEndDate(date: Date) {
    date.setFullYear(date.getFullYear() + 1);
    date.setDate(date.getDate() + 1);
    return date;
  }

  return (
    <div className={Classes.auth}>
      <AuthItems />
      <div className={Classes.dates}>
        <div className={Classes.start_date}>{startDate}</div>
        <div className={Classes.end_date}>{endDate}</div>
      </div>
      <div className={Classes.info}>
        Continue to your Bahrain National Bank application to share your <br />
        account information under these terms.
      </div>
      <div style={{display:'flex' , justifyContent : 'center'}}>
        <Button title='Confirm' style={{
          margin: '2rem 0',
          width: 'calc(70% - 1rem)',
          padding:'1rem 0'
        }} onClick={ctx.nextStep} />
      </div>
    </div>
  )
}

export default Authentication