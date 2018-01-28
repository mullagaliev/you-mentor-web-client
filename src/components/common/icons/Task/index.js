import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskIcon extends Component {
  render() {
    const { height, width, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 512 512" {...this.props}>
          <polygon points="325.719,127.625 229.094,231.25 184.812,183.781 144,227.562 230.781,319.906 367.938,172.875 "/><path d="M480,0H32C14.312,0,0,14.312,0,32v448c0,17.688,14.312,32,32,32h448c17.688,0,32-14.312,32-32v-96V128V32  C512,14.312,497.688,0,480,0z M448,352h-96v96H160v-96H64V160V64h96h192h96V352z"/>
        </svg>
    );
  }
}

TaskIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
TaskIcon.defaultProps = {
  width: '32px',
  height: '32px',
  color: '#405063'
};

export default TaskIcon;
