import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import '../HeaderTab';
import HeaderTab from '../HeaderTab';

class Header extends React.Component {
  render() {
    const currentPath = window.location.pathname;
    return (
      <header className="header">
        <div className="header__bottom">
          <div className="title">sility</div>
          <nav className="main-nav">
            <ul className="unstyled-list">
              <HeaderTab name="home" path="/" selected={currentPath === '/'} />
              <HeaderTab
                name="about"
                path="/about"
                selected={currentPath === '/about'}
              />
              <HeaderTab
                name="skill"
                path="/skill"
                selected={currentPath === '/skill'}
              />
              <HeaderTab
                name="experience"
                path="/experience"
                selected={currentPath === '/experience'}
              />
              <HeaderTab
                name="education"
                path="/education"
                selected={currentPath === '/education'}
              />
              <HeaderTab
                name="work"
                path="/work"
                selected={currentPath === '/work'}
              />
              <HeaderTab
                name="blog"
                path="/blog"
                selected={currentPath === '/blog'}
              />
              <HeaderTab
                name="contact"
                path="/contact"
                selected={currentPath === '/contact'}
              />
            </ul>

            <div className="header__action-button-wrapper">
              <a className="header__action-button">
                <i className="icon ion-md-add" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  componentWillReceiveProps(nextProps) {}
}

export default withRouter(Header);
