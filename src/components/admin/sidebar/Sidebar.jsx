import './sidebar.scss';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PanoramaPhotosphereIcon from '@mui/icons-material/PanoramaPhotosphere';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { connect } from 'react-redux';
import { logoutUser } from '../../../action';

const Sidebar = (props) => {
  const { dispatch, sidebar } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [slider1, setSlider1] = useState(false);
  const [card1, setCard1] = useState(window.innerWidth);
  const [userDiv, setUserDiv] = useState(window.innerWidth);
  // const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
      func();
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);

    };
  }, []);


  const func = () => {
    if (width > 990) {
      return null;
    } else {
      return dispatch({ type: 'CLOSE_SIDE' });
    }
  };


  const active = {
    transform: 'translateX(0px)',
  };

  const unactive = {
    transform: 'translateX(-200px)',
  };

  const logout = () => {
    navigate('/login');
    props.logoutUser();
  };


  return (
    <div className="sidebar" style={sidebar ? active : unactive}>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">AsiaPay</span>
        </Link>
        <div className="close-btn">
          <CloseIcon className="icon" onClick={() => dispatch({ type: 'CLOSE_SIDE' })} />
        </div>
      </div>
      <hr style={{ margin: '0px' }} />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>


          <p className="title">LISTS</p>

          <Link to="/admin/users/list" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/slider/list" style={{ textDecoration: 'none' }}>
            <li>
              <PanoramaPhotosphereIcon className="icon" />
              <span>SLIDER</span>
            </li>
          </Link>
          <Link to="/admin/card/list" style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>CARD</span>
            </li>
          </Link>

          {/* <Link  style={{ textDecoration: 'none' }}> */}
          {/*<li>*/}
          {/*  <StoreIcon className="icon" />*/}
          {/*  <span>Products</span>*/}
          {/*</li>*/}
          {/* </Link> */}
          {/*<li>*/}
          {/*  <CreditCardIcon className="icon" />*/}
          {/*  <span>Orders</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <LocalShippingIcon className="icon" />*/}
          {/*  <span>Delivery</span>*/}
          {/*</li>*/}
          {/*<p className="title">USEFUL</p>*/}
          {/*<li>*/}
          {/*  <InsertChartIcon className="icon" />*/}
          {/*  <span>Stats</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NotificationsNoneIcon className="icon" />*/}
          {/*  <span>Notifications</span>*/}
          {/*</li>*/}
          {/*<p className="title">SERVICE</p>*/}
          {/*<li>*/}
          {/*  <SettingsSystemDaydreamOutlinedIcon className="icon" />*/}
          {/*  <span>System Health</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <PsychologyOutlinedIcon className="icon" />*/}
          {/*  <span>Logs</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <SettingsApplicationsIcon className="icon" />*/}
          {/*  <span>Settings</span>*/}
          {/*</li>*/}
          <p className="title">USER</p>
          <Link to="/admin/profile">
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        />
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { logoutUser })(Sidebar);
