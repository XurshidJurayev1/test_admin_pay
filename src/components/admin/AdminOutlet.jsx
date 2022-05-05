import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import './AdminOutlet.scss';
import Widget from './widget/Widget';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { listCard, listSlider, listUsers } from '../../action';

const AdminOutlet = (props) => {
  const { sidebar } = useContext(DarkModeContext);
  const [width, setWidth] = useState(window.innerWidth);

  const geters = () => {
    props.listUsers();
    props.listCard();
    props.listSlider();
  };


  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);
    };
    geters();
  }, []);


  return (
    <div className="admin">
      <Sidebar />
      <div className={sidebar && width > 990 ? 'homeContainer activeDesk' : 'homeContainer'}>
        <Navbar />
        <div className="widgets">
          <Widget type="user" users={props.users} />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.userList,
  };
};

export default connect(mapStateToProps, { listUsers, listCard, listSlider })(AdminOutlet);
