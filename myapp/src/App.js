import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap'; 
import Name from './Name'; /*import the Name comp*/
import Description from './Description'; /*import the Description comp*/
import Price from './Price'; /*import the Price comp*/
import Image from './Image'; /*import the Image comp*/

const firstName = "Nidhal";

function App() {
  return (
    <div className="App">
     {/* boootstrap card */}
    <Card style={{ width: '25rem', margin: '20px auto' }}>
      <Card.Body>
        <Image /> 
        <Card.Title><Name /></Card.Title> 
        <Card.Text>
          <Description /> 
        </Card.Text>
        <Card.Text>
          <Price /> 
        </Card.Text>
        <Button variant="primary">Click here to explore </Button> 
      </Card.Body>
    </Card>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Hello, {firstName ? firstName : "there"}!</h3>
        {firstName && <img src="" />}
      </div>
    </div>
    
  );
}

export default App;
