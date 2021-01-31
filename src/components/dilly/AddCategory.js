import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ROOT_CATEGORY } from '../../hooks/useCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AddCategory = ({ currentCategory, passDeleteMode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { currentUser } = useAuth();
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    passDeleteMode(deleteMode);
  }, [deleteMode, passDeleteMode]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentCategory === null) return;

    const path = [...currentCategory.path];

    if (currentCategory !== ROOT_CATEGORY) {
      path.push({ title: currentCategory.title, id: currentCategory.id });
    }

    database.categories.add({
      title: name,
      parentId: currentCategory.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    });

    setName('');
    closeModal();
  };

  const deleteCategory = () => {
    if (deleteMode === false) {
      setDeleteMode(true);
    } else {
      setDeleteMode(false);
    }
  };

  return (
    <>
      <div className='d-flex flex-column'>
        <Button onClick={openModal} variant='outline-dark'>
          <FontAwesomeIcon icon={faPlus} className='mr-2' /> Category
        </Button>
        <Button
          variant='outline-danger'
          size='sm'
          className='mt-2 ml-auto'
          style={{ width: '30px' }}
          onClick={deleteCategory}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>
      <Modal show={open} onHide={closeModal} animation={false}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label className='py-3'>Add category name</Form.Label>
              <Form.Control type='text' required value={name} onChange={(e) => setName(e.target.value)} autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-dark' onClick={closeModal}>
              Close
            </Button>
            <Button variant='dark' type='submit'>
              Add Category
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddCategory;
