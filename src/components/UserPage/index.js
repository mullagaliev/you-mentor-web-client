import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillsList from '../SkillsList';
import UserProfile from '../UserProfile';

class UserPage extends Component {
  render() {
    const { user } = this.props;
    return <div>
      <UserProfile user={user}/>
      <SkillsList categoryTitle='Бизнес' isActive isOpen/>
      <SkillsList categoryTitle='Спорт'/>
    </div>;
  }
}

UserPage.propTypes = {};
UserPage.defaultProps = {};

export default UserPage;
