import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

import UrlManager  from "../../managers/url.manager";

const useStyles = {
  classes: {
    root: {
      padding: '10px',
    },
    container: {
      padding: '20px 20px 20px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'column',
    },
    textField: {
      marginLeft: '10px',
      marginRight: '10px',
      width: 200,
      color: 'white',
    },
  },
};

class ConverterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
    };
    this.UrlManager = UrlManager();

  }

  _handleTextFieldChange = e => {
    this.setState({
      textFieldValue: e.target.value,
    });
  };

  _handleClick = () => {
    this.props.handleSubmit(this.state.textFieldValue);
  };

  _handleLinkClick = async (event) =>{
    event.preventDefault();
    const response = await this.UrlManager.getLongUrl(this.props.shorturl);
    window.open(response.url);

  }

  render() {
    const { classes } = useStyles;
    return (
      <Paper style={{...classes.root,backgroundColor:"#21232B",width:"70vw",height:"70vh"}}>
        <form style={{...classes.container}} noValidate autoComplete="off">
          <div style={{width:"100%",padding:"10%",backgroundColor:"inherit"}}>
            <div style={{backgroundColor:"whitesmoke",flex:"4",width:"100%",margin:"5%"}}>
              <TextField
                ref='myField'
                id="filled-secondary"
                label="Enter Url To Be Transformed"
                variant="filled"
                color="secondary"
                fullWidth
                value={this.state.textFieldValue}
                onChange={this._handleTextFieldChange}
              />
            </div>
            <div style={{flex:"4",width:"100%",margin:"5%"}}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ alignSelf: 'flex-end' }}
                onClick={this._handleClick}
              >
                Secondary
              </Button>
            </div>
            <div style={{alignSelf:"flex-start",flex:"4",width:"100%",margin:"5%"}}>

              <Button
                href="#"
                onClick={this._handleLinkClick}
              >
                <Typography style={{ ...classes.root ,textTransform: "none",
                color:"#006fde","wordWrap":"break-word",width:"70%"}}
                >

                  {this.props.shorturl ? this.props.shorturl : ''}

                </Typography>
                {' '}

              </Button>


            </div>
          </div>
        </form>
      </Paper>
    );
  }
}

export default ConverterComponent;
