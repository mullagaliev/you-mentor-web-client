import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Select, Input, Dropdown } from 'semantic-ui-react';
import { getCategories } from '../../services/api';

const person = [
  { key: 'all', text: 'Без разницы', value: 'all' },
  { key: 'mentors', text: 'Наставника', value: 'mentors' },
  { key: 'learner', text: 'Ученика', value: 'learner' },
];

const category = [
  { key: 'all', text: 'Без разницы', value: 'all' },
  { key: 'business', text: 'Бизнеса', value: 'business' },
  { key: 'sports', text: 'Спорта', value: 'sports' },
];

const options = [
  { key: 1, text: 'Вести бизнес', value: 1 },
  { key: 2, text: 'Управлять временем', value: 2 },
  { key: 3, text: 'Зарабатывать деньги', value: 3 },
];

const renderLabel = label => ({
  color: 'blue',
  content: `Навыку ${label.text}`,
  icon: 'check',
});

class SearchInput extends Component {
  state = {
    category: null,
  };

  componentDidMount(){
    getCategories().then((category)=>{
      category.push({
        id: 0,
        name: 'Без разницы'
      });
      this.setState({category : category.map((item)=>{
        return {
          key: item.id,
          text: item.name,
          value: item.id
        }
      })});
    })
  }

  render() {
    const { category } = this.state;
    return <Input type='text' placeholder='Ишу...' action fluid>
      <input/>
      <Select compact options={person} defaultValue='mentors' />
      <Select compact options={category} defaultValue='0' />
      <Dropdown
          multiple
          selection
          options={options}
          placeholder='Чтобы научиться'
          renderLabel={renderLabel}
      />
      <Button type='submit' color='yellow'>Найти</Button>
    </Input>;
  }
}

SearchInput.propTypes = {};
SearchInput.defaultProps = {};

export default SearchInput;
