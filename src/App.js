import React, { Component } from 'react';
import Login from './components/Login';
import Profile from './components/profile';
import { Card } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: ''
    };
  }

  loginHandler = (name) => {
    if(name) {
      this.setState({
        login: true,
        name: name
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.login ? 
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card bordered={true} style={{ width: '35%', position: 'relative', left: '35%'}}>
              <Login login = {this.loginHandler} />
            </Card>
          </div>
        
         : <Profile name = {this.state.name} />}
      </div>
    );
  }
}

export default App;
