import React from 'react';
import './index.scss';

export default class Skill extends React.Component {
  render() {
    return (
      <section id="section-skill" className="section section--skill">
        <h3 className="section-title">MY SKILLS VALUES</h3>
        <div className="area area--tech">
          <h3 className="sub-title">technical skills</h3>
          <div className="skill-progress">
            <span className="skill-name">wordpress</span>
            <div className="progress-bar progress-bar--grey">
              <div className="progress-bar progress-bar--value1" />
              <span className="progress-marker marker-value1">85%</span>
            </div>
          </div>

          <div className="skill-progress">
            <span className="skill-name">photoshop</span>
            <div className="progress-bar progress-bar--grey">
              <div className="progress-bar progress-bar--value2" />
              <span className="progress-marker marker-value2">99%</span>
            </div>
          </div>

          <div className="skill-progress">
            <span className="skill-name">html&css</span>
            <div className="progress-bar progress-bar--grey">
              <div className="progress-bar progress-bar--value3" />
              <span className="progress-marker marker-value3">75%</span>
            </div>
          </div>

          <div className="skill-progress">
            <span className="skill-name">javascript</span>
            <div className="progress-bar progress-bar--grey">
              <div className="progress-bar progress-bar--value4" />
              <span className="progress-marker marker-value4">67%</span>
            </div>
          </div>
        </div>
        <div className="area area--knowledge">
          <h3 className="sub-title">knowledge</h3>
          <div className="knowledge-one">
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
          </div>
          <div className="knowledge-one">
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
            <div className="knowledge-row">
              <i className="icon ion-md-arrow-forward" />
              INSTALL AND CONFIGURE
            </div>
          </div>
        </div>
        <div className="area area--language">
          <h3 className="sub-title">language skills</h3>
          <div className="skill-set">
            <div className="skill-progress">
              <div className="wrapper">
                <div className="progress-label">
                  <span>90%</span>
                </div>
                <div className="pie spinner" />
                <div className="pie filler" />
                <div className="grey-border" />
                <div className="mask" />
              </div>
              <div className="language-name">
                english
                <br />
                experienced
              </div>
            </div>
            <div className="skill-progress">
              <div className="wrapper">
                <div className="progress-label">
                  <span>90%</span>
                </div>
                <div className="pie spinner" />
                <div className="pie filler" />
                <div className="grey-border" />
                <div className="mask" />
              </div>
              <div className="language-name">
                english
                <br />
                experienced
              </div>
            </div>
            <div className="skill-progress">
              <div className="wrapper">
                <div className="progress-label">
                  <span>90%</span>
                </div>
                <div className="pie spinner" />
                <div className="pie filler" />
                <div className="grey-border" />
                <div className="mask" />
              </div>
              <div className="language-name">
                english
                <br />
                experienced
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
