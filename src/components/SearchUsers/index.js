import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';
import UsersList from '../UsersList';
import SearchInput from '../SearchInput';

const style = require('./SearchUsers.sass');

class SearchUsers extends Component {
  render() {
    const { items, title, onChangeSearch } = this.props;
    return (
        <ContentBlock>
          <div className={style.SearchContainer}>
            <SearchInput className={style.SearchInput} onChangeSearch={onChangeSearch}/>
          </div>
          <UsersList items={items}/>
        </ContentBlock>
    );
  }
}

SearchUsers.propTypes = {};
SearchUsers.defaultProps = {};

export default SearchUsers;
