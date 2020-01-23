import React from 'react';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
 
  handleSignIn(e) {
    e.preventDefault()
    this.setState({username: this.refs.username.value});// = this.refs.username.value;
    this.setState({password: this.refs.password.value});//this.state.password = this.refs.password.value;
    console.log("datos:",this.state);
    if (this.state.username && this.state.password) {
      // fetch('localhost:5500/authenticate')
      fetch('localhost:5500/authenticate',{
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(
        (response) => (response.json())
      ).then((response)=>{
        if (response.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    } else {
      console.log('Faltan valores');
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
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