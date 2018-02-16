import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0px',
    height: '220px',
    width: '290px',
    marginTop: '15px',
    position: 'absolute',
    marginLeft: '100px'
};

const styleH3 = {
    margin: '20px',
    padding: '0',
    fontSize: '18px',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    fontWeight: '700',
    color: '#14171a',
};

const styleDiv = {
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    textAlign: 'justify',
    color:'#000066'
    
   
};
  

const About = () => (
    <Paper style={paperStyle}>
      <div><h3 style={styleH3}>About</h3></div>
      <div style={styleDiv}>PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.</div>
    </Paper>
);
  
export default About;