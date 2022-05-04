import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import logo from '../../../images/PayMe_Logo.png';
import './navbar.scss';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
} from 'mdb-react-ui-kit';
import { connect } from 'react-redux';
import Api from '../../../Api';

const Navbar = (props) => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div className="nav__top">
      <MDBNavbar className="fixed-top" expand="lg" light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img className="navbar__logo" src={logo} alt="" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/">
                  Домой
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/about">
                  О нас
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/blog">
                  Новости
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/contact">
                  Контакты
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/vokansi">
                  Ваканси
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/paymet">
                  Оплата
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link nabar__link nabar__link-cursor"
                  >
                    Ru
                    <i className="fas fa-language"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>UZ</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>EN</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            {
              props.user.role ?
                <MDBNavbarItem className="nabar__item d-flex user_name">
                  <Link to='/profile'>
                    <h6>
                      {props.user.name}
                    </h6>
                    <img src={
                      props.user.image_path
                        ? URL.createObjectURL(props.user.image_path)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                    alt={props.user.image_name} className="navbar-avatar-style" />
                  </Link>
                </MDBNavbarItem>
                :
                <MDBNavbarItem className="nabar__item d-flex">
                  <Link className="nabar__link nav-link" to="/login">
                    Войти
                  </Link>
                  <Link className="nabar__link nav-link" to="/register">
                    Регистация
                  </Link>
                </MDBNavbarItem>
            }
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Navbar);
