import React from "react";

class Dropdown extends React.Component {
  state = {
    show: false,
  };

  onClick = () => {
    this.setState({ show: !this.state.show });
  };

  showDropdown() {
    if (this.state.show) {
      return (
        <div class="dropdown-menu" id="dropdown-menu">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>
          MORE{" "}
          <span className={`${this.state.show ? "rotate" : ""}`}>&#9660;</span>
        </button>
        {this.showDropdown()}
      </div>
    );
  }
}

export default Dropdown;
