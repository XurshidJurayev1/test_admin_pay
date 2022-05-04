import React, { useContext, useEffect, useState } from 'react';
import './components/pages/App.scss';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Login from './components/utils/users/Login';
import Register from './components/utils/users/Register';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


import Layout from './components/pages/Layout';
import Main from './components/pages/main/Main';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Notfoundpage from './components/pages/404/NotFoundpage';
import Vokansi from './components/pages/vokanse/Vokansi';
import Blog from './components/pages/blog/Blog';
import Payment from './components/pages/payment/Payment';
import Scrolltop from './components/pages/layouts/ScrollTop';
import AdminOutlet from './components/admin/AdminOutlet';
import { DarkModeContext } from './context/darkModeContext';
import UsersList from './components/admin/main/users/UsersList';
import UsersNew from './components/admin/main/users/UsersNew';
import Profile from './components/pages/profile/Profile';
import { connect } from 'react-redux';
import UserView from './components/admin/main/users/UserView';
import UserEdit from './components/admin/main/users/UserEdit';
import CardList from './components/admin/main/card/List';
import CardNew from './components/admin/main/card/New';
import CardSingle from './components/admin/main/card/Single';
import CardEdit from './components/admin/main/card/Edit';


const App = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const [admin, setAdmin] = useState(false);


  const func = () => {
    if (props.user.role) {
      switch (props.user.role) {
        case 'admin' || 10 :
          return setAdmin(true);
        default:
          return null;
      }
    } else {
      return null;
    }

  };

  useEffect(() => {
    func();
    console.log(props);

  }, [props.user]);

  // if(props.user.role === 'admin'){
  //   setAdmin(true)
  // }else {
  //   setAdmin(false)
  // }
  // console.log(props);
  console.log(darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Scrolltop />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vokansi" element={<Vokansi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/paymet" element={<Payment />} />

          {/* ---- Profile ---- */}
          <Route path="/profile" element={<Profile />} />


        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Notfoundpage />} />


        {/* ---- admin routes ---- */}
        {
          admin &&
          <Route path="/admin/*" element={<AdminOutlet />}>
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route path="list" element={<UsersList />} />
              <Route path="new" element={<UsersNew />} />
              <Route path="view" element={<UserView />} />
              <Route path="edit" element={<UserEdit />} />

            </Route>
            <Route path="card">
              <Route path="list" element={<CardList />} />
              <Route path="new" element={<CardNew />} />
              <Route path="view" element={<CardSingle />} />
              <Route path="edit" element={<CardEdit />} />

            </Route>
            <Route path="slider">
              <Route path="list" element={<CardList />} />
              <Route path="new" element={<CardNew />} />
              <Route path="view" element={<CardSingle />} />
              <Route path="edit" element={<CardEdit />} />

            </Route>
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        }


      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
