import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addCategory, deleteCategory, getAllCategory } from '../services/AllApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState({});
  const [allCategory,setAllCategory] = useState([]);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleaddCategory();
    }
  }
  
  const handleaddCategory = async() => {
    
    if (!categoryName) {
        alert("Please Fill the Form")
      }
    else {
      let body = {
        categoryName:categoryName,
        allVideos:[],
      }
      const response = await addCategory(body);
      if (response.status == 201) {
        toast.success(`${categoryName} Successfully Added`);
        handleClose();
        setCategoryName("");
      }
      else {
        toast.error("Something Went Wrong")
  
      }
    }
  }
  const getCategory = async ()=> {
    const response = await getAllCategory();
    const{data} = response;
    setAllCategory(data);

  }

  useEffect(() => {
    getCategory();
  }, [])
  
  const handleDelete = async (categoryId) => {
    const result = await deleteCategory(categoryId);
    console.log("delete Response");
    console.log(result);
    if (result.status === 200) {
      toast.success(`${categoryName} deleted`)
      getCategory();
  }
  else {
      toast.error("Some thing went wrong")
  }
}
const videoDrop = async (e) => {
  console.log("===on drop===")
}

  return (
    <>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      
      {
        allCategory?.length > 0 ? 
        allCategory?.map((item) => (
          <div key={item.id} className='m-3 border border-secondary p-3 rounded'  droppable onDrop={(e) =>videoDrop(e)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='text-white'>{item?.categoryName}</h6>
              <Button className='btn btn-danger' onClick={() => handleDelete(item?.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
        )):<p>No Category Found</p>
      }
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title> <FontAwesomeIcon icon={faList} className='text-warning me-3'/><span className='textStyle'>Add Category</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='textStyle'>Please Fill The Form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value )} onKeyDown={handleKeyDown}/>
      </Form.Group> 
      
    </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleaddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category