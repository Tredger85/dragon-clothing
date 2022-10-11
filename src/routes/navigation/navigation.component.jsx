import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/test'> TEST </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/test2'> TEST2 </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/test3'> TEST3 </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/sign-in'> SIGN-IN </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation
