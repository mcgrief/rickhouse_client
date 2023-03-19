import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { createWhiskey, getWhiskeyTypes, updateWhiskey } from '../../utils/data/whiskeyData';

const initialState = {
  proof: '',
  year: '',
  label: '',
  type: {
    id: '',
    name: '',
  },
};
const WhiskeyForm = ({ user, obj }) => {
  const [whiskeyTypes, setWhiskeyTypes] = useState([]);
  const [, setDesiredWhiskey] = useState([]);
  const [currentWhiskey, setCurrentWhiskey] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'type') {
      setDesiredWhiskey(value);
      setCurrentWhiskey((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setCurrentWhiskey((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const whiskey = {
      label: currentWhiskey.label,
      year: currentWhiskey.year,
      proof: currentWhiskey.proof,
      type: currentWhiskey.type,
      user: user.id,
    };
    if (obj.id) {
      updateWhiskey(whiskey, obj.id).then(() => router.push('/whiskey'));
    } else {
      createWhiskey(whiskey).then(() => router.push('/whiskey'));
    }
  };
  useEffect(() => {
    if (obj.id) {
      const editWhiskey = {
        label: obj.label,
        year: obj.year,
        proof: obj.proof,
        type: obj.type,
      };
      setCurrentWhiskey(editWhiskey);
    }
    getWhiskeyTypes().then(setWhiskeyTypes);
    console.warn(obj);
  }, [obj]);

  //     const whiskey = {
  //       distillery: currentWhiskey.distillery,
  //       lable: currentWhiskey.label,
  //       year: Number(currentWhiskey.year),
  //       proof: Number(currentWhiskey.proof),
  //       whiskey_type: Number(currentWhiskey.whiskeyType),
  //       user_id: user.uid,
  //     };
  //     if (obj.id) {
  //         updateWhiskey(collection, obj.id).then(() => router.push('/whiskey'));
  //       } else {
  //         createWhiskey(whiskey).then(() => router.push('/whiskey'));
  //   };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Label</Form.Label>
          <Form.Control name="label" required value={currentWhiskey.label} onChange={handleChange} />
          <Form.Label>Year</Form.Label>
          <Form.Control name="year" required value={currentWhiskey.year} onChange={handleChange} />
          <Form.Label>Proof</Form.Label>
          <Form.Control name="proof" required value={currentWhiskey.proof} onChange={handleChange} />
          <FloatingLabel controlId="floatingSelect" label="Type" className="mb-3">
            <Form.Select
              aria-label="Type"
              name="type"
              onChange={handleChange}
              className="mb-3"
              value={currentWhiskey.type.id}
              label={`${currentWhiskey.type}`}
              required
            >
              <option value="">Select Whiskey Type</option>
              {
            // eslint-disable-next-line react/prop-types
            whiskeyTypes?.map((type) => (
              <option
                key={type.id}
                value={type.id}
                defaultValue={currentWhiskey.type === type.name}
              >
                {type.name}
              </option>
            ))
          }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Button className="create" type="submit">{obj.id ? 'Update' : 'Post'} Whiskey</Button>
      </Form>
    </>
  );
};

WhiskeyForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  obj: PropTypes.shape({
    label: PropTypes.string,
    year: PropTypes.number,
    proof: PropTypes.number,
    type: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
}.isRequired;
WhiskeyForm.defaultProps = {
  obj: initialState,
};
export default WhiskeyForm;
