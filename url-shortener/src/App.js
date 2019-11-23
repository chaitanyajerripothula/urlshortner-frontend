import React, { Component } from 'react';

import ConverterComponent from './components/converter';
import Header  from './components/header';
import UrlManager  from './managers/url.manager';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shorturl: '',
      message:undefined
    };
    this.UrlManager = UrlManager();
  }

  handleSubmit = async originalurl => {
    const res = await this.UrlManager.getShortUrl(originalurl);
   this.setState({
        message :undefined
      },()=>{
if(res.status) {
       console.log(res);
      this.setState({
        message :res.msg
      })
    }else{
this.setState({
      shorturl: res.shortenUrl,
    });
    }
      })
    
    
  };

  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              paddingTop: '50px',
              paddingBottom: '50px',
              minHeight: '70vh',
              minWidth: '70vw',
            }}
          >
            <ConverterComponent
              message= {this.state.message}
              shorturl={this.state.shorturl}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
