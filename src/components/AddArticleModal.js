import React, { useState } from 'react'
import {  Button, Modal, Form } from 'react-bootstrap';
import firebase from '../util/firebase'

export default function AddArticleModal(props) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
  
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    };
    const handleTextChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = (title, text) => {
        const articleRef = firebase.database().ref("Articles")
        console.log(articleRef)
        const article = {
            id: props.id,
            title: title,
            text: text
        }
        articleRef.push(article)

        props.closeModal()
    }
  
      return(
        <Modal 
          show={props.isOpen} 
          onHide={props.closeModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>Add Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group >
                <Form.Label>Title </Form.Label>
                <Form.Control type="text" onChange={handleTitleChange} value={title} placeholder="Enter title"/>           
            </Form.Group>
            <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" onChange={handleTextChange} value={text} placeholder="Enter text" rows={3} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={() => handleSubmit(title, text)}>
                Add
            </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  
