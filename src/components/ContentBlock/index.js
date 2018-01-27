import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const style = require('./ContentBlock.sass');

class ContentBlock extends Component {
  render() {
    const { primary, title, children } = this.props;
    return (<div className={classnames(style.Block, primary ? style.BlockPrimary : '')}>
      {
        primary ?
            title && <h1 className={style.BlockTitle}>
              {title}
            </h1>
            :
            title && <h2 className={style.BlockTitle}>
              {title}
            </h2>
      }
      {children}
    </div>);
  }
}

ContentBlock.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
};
ContentBlock.defaultProps = {
  primary: false,
  title: null,
  children: null,
};

export default ContentBlock;
