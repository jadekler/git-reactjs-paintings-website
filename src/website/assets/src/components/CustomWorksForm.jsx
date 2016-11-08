import React from 'react'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'

const CustomWorksForm = () => (
  <div className="custom-works-root-root">
    <div className="custom-works-form">
      <Paper zDepth={2}>
        <h2>Custom Works: Inquiry</h2>
        <br/>
        <TextField floatingLabelText="Name" style={{marginLeft: "20px"}} underlineShow={false}/>
        <Divider />
        <TextField floatingLabelText="Phone Number" style={{marginLeft: "20px"}} underlineShow={false}/>
        <Divider />
        <TextField floatingLabelText="Email Address" style={{marginLeft: "20px"}} underlineShow={false}/>
        <Divider />
        <TextField floatingLabelText="Describe what you're looking for" style={{marginLeft: "20px"}} multiLine={true} underlineShow={false}/>
        <br/>
        <RaisedButton
          label="Submit"
          labelPosition="before"
          primary={true}
          icon={<MailOutline />}
          style={{margin: "30px 0 20px 20px"}}
          onClick={_ => {alert("I don't do anything yet :/")}}
        />
      </Paper>
    </div>
  </div>
)

export default CustomWorksForm