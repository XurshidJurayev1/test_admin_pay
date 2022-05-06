import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteUser, listUsers, selectSingle } from '../../../../../action';

const Datatable = (props) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    props.deleteUser(id);
    props.listUsers();
    listRender();
  };

  const listRender = () => {
    props.listUsers();
  };


  useEffect(() => {
    listRender();
  }, []);


  console.log(props);

  const select = (params) => {

    props.selectSingle(params.row);
    navigate('/admin/users/view');
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">

            <div className="viewButton" onClick={() => select(params)}>View</div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
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
      <div className="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users list
        <Link to="/admin/users/new" className="link">
          Add New
        </Link>
      </div>
      {/* {
        data.lenght > 0 ?  */}
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
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
    list: state.userList,
    token: state.token,
    user: state.user,
  };
};

export default connect(mapStateToProps, { listUsers, selectSingle, deleteUser })(Datatable);
