import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import paypallogo from './Images/paypallogo.png';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const styleCard = {
  marginLeft:'10px',
  marginTop: '61px',
  top: '116px',
  width: '588px',
  height: '200px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
  position: 'inherit'
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const style = {
  margin: '100px 180px 200px 200px',
};

const Post3 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Want to make your payment easier"
        subtitle="Pay Now"
        avatar={paypallogo}
      />
      <Link to="/payment"><RaisedButton label="Payment" primary={true} style={style} onclick={<a href= './Payment.js'></a>}/></Link>
        </Card>
  );


  export default Post3;