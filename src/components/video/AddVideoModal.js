import React, { useState } from 'react'
import {  Button, Modal, Form } from 'react-bootstrap';
import firebase from '../util/firebase'

export default function AddVideoModal(props) {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
  
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    };
    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    };

    const handleSubmit = (title, url) => {
        const videoRef = firebase.database().ref("Videos")
        const video = {
            id: props.id,
            title: title,
            url: url
        }
        videoRef.push(video)

        props.closeModal()
    }
  
      return(
        <Modal 
          show={props.isOpen} 
          onHide={props.closeModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group >
                <Form.Label>Title </Form.Label>
                <Form.Control type="text" onChange={handleTitleChange} value={title} placeholder="Enter title"/>           
            </Form.Group>
            <Form.Group>
                <Form.Label>Url</Form.Label>
                <Form.Control as="textarea" onChange={handleUrlChange} value={url} placeholder="Enter url" rows={2} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={() => handleSubmit(title, url)}>
                Add
            </Button>
        </Modal.Footer>
      </Modal>
      )
    }