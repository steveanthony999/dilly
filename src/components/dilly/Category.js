import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Category = ({ category }) => {
  return (
    <Button
      to={{
        pathname: `/category/${category.id}`,
        state: { category: category },
      }}
      variant='outline-dark'
      className='text-truncate w-100'
      as={Link}
    >
      {category.title}
    </Button>
  );
};

export default Category;
