import './single.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ImageApi } from '../../../../Api/ImageApi';

const CardSingle = (props) => {
  const card = props.card;
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <Link to="/admin/card/edit">
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  card.image_path
                    ? `${ImageApi}${card.image_path}`
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'

                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{card.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Text:</span>
                  <span className="itemValue">{card.text}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Slug:</span>
                  <span className="itemValue">{card.slug}</span>
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
    card: state.cardSelect,
  };
};

export default connect(mapStateToProps, {})(CardSingle);
