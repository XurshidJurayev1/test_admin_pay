import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const SliderNew = ({ inputs, title }) => {
  const [slider, setSlider] = useState({
    title: '',
    text: '',
  });
  const [file, setFile] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData();


  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
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
                  required
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Please write Slider title"
                  value={slider.title}
                  onChange={(e) => setSlider({ ...slider, title: e.target.value })} />
              </div>
              <div className="formInput">
                <label>Text</label>
                <input
                  type="text"
                  placeholder="Please write Slider title"
                  value={slider.text}
                  onChange={(e) => setSlider({ ...slider, text: e.target.value })} />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderNew;
