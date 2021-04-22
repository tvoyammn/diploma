import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';

import AddArticleModal from '../components/AddArticleModal'
import ArticlesList from '../components/ArticlesList'


export default function Articles() {
    const [isOpen, setOpen] = useState(false)

    const openModal = () => setOpen(true);

    const closeModal = () => setOpen(false);

        return (
            <>
            <Container>
                <h1>Articles</h1>
                <Button onClick={openModal}>Add Articel</Button>
                { isOpen ? 
                <AddArticleModal 
                    closeModal={closeModal} 
                    isOpen={isOpen}
                    id={1}
                />
                    : 
                    null 
                }

                <ArticlesList />
            </Container>
            </>
        )
}
