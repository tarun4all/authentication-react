import React, { Component } from 'react';

class Profile extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hi {this.props.name}
      </div>
    );
  }
}

export default Profile;
