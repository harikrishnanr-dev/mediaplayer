import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState()
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addcategory = () => {
    
      console.log("Category Details")
    console.log(categoryName)
  
}
  return (
    <>
    <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title> <FontAwesomeIcon icon={faList} className='text-warning me-3'/><span className='textStyle'>Add Category</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='textStyle'>Please Fill The Form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value )} />
      </Form.Group> 
      
    </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addcategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category