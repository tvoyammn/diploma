import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';

import AddVideoModal from '../components/AddVideoModal'
import VideosList from '../components/VideosList'

export default function Videos() {
    const [isOpen, setOpen] = useState(false)

    const openModal = () => setOpen(true);

    const closeModal = () => setOpen(false);

    return (
        <>
        <Container>
            <h1>Videos</h1>
            <Button onClick={openModal}>Add Video</Button>
            { isOpen ? 
            <AddVideoModal 
                closeModal={closeModal} 
                isOpen={isOpen}
                id={1}
            />
                : 
                null 
            }

            <VideosList />
        </Container>
        </>
    )
    
}
