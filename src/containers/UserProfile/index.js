import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../../components/UserPage';
// import { connect } from 'react-redux';
import { getUserById } from '../../services/api';

class ContainerUserProfile extends Component {
  state = {
    user: null
  };

  Update(userId) {
    getUserById(userId).then((user) => {
      this.setState({ user });
    });
  }

  componentDidMount() {
    const { userId } = this.props;
    this.Update(userId);
  }

  shouldComponentUpdate(nextProps) {
    const { userId } = nextProps;
    if (userId === this.props.userId) {
      return true;
    }
    this.Update(userId);
    return true;
  }

  render() {
    const { user } = this.state;
    return (<UserPage user={user}/>);
  }
}

ContainerUserProfile.propTypes = {};
ContainerUserProfile.defaultProps = {};

// function mapStateToProps(state) {
//   return {
//     user: state.user.info,
//   };
// }

export default /*connect(mapStateToProps)*/(ContainerUserProfile);
