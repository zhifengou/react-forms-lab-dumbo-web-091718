import React from "react";

export default class TwitterMessage extends React.Component {
  state={
    message: ''
  }
handleChange = (e)=>{
  this.setState({message: e.target.value},
  ()=>console.log(this.state))
}
  render() {
    const{maxChars}= this.props
    const{message} = this.state
    return (
      <div>
        <strong>Your message:</strong>
      <input type="text" name='name' value={message} onChange={this.handleChange} />
      {maxChars-message.length}
      </div>
    );
  }
}
<<<<<<< HEAD

=======
>>>>>>> 570c4fad195a0c3e4512d69c6532bf1b752d1ae2
