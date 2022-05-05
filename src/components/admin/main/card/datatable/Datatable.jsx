import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteCard, listCard, selectCard } from '../../../../../action';

const Datatable = (props) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    props.deleteCard(id, props.token);
    props.listCard();
  };

  useEffect(() => {
    props.listCard();
  }, []);

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
              <div className="viewButton" onClick={() => props.selectCard(params.row)}>View</div>
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
    list: state.cardList,
    token: state.token,
  };

};

export default connect(mapStateToProps, { listCard, deleteCard, selectCard })(Datatable);
