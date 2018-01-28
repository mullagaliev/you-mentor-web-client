import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';
import SkillsList from '../SkillsList';
import { Rating } from 'semantic-ui-react';

const style = require('./UserProfile.sass');

class UserProfile extends Component {

  render() {
    const { user } = this.props;
    if (!user || !user.id)
      return null;
    const rating = (user.id % 3) + 3;
    const hearts = ((user.id % 3) + 2) % 6;
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
          <div className={style.PrimaryInfoRatingStars}>
            <div className={style.PrimaryInfoRatingStarsTitle}>Место в рейтинге</div>
            <div className={style.PrimaryInfoRatingStarsValue}/>
            <div className={style.PrimaryInfoRatingStarsTitle}>{5 - rating + 1}/4</div>
          </div>
          <div className={style.PrimaryInfoRatingStars}>
            <div className={style.PrimaryInfoRatingStarsTitle}>Средняя оценка</div>
            <Rating className={style.PrimaryInfoRatingStarsValue} icon='star' defaultRating={rating}
                    maxRating={5} size='huge'>
            </Rating>
            <div className={style.PrimaryInfoRatingStarsTitle}>{rating}/5</div>
          </div>
          <div className={style.PrimaryInfoRatingStars}>
            <div className={style.PrimaryInfoRatingStarsTitle}>Отзывчивость</div>
            <Rating className={style.PrimaryInfoRatingStarsValue} icon='heart'
                    defaultRating={hearts} maxRating={5} size='huge'>
            </Rating>
            <div className={style.PrimaryInfoRatingStarsTitle}>{ hearts }/5</div>
          </div>
        </div>
      </div>
      {
        user.skills && user.skills.map((item, key) => {
          return <SkillsList key={key}
                             isActive
                             isOpen
                             author={user}
                             title={item.name}
                             category={item.category}
                             items={item.achievements}/>

        })
      }
    </div>)
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
