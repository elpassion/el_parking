import { Component } from 'preact';
import { route } from 'preact-router';
import { inject } from 'mobx-react';

@inject('authStore')
export default class App extends Component {
  componentWillMount() {
    const { redirectPath, authStore: { isAuthenticated } } = this.props;

    if (!isAuthenticated) route(redirectPath || '/');
  }

  render({ component: Route, ...props }) {
    const { authStore: { isAuthenticated } } = this.props;

    return isAuthenticated && <Route {...props} />;
  }
}
