import React from 'react';
import { Link } from 'react-router-dom';
import './header-view.scss';
import IosAdd from 'react-ionicons/lib/IosAdd';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__bottom">
          <div className="title">sility</div>
          <nav className="main-nav">
            <ul className="unstyled-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>skill</li>
              <li>experience</li>
              <li>education</li>
              <li>work</li>
              <li>blog</li>
              <li>contact</li>
            </ul>

            <div className="header__action-button-wrapper">
              <a className="header__action-button">
                {/* <i className="icon ion-md-add" /> */}
                <IosAdd fontSize="23px" color="#ffffff" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
