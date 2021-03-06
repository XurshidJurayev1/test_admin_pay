import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import './view.scss';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useNavigate } from 'react-router-dom';

const UserView = (props) => {
  const navigate = useNavigate();
  const user = props.user;
  console.log(user);
  console.log(user.status);
  return (
    <div className="view">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            {/*<Link to="/admin/users/edit">*/}
            {/*  <div className="editButton">Edit</div>*/}
            {/*</Link>*/}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  user.image_path
                    ? `https://server-asiapay.herokuapp.com/${user.image_path}`
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">role:</span>
                  <span className="itemValue">{user.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">status:</span>
                  <span className="itemValue">
                    <RadioButtonCheckedIcon sx={user.status ? { color: 'green' } : { color: 'red' }} />
                    {`${user.status}`}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">status Toggle:</span>
                  {user.status_toggle === 1 ?
                    <span className="itemValue">
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                      {`${user.status_toggle}`}
                    </span>
                    :
                    <span className="itemValue">
                    <BlockIcon sx={{ color: 'red' }} />
                      {`${user.status_toggle}`}
                    </span>
                  }
                </div>


                <button
                  style={{
                    marginTop: '20px',
                  }}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/admin/users/list')}> Back to
                  users list
                </button>

                {/*<div className="detailItem">*/}
                {/*  <span className="itemKey">Country:</span>*/}
                {/*  <span className="itemValue">UZB</span>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.singleUser,
  };
};

export default connect(mapStateToProps, {})(UserView);
