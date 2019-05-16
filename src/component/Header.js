import React from "react";

export default class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <p>{title}</p>
      </div>
    );
  }
}
