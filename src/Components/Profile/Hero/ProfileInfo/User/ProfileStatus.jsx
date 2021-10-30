import React from 'react';

class ProfileStatus extends React.Component{
  state = {
    editMode: false,
    status: this.props.status
  } 
  activeteEditMode = () => {
    this.setState({
    editMode: true
    })
  }
  deActiveteEditMode = () =>{
    this.setState({
    editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusInputChange = (evt) => {
    this.setState({
      status: evt.target.value
    })
  }
  componentDidUpdate(prevProps,  prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render(){
  return(
    <>
    {!this.state.editMode && <div>
      <span onDoubleClick={this.activeteEditMode}>{this.props.status || "My status"}</span>
    </div>}
    {this.state.editMode && <div>
      <input autoFocus type="text" value={this.state.status} 
            onBlur={this.deActiveteEditMode} onChange={this.onStatusInputChange}/>
    </div>
      
  }
    </>
  )
  }
}

export default ProfileStatus