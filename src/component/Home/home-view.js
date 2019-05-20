import React from 'react';
import './home-view.scss';
import Man from '../../asset/image/man01.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="sections">
        <section id="section-home" className="section-home">
          <div className="container">
            <div className="row horizon-center">
              <div className="col-sm-12 col-md-7 padding-bottom">
                <div>
                  <h1 className="hero-role">
                    DESIGN<sup>+</sup> DEVELOPE<sup>+</sup> INTERACTIVE
                    <sup>+</sup>
                    ART<sup>+</sup>
                  </h1>
                  <p className="hero-desc">
                    Hello, I'm Benjamin Thomson. I Have 8 years of experience in
                    Web and UX design. I am worked on a variety of brands with
                    agencies both big and small.
                  </p>
                </div>
                <div className="button-row">
                  <a className="solid-button white">HIRE ME NOW</a>
                  <a className="solid-button purple">DOWNLOAD CV</a>
                </div>
              </div>
              <div className="col-sm-12 col-md-5">
                <img src={Man} alt="man" className="section-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
