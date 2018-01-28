import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AchievementIcon from '../common/icons/Achievement';
import { Button, Icon } from 'semantic-ui-react';

const style = require('./SkillsList.sass');

class SkillsList extends Component {
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
              Достижения ({items.length}) в {title && (isActive ?
                <b>{title}</b> : title) } в сфере {category.name} </span>
            <Button className={style.AdditionalInfoSubscribeBtn} color='green'>Узнать у {author.fio} как?</Button>
          </h2>
          {isOpen &&
          <div className={style.AdditionalInfoContainer}>
            {
              items && items.map((item, key) => {
                return (
                    <div key={item.id} className={style.AdditionalInfoElem}>
                      <AchievementIcon className={style.AdditionalInfoElemIcon}
                                  width={'40px'}
                                  height={'40px'}/>
                      <span className={style.AdditionalInfoElemTitle}>
                        <h3>{item.name}</h3>
                        <hr/>
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

SkillsList.propTypes = {};
SkillsList.defaultProps = {
  title: null,
  isActive: false,
  items: [],
  author: null
};

export default SkillsList;
