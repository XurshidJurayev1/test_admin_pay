import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAdmin } from '../../../../action';
import { ImageApi } from '../../../../Api/ImageApi';

const ProfileEdit = (props) => {
  const navigate = useNavigate();
  const user = props.user;
  const [file, setFile] = useState('');
  const [first_name, setFirst_name] = useState(user.name);
  const [login, setLogin] = useState(user.email);
  const [password, setPassword] = useState('');

  console.log(props);

  const submit = (e) => {
    e.preventDefault();

    const formdate = new FormData();

    formdate.append('file', file);
    formdate.append('name', first_name);
    formdate.append('password', password);

    props.updateAdmin(formdate, props.token);
    navigate('/admin/profile');

  };

  return (
    <div className="new">
      <div className="top">
        <h1>Profile Edit</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              !file
                ? `${ImageApi}${user.image_path}`
                : URL.createObjectURL(file)
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={submit}>
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
              <label>First Name</label>
              <input
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                type="text"
                placeholder="Your First Name" />
            </div>
            <div className="formInput">
              <label>Login</label>
              <input
                disabled
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text"
                placeholder="Your Login" />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Your Password" />
            </div>


            <button className="edit_btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    update: state.adminUpdate,
    token: state.token,
  };
};

export default connect(mapStateToProps, { updateAdmin })(ProfileEdit);
