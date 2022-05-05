import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from './datatablesource';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSlider, listSlider, selectSlider } from '../../../../../action';

const Datatable = (props) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    props.deleteSlider(id, props.token);
    props.listSlider();
  };


  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/slider/view" style={{ textDecoration: 'none' }}>
              <div className="viewButton" onClick={() => props.selectSlider(params.row)}>View</div>
            </Link>
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
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Slider List
        <Link to="/admin/slider/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={props.list}
        getRowId={(row) => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const mapSteToProps = (state) => {
  return {
    list: state.sliderList,
    slider: state.slider,
    token: state.token,
  };

};

export default connect(mapSteToProps, {
  selectSlider,
  deleteSlider,
  listSlider,

})(Datatable);
