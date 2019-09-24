import React from 'react';
import Icon from '../Icon/Icon';
import './PlusIcon.css';

class PlusIcon extends React.Component {
  constructor(props) {
    super(props);
    this.rotate = this.rotate.bind(this);
    this.state = {
      rotated: false,
      classLists: {
        "icon": "plus_icon-icon",
        "content": "plus_icon-content"
      }
    };
  }

  rotate() {
    this.setState({
      rotated: !this.state.rotated,
    });
  };

  render() {
    const { rotated, classLists } = this.state;

    return (
      <div className="plus_icon">
        <Icon classList={rotated ? classLists.icon + " rotate" : classLists.icon} onClick={this.rotate}>
          <span className="center"></span>
          <span className="center"></span>
        </Icon>
        <div className={rotated ? classLists.content + " show" : classLists.content}>
          <p>Content</p>
        </div>
      </div>
    );
  };
}

export default PlusIcon;
