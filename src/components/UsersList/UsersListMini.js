import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';
import classnames from 'classnames';

const style = require('./UsersList.sass');

class UsersListMini extends Component {
  render() {
    const { items } = this.props;
    return <div className={style.UsersList}>
      <div className={style.UsersListContainer}>
        {items && items.map((item, key) => {
          return <div key={item.id}
                      className={style.UsersListItem}>
            <div className={style.UsersListItemAvatar}>
              <div
                  className={classnames(style.UsersListItemStatus, Math.random() > 0.7 ? style.UsersListItemStatusOnline : '')}/>
              <img src={DefaultAvatar} alt=""/>
            </div>
            <div>
              {(item.fio).split(' ')[0]}
            </div>
          </div>
        })}
      </div>
    </div>;
  }
}

UsersListMini.propTypes = {};
UsersListMini.defaultProps = {};

export default UsersListMini;
