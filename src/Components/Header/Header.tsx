import classes from './Header.module.scss';
import logo from '../../assets/logo.png'
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.imgHolder}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header