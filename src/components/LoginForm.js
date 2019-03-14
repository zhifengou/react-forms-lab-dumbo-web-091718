import React from "react";

class LoginForm extends React.Component {
  state={
    username:'',
    password:''
  }
  
  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit =(e) =>{
    e.preventDefault()
    if (this.state.username && this.state.password){
    this.props.onSubmit(this.state)
  }
  }
  render() {
    const{username,password}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
<<<<<<< HEAD

export default LoginForm;
=======
>>>>>>> 570c4fad195a0c3e4512d69c6532bf1b752d1ae2
