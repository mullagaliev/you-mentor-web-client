import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile';

const style = require('./UserListItem.sass');

class UserListItem extends Component {
  render() {
    const { user } = this.props;
    if (!user.id)
      return null;
    return (<div className={style.UserListItem}>
      <UserProfile user={user}/>
    </div>)
  }
}

UserListItem.propTypes = {};
UserListItem.defaultProps = {};

export default UserListItem;
