import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StarIcon extends Component {
  render() {
    const { height, width, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 512 512" {...this.props}>
          <path
              d="M407.7,500c-1.7,0-3.4-0.4-4.9-1.2L256,421.6l-146.8,77.2c-3.6,1.9-7.9,1.6-11.1-0.8  c-3.2-2.4-4.9-6.4-4.2-10.3l28-163.5L3.2,208.4c-2.9-2.8-3.9-7-2.7-10.8c1.2-3.8,4.5-6.6,8.5-7.2l164.1-23.8l73.4-148.7  c1.8-3.6,5.4-5.9,9.5-5.9c4,0,7.7,2.3,9.5,5.9l73.4,148.7L503,190.5c4,0.6,7.3,3.4,8.5,7.2c1.2,3.8,0.2,8-2.7,10.8L390.1,324.2  l28,163.5c0.7,4-0.9,8-4.2,10.3C412.1,499.3,409.9,500,407.7,500z M256,399.1c1.7,0,3.4,0.4,4.9,1.2l132.8,69.8l-25.4-147.9  c-0.6-3.4,0.5-6.9,3-9.3l107.4-104.7l-148.5-21.6c-3.4-0.5-6.4-2.7-7.9-5.8L256,46.4l-66.4,134.5c-1.5,3.1-4.5,5.3-7.9,5.8  L33.2,208.3L140.6,313c2.5,2.4,3.6,5.9,3,9.3l-25.4,147.9l132.8-69.8C252.6,399.5,254.3,399.1,256,399.1z"
              fill={color}/>
        </svg>
    );
  }
}

StarIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
StarIcon.defaultProps = {
  width: '32px',
  height: '32px',
  color: '#405063'
};

export default StarIcon;