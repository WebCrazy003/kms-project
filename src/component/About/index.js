import React from 'react';
import '../../style/component';

export default class About extends React.Component {
  render() {
    const {
      profile: { name, role, overview },
    } = this.props;

    return (
      <section id="section-about" className="section-about">
        <div className="container">
          <h2 className="title">ABOUT ME</h2>
          <div className="row">
            <div className="col-md-3">
              <img src="./image/man02.png" alt="man" className="section-img" />
            </div>
            <div className="col-md-9">
              <h3 className="heroname">{name}</h3>
              <h5 className="herorole">{role}</h5>
              <p className="herodesc">{overview}</p>

              <img
                className="signature"
                src="./image/signature.png"
                alt="signature"
              />
              <div className="line" />

              <div className="personal-info">
                <b>DATE OF BIRTH: </b>24 JAN 1989
              </div>
              <div className="personal-info">
                <b>PHONE: </b>012-345-6789
              </div>
              <div className="personal-info">
                <b>EMAIL: </b>SILITY@EXAMPLE.COM
              </div>
              <div className="personal-info">
                <b>ADDRESS: </b>123 SILITY, SOUTH CORNER STREET, MELBORNE,
                AUSTRALIA.
              </div>
              <div className="personal-info">
                <b>WEBSITE: </b>HTTP://WWW.EXAMPLE.COM
              </div>

              <div className="title title--role">WHAT I'M DOING</div>
              <div className="row role-category">
                <div className="col-sm-4">
                  <div className="role">
                    <div className="roleicon">
                      <i className="icon ion-ios-phone-portrait" />
                    </div>
                    <h5 className="rolename">Web &amp; UX Design</h5>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="role">
                    <div className="roleicon">
                      <i className="icon ion-ios-phone-portrait" />
                    </div>
                    <h5 className="rolename">App Development</h5>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="role">
                    <div className="roleicon">
                      <i className="icon ion-ios-trophy" />
                    </div>
                    <h5 className="rolename">Marketing</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
