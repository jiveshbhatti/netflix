import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import {Link} from 'react-router-dom'
import { logout } from "../../authContext/AuthActions";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to='/'className='link'>
          <span>Homepage</span>
          </Link>
          <Link to='/series' className='link'> 
          <span>Series</span>
          </Link>
          <Link to='/movies'className='link'>
          <span>Movies</span>
          </Link>
          {/* <Link to='/'className='link'>
          <span>New and Popular</span>
          </Link> */}
          {/* <Link to='/'className='link'>
          <span>My List</span>
          </Link> */}
        </div>
        <div className="right">
          <Search className="icon" />
          {/* <span>KIDS</span> */}
          <Notifications className="icon" />
          <img
            src="https://i.imgur.com/vsMezLR.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={()=> dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
