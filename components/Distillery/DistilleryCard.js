import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function DistilleryCard({
  name,
  whiskey,
}) {
  return (
    <Card className="text-center">
      <Card.Header>Distillery:</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Whiskey: {whiskey?.map((taco) => (
          <p>{`${taco.label}`} </p>
        ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

DistilleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  whiskey: PropTypes.arrayOf(
    propTypes.object,
  ).isRequired,
};

export default DistilleryCard;
