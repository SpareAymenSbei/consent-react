import classes from './Header.module.scss';
import logo from '../../assets/logo.png'
import  {BiArrowBack} from 'react-icons/bi'
function Header() {
  return (
    <div className={classes.header}>
     <BiArrowBack className={classes.icon}/>
      <div className={classes.imgHolder}>
        <img src={logo} alt="logo" />
      </div>
      <div></div>
    </div>
  )
}

export default Header