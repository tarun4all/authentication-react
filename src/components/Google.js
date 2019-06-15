import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './custom.css';

class Google extends Component {
  
  constructor(props) {
    super(props);
  }

  responseGoogle = (response) => {
    if(response && response.profileObj && response.profileObj.name) {
        this.props.login(response.profileObj.name);
    } else {
        console.log('Some error occures');
    }
  }

  render() {
    return (
      <div>
        <GoogleLogin
            clientId="224037765050-r8fvg328oed264j14ic8plo51k7eqefo.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            className='google'
        />
      </div>
    );
  }
}

export default Google;
