import React from 'react';
import '../../style/component';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h4>ADDRESS</h4>
                <p>
                  123 Sility, South Corner Street,
                  <br />
                  Melbornem Australia
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>CONNECT</h4>
                <div className="social-icons">
                  <a className="social-icon">
                    <i className="fa fa-facebook" />
                  </a>
                  <a className="social-icon">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="social-icon">
                    <i className="fa fa-google" />
                  </a>
                  <a className="social-icon">
                    <i className="fa fa-behance" />
                  </a>
                  <a className="social-icon">
                    <i className="fa fa-dribbble" />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>CONTACT</h4>
                <p>
                  Tel:+61 123-456-7890
                  <br />
                  Mail: Sility@example.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Copyright @ Sility. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}
