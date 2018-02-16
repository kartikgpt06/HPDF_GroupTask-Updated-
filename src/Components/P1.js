import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import paypalCC from './Images/paypalCC.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


const styleCard = {
  marginLeft:'10px',
  marginTop: '15px',
  top: '116px',
  width: '588px',
  height: '490px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const style = {
  margin: '100px 200px 300px 250px',
};

const TField = {
    marginLeft:'200px'
}

const DateField = {
    marginLeft:'200px'   
}

const TCField = {
    
    marginLeft: '200px'
}


const Post1 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Credit Card"
        subtitle="Plz Enter the details:"
        avatar={paypalCC}
      />
    <TextField
      hintText="Credit Card No. " style={TField}/><br />
    <br />
   <DatePicker hintText="Expiry Date" container="inline" mode="landscape" style={DateField} />
    
     <TextField
      hintText="CVV Code " style={TCField}/><br />
    <br />
    
     <RaisedButton label="Pay" secondary={true} style={style} />
     
  </Card>
  );
  
  export default Post1;