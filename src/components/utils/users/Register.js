import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import './users.scss';
import {
  MDBInput,
  MDBBtn,
  MDBFile,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAction } from '../../../action';


const initialstate = {
  name: '',
  password: '',
  email: '',
  file: '',
};
const Register = (props) => {
  const navigate = useNavigate();
  const container = useRef(null);
  const [user, setUser] = useState(initialstate);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      animationData: require('../svg/register.json'),
      loop: true,
    });
  }, []);


  const submit = (e) => {
    e.preventDefault();
    const formadata = new FormData();
    formadata.append('file', user.file);
    formadata.append('name', user.name);
    formadata.append('email', user.email);
    formadata.append('password', user.password);
    // if (user.file) {
    props.registerAction(formadata);
    navigate('/login');
    // } else {
    //   window.alert('Please select image');
    // }
  };

  console.log(props);
  console.log(user);


  return (
    <div className="login">
      <div className="container">
        <h2 className="login__title">
          Регистация
        </h2>
        <div className="row">

          <div className="col-6 login__flex">

            <form onSubmit={submit}>

              <MDBInput
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="mb-4" type="text" id="form1Example2" label="Name" />
              {/*<MDBFile*/}
              {/*  required={true}*/}
              {/*  onChange={(e) => setUser({ ...user, file: e.target.files[0] })}*/}
              {/*  label="Avatar" id="customFile" className="mb-4" />*/}
              <MDBInput
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="mb-4" type="email" id="form1Example1" label="Email address" />
              <MDBInput
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="mb-4" type="password" id="form1Example4" label="Password" />
              <MDBBtn className="login__form-btn important_btn" type="submit" block>
                зарегистрироватся
              </MDBBtn>
              <Link to="/login" className="btn btn-success mt-2 important_btn">Войти</Link>

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
    reg: state.register,
  };
};

export default connect(mapStateToProps, { registerAction })(Register);
