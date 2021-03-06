import './single.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImageApi } from '../../../../Api/ImageApi';

const SliderSingle = (props) => {
  const navigate = useNavigate();
  const slider = props.slider;

  console.log(slider);
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  slider.image_path.length > 0
                    ? `${ImageApi}${slider.image_path}`
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                {/*<h1 className="itemTitle">Jane Doe</h1>*/}
                <div className="detailItem">
                  <span className="itemKey">Title:</span>
                  <span className="itemValue">{slider.title}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Text:</span>
                  <span className="itemValue">{slider.text}</span>
                </div>
                {/*<div className="detailItem">*/}
                {/*  <span className="itemKey">Address:</span>*/}
                {/*  <span className="itemValue">*/}
                {/*    Elton St. 234 Garden Yd. NewYork*/}
                {/*  </span>*/}
                {/*</div>*/}
                {/*<div className="detailItem">*/}
                {/*  <span className="itemKey">Country:</span>*/}
                {/*  <span className="itemValue">USA</span>*/}
                {/*</div>*/}

                <button className="btn btn-primary" type="button" onClick={() => navigate('/admin/slider/list')}> Back
                  to sldier list
                </button>
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
    slider: state.sliderSelect,
  };
};

export default connect(mapStateToProps, {})(SliderSingle);
