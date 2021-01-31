import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import AddCategory from './AddCategory';
import AddListButton from './AddListButton';
import { useCategory } from '../../hooks/useCategory';
import Category from './Category';
import { useParams, useLocation } from 'react-router-dom';
import CategoryBreadCrumbs from './CategoryBreadCrumbs';
import { useState } from 'react';

const Dashboard = () => {
  const { categoryId } = useParams();
  const { state = {} } = useLocation();
  const { category, childCategories } = useCategory(categoryId, state.category);
  const [deleteMode, setDeleteMode] = useState(false);

  const passDeleteMode = (e) => {
    setDeleteMode(e);
  };

  return (
    <>
      <Navbar />
      <hr className='mt-5' />
      <Container>
        <div className='d-flex align-items-center mt-5'>
          <CategoryBreadCrumbs currentCategory={category} />
          <AddCategory currentCategory={category} passDeleteMode={passDeleteMode} />
        </div>
        {childCategories.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childCategories.map((cat) => (
              <div key={cat.id} style={{ maxWidth: '250px' }} className='mr-2 mt-3'>
                <Category category={cat} del={deleteMode} />
              </div>
            ))}
          </div>
        )}
      </Container>
      <hr className='mt-5' />
      <Container>
        <div className='d-flex align-items-center mt-5'>
          <div className='flex-grow-1'></div>
          <AddListButton currentCategory={category} />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
