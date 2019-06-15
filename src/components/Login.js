import React, { Component } from 'react';
import Facebook from './Facebook';
import Google from './Google';
import CustomForm from './customForm';

class Login extends Component {
  
  constructor(props) {
    super(props);
  }

  loginHandler = (name) => {
    if(name) {
       this.props.login(name);
    }
  }

  render() {
    return (
      <div>
        <center>
            <Facebook login = {this.loginHandler} />
            <Google login = {this.loginHandler} />
        </center>
        <CustomForm login = {this.loginHandler} />
      </div>
    );
  }
}

export default Login;
