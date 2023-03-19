import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteWhiskey } from '../../utils/data/whiskeyData';

function WhiskeyCard({
  label, //
  distillery,
  year,
  proof,
  id,
  onUpdate,
}) {
  const deleteThisWhiskey = () => {
    if (window.confirm(`Delete ${label}?`)) {
      deleteWhiskey(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{label}</Card.Header>
      <Card.Body>
        <Card.Title>By: {distillery}</Card.Title>
        <Card.Text>{year} A.D.</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Proof: {proof}</Card.Footer>
      <Link href={`/whiskey/edit/${id}`} passHref>
        <Button size="sm" variant="dark">
          EDIT
        </Button>
      </Link>
      <Link href={`/whiskey/${id}`} passHref>
        <Button size="sm" variant="dark">
          VIEW
        </Button>
      </Link>
      <Button size="sm" variant="danger" onClick={deleteThisWhiskey} className="m-2">
        DELETE
      </Button>
    </Card>
  );
}
WhiskeyCard.propTypes = {
  label: PropTypes.string.isRequired,
  distillery: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  proof: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default WhiskeyCard;
