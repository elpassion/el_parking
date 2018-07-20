import { Component } from 'preact';
import { route } from 'preact-router';
import { inject } from 'mobx-react';

@inject('appStore')
export default class App extends Component {
  componentWillMount() {
    const { redirectPath, appStore: { isAuthenticated } } = this.props;

    if (!isAuthenticated) route(redirectPath || '/');
  }

  render({ component: Route, ...props }) {
    const { appStore: { isAuthenticated } } = this.props;

    return isAuthenticated && <Route {...props} />;
  }
}
