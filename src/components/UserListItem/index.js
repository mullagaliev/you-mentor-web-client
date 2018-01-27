import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillsList from '../SkillsList';
import UserProfile from '../UserProfile';

const style = require('./UserListItem.sass');

class UserListItem extends Component {
  render() {
    const { user } = this.props;
    if (!user.id)
      return null;
    return (<div className={style.UserListItem}>
      <UserProfile user={user}/>
      {
        user.skills && user.skills.map((item, key) => {
          return <SkillsList key={key}
                             isActive
                             isOpen
                             author={user}
                             title={item.name}
                             category={item.category}
                             items={item.achievments}/>

        })
      }
    </div>)
  }
}

UserListItem.propTypes = {};
UserListItem.defaultProps = {};

export default UserListItem;
