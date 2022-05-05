import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteBlog, listBlog, selectBlog } from '../../../../../action';

const Datatable = (props) => {

  const handleDelete = (id) => {
    props.deleteBlog(id, props.token);
    props.listBlog();
  };

  useEffect(() => {
    props.listBlog();
  }, [props.list]);

  console.log(props);


  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/card/view" style={{ textDecoration: 'none' }}>
              <div className="viewButton" onClick={() => props.selectBlog(params.row)}>View</div>
            </Link>
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
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Card
        <Link to="/admin/card/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={props.list}
        getRowId={row => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.blogList,
    token: state.token,
  };

};

export default connect(mapStateToProps, { listBlog, deleteBlog, selectBlog })(Datatable);
