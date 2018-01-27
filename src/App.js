import React, { Component } from 'react';
import ContainerUsersList from './containers/UsersList';
import ContainerUserPage from './containers/UserProfile';
import Layout from './layouts/DefaultLayout';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const styles = require('./App.sass');

class App extends Component {
  render() {
    return (
        <div className={styles.App}>
          <Router basename="/">
            <Switch>
              <Route path='/user/:userId' component={({ match }) => {
                const userId = match.params.userId;
                return <Layout>
                  <ContainerUserPage userId={userId}/>
                </Layout>;
              }}/>
              <Route path='/users' component={() => {
                return <Layout>
                  <ContainerUsersList/>
                </Layout>;
              }}/>
              <Route path='/' component={() => {
                return <Layout>
                  <ContainerUsersList/>
                </Layout>;
              }}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
