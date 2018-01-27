import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';

import GoogleMap from '../common/GoogleMap';

const style = require('./UserProfile.sass');

class UserProfile extends Component {

  render() {
    const { user } = this.props;
    if (!user.id)
      return null;
    // const geoMarkerLatLng = {
    //   lat: Number(user.address.geo.lat),
    //   lng: Number(user.address.geo.lng)
    // };
    return (<div className={style.UserProfile}>
      <div className={style.PrimaryInfo}>
        <div className={style.PrimaryInfoAvatar}>
          <img src={user.image ? user.image : DefaultAvatar} alt=""/>
        </div>
        <div className={style.PrimaryInfoDesc}>
          <span className={style.PrimaryInfoDescMeta}>
            Пользователь <a href={'/user/' + user.id}
                            className={style.PrimaryInfoDescMetaPrimary}>@{user.id}</a>
          </span>
          <h1 className={style.PrimaryInfoDescTitle}>
            {user.fio}
          </h1>
          <span className={style.PrimaryInfoDescExtra}>
            Ментор в сферах: <b>Бизнеса</b>, Спорта, Отношений
          </span>
        </div>
        <div className={style.PrimaryInfoRating}>
          {/*<GoogleMap*/}
              {/*center={geoMarkerLatLng}*/}
              {/*marker={Object.assign({}, geoMarkerLatLng, { text: user.address.street + ' ' + user.address.suite })}*/}
              {/*zoom={2}/>*/}
        </div>
      </div>
    </div>)
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
