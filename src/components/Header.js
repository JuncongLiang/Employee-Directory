import React, { Component } from 'react';
import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
      <div className="header">
        <h1>Employee Directory</h1>
      </div>
      <p>Click on <strong>Name</strong> to sort by name or use the <strong>Search Box</strong> to narrow your results.</p>
      </>
    )
  }
}
