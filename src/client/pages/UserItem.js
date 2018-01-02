import React from 'react';
import { connect } from 'react-redux';

const UserItem = (props) => {
  return (
    <div>
      <h1>User</h1>
      <h3>{props.user.name}</h3>
    </div>
  );
};

UserItem.defaultProps = {
  user: {}
};

function mapStateToProps(state, ownProps) {
  return { user: state.users.find(u => u.id === parseInt(ownProps.match.params.id, 10)) };
}

export default {
  component: connect(mapStateToProps)(UserItem)
};
