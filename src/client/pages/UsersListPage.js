import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

import { fetchUsers } from '../actions';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { route, match } = this.props;

    return (
      <div>
        Users:
        <ul>
          {this.props.users.map(user => {
            return (
              <li key={user.id}>
                <Link to={`${match.url}/${user.id}`}>{user.name}</Link>
              </li>
            )
          })}
        </ul>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData
};
