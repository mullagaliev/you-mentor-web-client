import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchUsers from '../../components/SearchUsers';
// import { connect } from 'react-redux';
// import { getUsers } from '../../actions';
import { getUsers } from '../../services/api';

class ContainerUsersList extends Component {
  state = {
    users: null,
    filter: {
      category: 0
    }
  };
  Update(){
    const { filter } = this.state;
    getUsers(filter).then((users) => {
      this.setState({ users });
      console.log(users);
    });
    console.log('Search...');
  }

  componentDidMount() {
   this.Update();
  }

  Search(categoryId) {
    this.setState({
      filter: {
        category: categoryId
      }
    }, this.Update);
  }

  render() {
    // const { users } = this.props;
    const { users } = this.state;
    return (
        <SearchUsers items={users} {...this.props}
                     onChangeSearch={(categoryId) => this.Search(categoryId)}/>
    );
  }
}

ContainerUsersList.propTypes = {};
ContainerUsersList.defaultProps = {};

function mapStateToProps(state) {
  return {
    users: state.users.items
  };
}

export default /*connect(mapStateToProps)*/(ContainerUsersList);
