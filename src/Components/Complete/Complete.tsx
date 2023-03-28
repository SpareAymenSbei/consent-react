import Button from '../Button/Button';
import Classes from './Complete.module.scss';
import checkImg from '../../assets/check.svg'
import { useContext } from 'react';
import { StepContext } from '../../context/step-context';
function Complete() {
  const ctx = useContext(StepContext);
  return (
    <div className={Classes.complete}>
      <div className={Classes.title}>Thank you</div>
      <img src={checkImg} className='shadow' alt="check" />
      <div className={Classes.desc}> We have received the requested information
        <br />
        from your selected accounts
      </div>
      <div className={Classes.btn}>
        <Button title='Continue' />
        <Button title='Back' type='secondary' onClick={ctx.prevStep} />
      </div>
    </div>
  )
}

export default Complete