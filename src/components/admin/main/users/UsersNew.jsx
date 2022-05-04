import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../../../../action';
import { useNavigate } from 'react-router-dom';


const initialstate = {
  name: '',
  password: 'email',
  email: '',
};

const UserNew = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialstate);
  const [file, setFile] = useState('');


  const submit = () => {
    const formdata = new FormData();

    formdata.append('file', file);
    formdata.append('name', user.name);
    formdata.append('email', user.email);
    formdata.append('password', user.password);

    props.registerAction(formdata);

    navigate('/admin/users/list');


  };


  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              <div className="formInput">
                <label>Your name</label>
                <input type="text" placeholder="Your  name" value={user.name}
                       onChange={(e) => setUser({ ...user, name: e.target.value })} />
              </div>
              <div className="formInput">
                <label>Your email</label>
                <input type="email" placeholder="Your email" value={user.email}
                       onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className="formInput">
                <label>password</label>
                <input type="password" placeholder="password" value={user.password}
                       onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>

              <button type="button" onClick={submit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { registerAction })(UserNew);
