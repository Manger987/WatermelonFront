import React from 'react';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import Home from './home';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.state = { 
      errorMessage : ''
    }

    this.location = {
      pathname: '/home',
      state: { fromDashboard: true }
    }

  }

  // goTo = () => {
  //   return this.props.history.push('/register');
  // };

  showMessageError = () => {
      if(this.state.errorMessage) {
          return(
              <div class="alert alert-danger" role="alert">
                  <p>{`${this.state.errorMessage}!`}</p>
              </div>
          )
      }
      return false;
  }

  Error = (props) => {
    return <p>Error: {this.props.errorMessage} </p>
  } 
 
  handleSignIn(e) {
    e.preventDefault()
    this.setState({username: this.refs.username.value, password: this.refs.password.value}, function(){
    console.log("datos:",JSON.stringify(this.state));
      if (this.state.username && this.state.password) {
        // fetch('localhost:5500/authenticate')
        fetch('http://localhost:5500/users/authenticate',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        }).then(
          (response) => (response.json())
        ).then((response)=>{
          if (response.code === 200){
            console.log('responde:', response.data.token);
            if (response.data.token) {
              this.location.state = response.data;
              console.log('location:::', this.location);
              this.props.history.push(this.location);
            }
          }else if(response.code === 500){
            console.log('responde:', response);
            this.setState({errorMessage: response.statusMessage});
            // this.errorMessage(response.statusMessage);
            alert(response.statusMessage);
          }
        })
      } else {
        console.log('Faltan valores');
      }
    });//this.state.password = this.refs.password.value;
  }
  
  render() {
    return (
      <div>
        { this.state.errorMessage ? this.showMessageError() : '' }
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          {/* { this.showMessageError() } */}
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

// const Login = () => {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return(
//     <div>Login
//       <form onSubmit={handleClick}>
//         <input type="text" name="username" />
//         <input type="password" name="password" />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

export default Login;