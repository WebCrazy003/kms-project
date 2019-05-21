import React from 'react';
import './index.scss';

export default class Education extends React.Component {
  render() {
    return (
      <div class="section section--education">
        <h3 class="title">EDUCATIONAL VALUE</h3>
        <div class="education">
          <div class="line" />

          <div class="period">
            <div class="degree">
              <span class="subject">UNIVERSITY OF DESIGN</span>
              <h4 class="degreename">MASTER DEGREE OF DESIGN</h4>
            </div>
            <div class="milestone" />
            <h4 class="year">2005 - 2006</h4>
          </div>

          <div class="period">
            <div class="degree">
              <span class="subject">UNIVERSITY OF DESIGN</span>
              <h4 class="degreename">MASTER DEGREE OF DESIGN</h4>
            </div>
            <div class="milestone" />
            <h4 class="year">2005 - 2006</h4>
          </div>

          <div class="period">
            <div class="degree">
              <span class="subject">UNIVERSITY OF DESIGN</span>
              <h4 class="degreename">MASTER DEGREE OF DESIGN</h4>
            </div>
            <div class="milestone" />
            <h4 class="year">2005 - 2006</h4>
          </div>

          <div class="period">
            <div class="degree">
              <span class="subject">UNIVERSITY OF DESIGN</span>
              <h4 class="degreename">MASTER DEGREE OF DESIGN</h4>
            </div>
            <div class="milestone" />
            <h4 class="year">2005 - 2006</h4>
          </div>
        </div>

        <h3 class="title">HOBBIES & INTEREST</h3>
        <div class="hobbies">
          <div class="hobby">
            <div class="hobbyicon">
              <i class="icon ion-ios-easel" />
            </div>
            <span class="hobbyname">web research</span>
          </div>
          <div class="hobby">
            <div class="hobbyicon">
              <i class="icon ion-ios-camera" />
            </div>
            <span class="hobbyname">photography</span>
          </div>
          <div class="hobby">
            <div class="hobbyicon">
              <i class="icon ion-ios-airplane" />
            </div>
            <span class="hobbyname">traveling</span>
          </div>
          <div class="hobby">
            <div class="hobbyicon">
              <i class="icon ion-ios-bookmarks" />
            </div>
            <span class="hobbyname">book reading</span>
          </div>
          <div class="hobby">
            <div class="hobbyicon">
              <i class="icon ion-ios-musical-notes" />
            </div>
            <span class="hobbyname">music</span>
          </div>
        </div>
      </div>
    );
  }
}
