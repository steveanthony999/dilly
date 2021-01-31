import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ROOT_CATEGORY } from '../../hooks/useCategory';

const AddCategory = ({ currentCategory }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { currentUser } = useAuth();

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

  return (
    <>
      <Button onClick={openModal} variant='outline-success' size='sm'>
        Add Category
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control type='text' required value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button variant='success' type='submit'>
              Add Category
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddCategory;
