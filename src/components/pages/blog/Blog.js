import React from 'react';
import './blog.scss';
import pay1 from '../../../images/pay1.png';

const Blog = () => {
  return (
    <div className="blog">
      <h2>Новости компании!</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="blog__card">
              <div className="blog__img">
                <img src={pay1} alt="png" />
              </div>
              <div className="blog__text">
                <h3>lorem ipsum dolor sit amet, consectetur</h3>
                <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
                <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
              </div>

            </div>
          </div>
        </div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="javascriptvoid" className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="javascritpVoid">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="javascritpVoid">2 <span className="visually-hidden">(current)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="javascritpVoid">3</a></li>
            <li className="page-item">
              <a className="page-link" href="javascritpVoid">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Blog;
