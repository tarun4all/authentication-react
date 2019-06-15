import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  
  constructor(props) {
    super(props);
  }

  responseFacebook = (response) => {
    if(response && response.name) {
        this.props.login(response.name);
    } else {
        console.log('Some error occures');
    }
  }

  render() {
    return (
      <div>
        <FacebookLogin
            appId="572409363238665"
            autoLoad={true}
            fields="name,email"
            callback={this.responseFacebook}
            className='facebook'
        />
      </div>
    );
  }
}

export default Facebook;
