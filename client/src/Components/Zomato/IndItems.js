import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';

function IndividualItems(props) {
  return (
    <>
      <div className="mx-3 my-3">
        <Card style={{ width: '250px' }}>
          <Card.Img variant="top" src={props.item.image} style={{ maxHeight: '200px' }} />
          <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>{props.item.category}</Card.Text>
            <Card.Text>{props.item.price} {props.currency}</Card.Text>
            <Button
              variant="primary"
              onClick={() => props.AddItemToTheCart(props.item)}
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default IndividualItems;
