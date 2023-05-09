import classes from './Header.module.scss';
import logo from '../../assets/logo.png'
import  {BiArrowBack} from 'react-icons/bi'
import { useContext } from 'react';
import { StepContext } from '../../context/step-context';
function Header() {
  const ctx = useContext(StepContext);
  const step = ctx.stepCount;
  return (
    <div className={classes.header}>
     { step===1 && <BiArrowBack className={classes.icon} onClick={ctx.prevStep}/>}
      <div className={classes.imgHolder} >
        <img src={logo} alt="logo" />
      </div>
      <div></div>
    </div>
  )
}

export default Header