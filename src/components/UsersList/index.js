import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';
import ContentBlock from '../ContentBlock';
import UsersListMini from './UsersListMini';
import UserListItem from '../UserListItem';
import SearchInput from '../SearchInput';

const style = require('./UsersList.sass');

class UsersList extends Component {
  GoToUser(userId) {
    window.location.pathname = '/user/' + userId;
  }

  render() {
    const { items, title } = this.props;
    return (<div>
      <h3>Результат поиска ({items && items.length})</h3>
      {
        items && items.map((item) => {
          return <UserListItem user={item} key={item.id}/>
        })
      }
      <h3>Рекомендации</h3>
      <UsersListMini items={items} GoToUser={this.GoToUser}/>
    </div>);
  }
}

UsersList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};
UsersList.defaultProps = {
  items: null,
  title: null
};

export default UsersList;
