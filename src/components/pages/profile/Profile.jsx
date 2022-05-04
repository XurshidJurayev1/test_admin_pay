import "./Profile.scss";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logoutUser} from '../../../action'


const Profile = (props) => {
    const navigate = useNavigate()


    const logout = (e) => {
        e.preventDefault()
        props.logoutUser()

        navigate('/')

    }
    console.log(props.user);

  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={
                    props.user.image_path
                    ? URL.createObjectURL(props.user.image_path)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                alt={props.user.image_name}
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{props.user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{props.user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <div className="detailItem">
                    <button className="btn-danger log-btn" onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {logoutUser})(Profile);
