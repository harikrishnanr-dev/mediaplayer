import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function VideoCard({ displayVideo }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        
        <Card style={{ width: '18rem' }} className="mt-4" >
                <Card.Img variant="top" src={displayVideo.imageUrl}
                    height={'250px'} style={{ padding: '5px' }} onClick={handleShow}/>
                <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title >{displayVideo.caption.slice(0,20) }...</Card.Title>
                            <Button variant="danger"><FontAwesomeIcon icon={faTrash }/></Button>
                        </div>
                </Card.Body>
            </Card>
            <Modal
        show={show}
        onHide={handleClose}
        data-bs-theme='dark'
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white">{displayVideo.caption }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <iframe width="100%" height="315" src={`${displayVideo.youtubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default VideoCard;
