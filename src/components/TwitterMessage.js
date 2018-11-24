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

