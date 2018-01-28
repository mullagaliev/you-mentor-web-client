import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskIcon from '../common/icons/Task';
import { Button, Icon, Progress } from 'semantic-ui-react';

const style = require('./ActiveTasks.sass');

class ActiveTasks extends Component {
  state = {
    isOpen: false
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };
  }

  render() {
    const { title, isActive, items, category, author } = this.props;
    const { isOpen } = this.state;
    return (
        <div className={style.AdditionalInfo}>
          <h2 className={style.AdditionalInfoTitle}>
            <span onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
              <Icon name={isOpen ? 'chevron up' : 'chevron down'}/>
              Активные цели
            </span>
            {/*<Button className={style.AdditionalInfoSubscribeBtn} color='green'>Узнать у {author.fio} как?</Button>*/}
          </h2>
          {isOpen &&
          <div className={style.AdditionalInfoContainer}>
            {
              items && items.map((item, key) => {
                return (
                    <div key={item.id} className={style.AdditionalInfoElem}>
                      <TaskIcon className={style.AdditionalInfoElemIcon}
                                  width={'40px'}
                                  height={'40px'}/>
                      <span className={style.AdditionalInfoElemTitle}>
                        <h3>{item.name}</h3>
                        <hr/>
                        <Progress percent={item.progress} success progress>
                            Прогресс задачи
                        </Progress>
                        <p>{item.description}</p>
                      </span>
                    </div>);
              })
            }
          </div>}
        </div>
    );
  }
}

ActiveTasks.propTypes = {};
ActiveTasks.defaultProps = {
  title: null,
  isActive: false,
  items: [],
  author: null
};

export default ActiveTasks;
