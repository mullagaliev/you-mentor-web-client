import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MentorsList from '../MentorsList';
import ActiveTasksList from '../ActiveTasksList';
import UserProfile from '../UserProfile';

class UserPage extends Component {
  render() {
    const { user } = this.props;
    const mentors = [
      {
        name: 'Бизнес',
        description: 'Заработок 1-го миллиона'
      },
      {
        name: 'Отношения',
        description: 'Найти жену до 30 лет'
      }
    ];
    const tasks = [
      {
        name: 'Выйти на оборот в 5 млн. в продажах лесного массива',
        description: ' ',
        progress: 90
      },
      {
        name: 'Выйти на оборот в 10 млн. в продажах лесного массива',
        description: ' ',
        progress: 50
      }
    ];

    if(!user){
      return null;
    }

    return <div>
      <UserProfile user={user}/>
      {
        mentors && <MentorsList author={user}
                                title={'Менторы'}
                                items={mentors}/>

      }
      {
        tasks && <ActiveTasksList author={user}
                                  title={'Активные задания'}
                                  items={tasks}/>
      }
    </div>;
  }
}

UserPage.propTypes = {};
UserPage.defaultProps = {};

export default UserPage;
