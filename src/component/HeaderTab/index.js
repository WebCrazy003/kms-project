import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/component';

export default class HeaderTab extends React.Component {
  render() {
    const { name, path, selected } = this.props;
    return (
      <li className={selected ? 'active' : ''}>
        <Link to={path}>{name}</Link>
      </li>
    );
  }
}
