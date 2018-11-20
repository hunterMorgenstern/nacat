import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">Settlers of Catan</h1>
          <button onClick={this.flipText} className="main-button" type="button">
            LIFE
          </button>
        </header>
      </div>
    );
  }
}

export default Header;
