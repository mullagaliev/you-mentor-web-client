import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../../components/UserProfile';
// import { connect } from 'react-redux';
// import { getUserById, getAlbumsByUserId } from '../../actions';

class ContainerUserProfile extends Component {
  Update(userId) {
    // this.props.dispatch(getUserById(userId));
    // this.props.dispatch(getAlbumsByUserId(userId));
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
    // const { user, albums } = this.props;
    const user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    return (<UserProfile user={user}/>);
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
