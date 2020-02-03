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
    this.errorMessage = false;
    this.location = {
      pathname: '/home',
      state: { fromDashboard: true }
    }

  }

  // goTo = () => {
  //   return this.props.history.push('/register');
  // };
 
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
              // localStorage.setItem('token', JSON.stringify(response.data.token));
              // this.setItem('usuario', JSON.stringify(response.data));
              // const Usuario = React.createContext(JSON.stringify(response.data));
              // this.set('usuario',response.data);
              // this.resetForm();
              this.location.state = response.data;
              console.log('location:::', this.location);
              this.props.history.push(this.location);
            }
          }else if(response.code === 500){
            console.log('responde:', response);
            this.errorMessage(response.statusMessage);
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
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
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