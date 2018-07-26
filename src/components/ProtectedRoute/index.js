import { Component } from 'preact';
import { inject } from 'mobx-react';
import { route } from 'preact-router';

@inject('appStore')
export default class ProtectedRoute extends Component {
  componentWillMount () {
    const { redirectPath, appStore: { isAuthenticated } } = this.props;

    if (!isAuthenticated) route(redirectPath || '/');
  }

  render ({ component: Route, ...props }) {
    const { appStore: { isAuthenticated } } = this.props;

    return isAuthenticated && <Route {...props} />;
  }
}
