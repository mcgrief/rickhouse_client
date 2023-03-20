import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDistilleries } from '../../utils/data/distilleryData';
import createWhiskeyDistillery from '../../utils/data/whiskeyDistilleryData';

const initalState = {
  whiskey: {
    id: 0,
    label: '',
  },
  distillery: {
    id: 0,
    name: '',
  },
};
const WhiskeyDistilleryForm = ({ obj }) => {
  const [currentDistillery, setCurrentDistillery] = useState(initalState);
  const [whiskeyDistillery, setWhiskeyDistillery] = useState([]);

  const [, setDesiredWhiskeyDistillery] = useState(initalState);
  const router = useRouter();
  const { id } = router.query;
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'distillery') {
      setDesiredWhiskeyDistillery(value);
      setCurrentDistillery((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setCurrentDistillery((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.warn(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createWhiskeyDistillery(id, currentDistillery.distillery).then(() => router.push('/distillery'));
  };
  // const handleSelectItem = (e) => {
  //   setSelectedItems([...selectedItems, e.target.value]);
  // };
  // eslint-disable-next-line no-self-compare
  const filteredDistillery = () => { whiskeyDistillery.filter((distillery) => distillery.whiskey.id !== id); };

  useEffect(() => {
    if (obj.id) {
      const editDistillery = {
        whiskey: obj.whiskey.label,
        distillery: obj.distillery.name,
      };
      setCurrentDistillery(editDistillery);
    }
    getDistilleries().then(setWhiskeyDistillery);
    filteredDistillery();
  }, [obj]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">Add to Distillery</h2>
        <FloatingLabel controlId="floatingSelect" label="Distillery" className="mb-3">
          <Form.Select
            aria-label="Distillery"
            name="distillery"
            onChange={handleChange}
            className="mb-3"
            value={currentDistillery.distillery}
            required
          >
            <option value="">Select Distillery</option>
            {/* <select onChange={handleSelectItem}>
              {bandanaCollection
                .filter((item) => !selectedItems.find((taco) => item === taco))
                .map((collection) => <option value={collection.id}>{collection.name}</option>)}
            </select> */}
            {
            // eslint-disable-next-line react/prop-types
            whiskeyDistillery?.map((distillery) => (
              <option
                key={distillery.id}
                value={distillery.id}
                defaultValue={currentDistillery.distillery === distillery.id}
              >
                {distillery.name}
              </option>
            ))
          }
          </Form.Select>
        </FloatingLabel>
        <Button className="create" type="submit">{obj.id ? 'Update' : 'Post'} Distillery</Button>
      </Form>
    </>
  );
};
WhiskeyDistilleryForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    whiskey: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
    distillery: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
}.isRequired;
WhiskeyDistilleryForm.defaultProps = {
  obj: initalState,
};
export default WhiskeyDistilleryForm;
