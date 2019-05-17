import React from 'react';
import './header-view.scss';
import IosAdd from 'react-ionicons/lib/IosAdd';

export default class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="header__bottom">
          <div class="title">sility</div>
          <nav class="main-nav">
            <ul class="unstyled-list">
              <li>home</li>
              <li>about</li>
              <li>skill</li>
              <li>experience</li>
              <li>education</li>
              <li>work</li>
              <li>blog</li>
              <li>contact</li>
            </ul>

            <div class="header__action-button-wrapper">
              <a class="header__action-button">
                {/* <i class="icon ion-md-add" /> */}
                <IosAdd fontSize="23px" color="#ffffff" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
