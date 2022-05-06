import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import './users.scss';
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../../action';


const initialstate = {
  email: '',
  password: '',
};

const Login = (props) => {
  const container = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(initialstate);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      animationData: require('../svg/login.json'),
      loop: true,
    });
  }, []);


  const submit = (e) => {
    e.preventDefault();
    props.loginAction(user);

    // if(props.user.role === 'admin' || props.user.role === 1){
    //   navigate('/admin')
    // }else if(props.user.role === "subscripte" || props.user.role === 0){
    //   navigate('/')
    // }else{
    //   return 
    // }

  };


  console.log(props);

  useEffect(() => {
    if (props.user.role === 'admin') {
      navigate('/admin');
    } else if (props.user.role === 'subscripte') {
      navigate('/');
    }
    // if (props.user.length > 0) {
    //   switch (props.role[0]) {
    //     case 'admin' :
    //       return navigate('/admin')
    //     case 'subscripte'  :
    //       return navigate('/')
    //     default:
    //       return null;
    //   }
    // } else {
    //   return null;
    // }
  }, [props.user]);


  return (
    <div className="login">
      <div className="container">
        <h2 className="login__title-signin">
          Войти
        </h2>
        <div className="row">

          <div className="col-6 login__flex">

            <form onSubmit={submit}>

              <MDBInput
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="mb-4" type="email" id="form1Example1" label="Email address" />
              <MDBInput
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="mb-4" type="password" id="form1Example2" label="Password" />
              <MDBBtn className="login__form-btn important_btn" type="submit" block>
                Войти
              </MDBBtn>
              <Link to="/register" className="btn btn-success mt-2 important_btn">Регистация ?</Link>

            </form>
          </div>
          <div className="col-6">
            <div className="login__svg" ref={container}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user,
  };
};


export default connect(mapStateToProps, { loginAction })(Login);
