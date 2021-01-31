import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddListButton = ({ currentCategory }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant='outline-dark' onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} className='mr-2' /> List Item
      </Button>
    </>
  );
};

export default AddListButton;
