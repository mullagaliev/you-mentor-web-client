import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MentorIcon extends Component {
  render() {
    const { height, width, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" {...this.props}>
          <path d="M19,10.5c1.2-1.1,2-2.7,2-4.5c0-3.3-2.7-6-6-6c-3,0-5.4,2-5.9,5c0,0,0,0,0,0C9.1,5,9,5,9,5c-3.3,0-6,2.7-6,6  c0,1.8,0.8,3.4,2,4.5C3.2,15.9,1.5,17,0,19v4c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-4h5c0.6,0,1-0.4,1-1v-4  C22.6,12,20.8,10.9,19,10.5z M15,2c2.2,0,4,1.8,4,4s-1.7,4-4,4c0,0,0,0,0,0v0c0-2.1-1.9-3.9-3.9-4.6C11.4,3.5,13,2,15,2z M5,11  c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S5,13.2,5,11z M16,22H2v-2c0,0,2-3,7-3s7,3,7,3V22z M22,17h-5.9c-1-0.8-2-1.3-3.1-1.5  c1-0.9,1.7-2.1,1.9-3.5c0,0,0,0,0,0c0,0,0.1,0,0.1,0c5,0,7,3,7,3V17z"/>
        </svg>
    );
  }
}

MentorIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
MentorIcon.defaultProps = {
  width: '32px',
  height: '32px',
  color: '#405063'
};

export default MentorIcon;
