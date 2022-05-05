import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCard } from '../../../../action';


const BlogNew = (props) => {
  const navigate = useNavigate();
  const [card, setCard] = useState({
    title: '',
    text: '',
    slug: '',
  });
  const [file, setFile] = useState('');

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('file', file);
    formData.append('title', card.title);
    formData.append('text', card.text);
    formData.append('slug', card.slug);
    props.addCard(formData, props.token);
    // navigate('/admin/card/list');
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Card</h1>
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
                <label>Title</label>
                <input type="text" placeholder="please write title"
                       value={card.title}
                       onChange={(e) => setCard({ ...card, title: e.target.value })} />
              </div>
              <div className="formInput">
                <label>Text</label>
                <input type="text" placeholder="please write text"
                       value={card.text}
                       onChange={(e) => setCard({ ...card, text: e.target.value })}
                />
              </div>
              <div className="formInput">
                <label>Slug</label>
                <input type="link" placeholder="please write link"
                       value={card.slug}
                       onChange={(e) => setCard({ ...card, slug: e.target.value })} />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
    token: state.token,
  };
};


export default connect(mapStateToProps, { addCard })(BlogNew);
