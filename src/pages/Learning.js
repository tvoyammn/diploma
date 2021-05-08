import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import videosImage from '../images/videosImage.jpg'
import audioImage from '../images/audioImage.png'
import articleImage from '../images/articleImage.png'

export default class learning extends Component {
    render() {
        return (
            <>
                <Container>  
                    <h1>Learning</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '288px', height: '416px' }}>
                                <Card.Img variant="top" src={videosImage} style={{width: '287px', height: '225px' }} />
                                <Card.Body>
                                    <Card.Title>Medical Videos</Card.Title>
                                    <Card.Text>
                                    Medical content presented as video.
                                    </Card.Text>
                                    <Button variant="info" href='/learning/videos'> Watch </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '288px', height: '416px' }}>
                                <Card.Img variant="top" src={audioImage} style={{width: '287px', height: '225px' }} />
                                <Card.Body>
                                    <Card.Title>Medical Audios</Card.Title>
                                    <Card.Text>
                                    Medical content presented as audio.
                                    </Card.Text>
                                    <Button variant="info" href="/learning/audios" > Listen </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '288px', height: '416px' }}>
                                <Card.Img variant="top" src={articleImage} style={{width: '287px', height: '225px' }} />
                                <Card.Body>
                                    <Card.Title>Medical Articles</Card.Title>
                                    <Card.Text>
                                    Medical content presented as articles.
                                    </Card.Text>
                                    <Button variant="info" href="/learning/articles" > Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
