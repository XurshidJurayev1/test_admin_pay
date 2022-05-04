import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { connect } from "react-redux";
import { MenuItem, Select } from "@mui/material";
import {updateUser}  from '../../../../action'




const UserEdit = (props) => {
  const initialState = {
    name: props.user.name,
    email: props.user.email,
    password: '',
    file: '',
    role: props.user.role,
    _id: props.user._id
  }
  const [user, setUser] = useState(initialState);;


  const submit = (e) => {
    e.preventDefault()
    props.updateUser(user, props.token)
  }

  console.log(props);

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>User Edit</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
                src={
                  user.file
                  ? URL.createObjectURL(user.file)
                  : `https://server-asiapay.herokuapp.com/${props.user.image_path}`
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
                  onChange={(e) => setUser({...user, file: e.target.files[0]})}
                  style={{ display: "none" }}
                />
              </div>
              <div className="inputColumn">
                <div className="formInput" >
                  <label>Name</label>
                  <input 
                    type='text' 
                    placeholder='Please write name' 
                    value={user.name}
                    onChange={(e)=>setUser({...user, name: e.target.value})}/>
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <input 
                    type='text' 
                    disabled='true'
                    placeholder='Please write email' 
                    value={user.email}
                    onChange={(e)=>setUser({...user, email: e.target.value})}/>
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input 
                    type='password' 
                    placeholder='Please write password' 
                    value={user.password}
                    onChange={(e)=>setUser({...user, password: e.target.value})}/>
                </div>
                <div className="formInput" >
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={user.role}
                    label="Age"
                    onChange={(e)=>setUser({...user, role: e.target.value})}
                  >
                    <MenuItem value='admin'>admin</MenuItem>
                    <MenuItem value='subscripte'>subscripte</MenuItem>
                  </Select>
                   
                </div>
                <div>
                  <button type='submit'>Send</button>
                </div>
              </div>
              
                
            </form>
          </div>
        </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.singleUser,
    token: state.token, 
    update: state.updateUserRed,
  }
}

export default connect(mapStateToProps, {updateUser})(UserEdit);
