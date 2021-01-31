import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import AddCategory from './AddCategory';
import { useCategory } from '../../hooks/useCategory';
import Category from './Category';
import { useParams, useLocation } from 'react-router-dom';
import CategoryBreadCrumbs from './CategoryBreadCrumbs';

const Dashboard = () => {
  const { categoryId } = useParams();
  const { state = {} } = useLocation();
  const { category, childCategories } = useCategory(categoryId, state.category);

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className='d-flex align-items-center'>
          <CategoryBreadCrumbs currentCategory={category} />
          <AddCategory currentCategory={category} />
        </div>
        {childCategories.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childCategories.map((cat) => (
              <div key={cat.id} style={{ maxWidth: '250px' }} className='p-2'>
                <Category category={cat} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
