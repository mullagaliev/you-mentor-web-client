import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, TextArea, Label } from 'semantic-ui-react';

class MessageForm extends Component {
  render() {
    const { btn } = this.props;
    return (<Modal
        trigger={btn}
        header='Привет, ты хочешь попасть ко мне на менторство ? Заполни форму ниже!'
        content={
          <Form style={{padding: '20px'}}>
            <TextArea placeholder='Опиши свой вопрос..' style={{ minHeight: 100 }} />
          </Form>
        }
        actions={[
          'Отмена',
          { key: 'done', content: 'Отправить', positive: true },
        ]}
    />);
  }
}

MessageForm.propTypes = {};
MessageForm.defaultProps = {
  titleBtn: 'Узнать'
};

export default MessageForm;
