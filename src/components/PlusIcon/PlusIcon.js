import React from 'react';
import './PlusIcon.css';

class PlusIcon extends React.Component {
  constructor(props) {
    super(props);
    this.rotate = this.rotate.bind(this);
    this.state = {
      rotated: false,
      classList: "plus-icon"
    };
  }

  rotate() {
    this.setState({
      rotated: !this.state.rotated,
    });
  };

  render() {
    return (
      <div 
        className={this.state.rotated ? this.state.classList + " rotated" : this.state.classList} 
        onClick={this.rotate}>
      </div>
    );
  };
}

export default PlusIcon;
