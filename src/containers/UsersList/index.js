import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchUsers from '../../components/SearchUsers';
// import { connect } from 'react-redux';
// import { getUsers } from '../../actions';
import { getUsers } from '../../services/api';

class ContainerUsersList extends Component {
  state = {
    users: null
  };

  componentDidMount() {
    // this.props.dispatch(getUsers());
    getUsers().then((users) => {
      this.setState({ users });
      console.log(users);
    })
  }

  render() {
    // const { users } = this.props;
    const { users } = this.state;
    return (
        <SearchUsers items={users} {...this.props}/>
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
