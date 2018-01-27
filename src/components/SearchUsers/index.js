import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';
import UsersList from '../UsersList';
import SearchInput from '../SearchInput';

class SearchUsers extends Component {
  render() {
    const { items, title } = this.props;
    return (
        <ContentBlock>
          <div style={{ marginBottom: '20px' }}>
            <SearchInput/>
          </div>
          <UsersList items={items}/>
        </ContentBlock>
    );
  }
}

SearchUsers.propTypes = {};
SearchUsers.defaultProps = {};

export default SearchUsers;
