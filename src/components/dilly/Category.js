import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Category = ({ category, del }) => {
  const deleteCategory = (e) => {
    console.log(category.id);
  };

  return (
    <Button
      to={{
        pathname: `/category/${category.id}`,
        state: { category: category },
      }}
      variant={del === true ? 'outline-danger' : 'dark'}
      className='text-truncate w-100'
      as={del ? null : Link}
      size='lg'
      onClick={del ? deleteCategory : null}
    >
      {category.title}
    </Button>
  );
};

export default Category;
