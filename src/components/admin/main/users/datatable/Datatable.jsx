import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {listUsers, selectSingle} from '../../../../../action'

const Datatable = (props) => {
  const navigate = useNavigate()
  const [data, setData] = useState(props.list);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const listRender = () => {
    props.listUsers()
    setData(props.list)
  }
  
  
  useEffect(()=>{
    listRender()
  },[]) 

  console.log(data);

  console.log(props);

  const select = (params) => {
    
    props.selectSingle(params.row)
    navigate('/admin/users/view')
  } 

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton" onClick={()=>select(params)}>View</div>
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const loader = () => {
    return (
      <div className='text-center'>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>  
    )
  }


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/users/new" className="link">
          Add New
        </Link>
      </div>
      {/* {
        data.lenght > 0 ?  */}
          <DataGrid
            className="datagrid"
            getRowId={(row)=> row._id}
            rows={props.list}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            // loading
            // {...data}
          />
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      list: state.userList
  }
 }

export default connect(mapStateToProps, {listUsers, selectSingle})(Datatable);
