import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { deleteDistillery } from '../../utils/data/distilleryData';

function DistilleryCard({
  name,
  whiskey,
  id,
  onUpdate,
}) {
  const deleteThisDistillery = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteDistillery(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>Distillery:</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Whiskey: {whiskey?.map((taco) => (
          <p>{`${taco.label}`} </p>
        ))}
        </Card.Text>
        <Button size="sm" variant="danger" onClick={deleteThisDistillery} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

DistilleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  whiskey: PropTypes.arrayOf(
    propTypes.object,
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DistilleryCard;
