import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BrainObserver1 from '../components/BrainObserver1';
import BrainObserver2 from '../components/BrainObserver2';

export default class comparation extends Component {
    render() {
        return (
            <>
                <h1>Comparation</h1>
                <Container>    
                    <Row>
                        <Col>
                            <BrainObserver1 />
                        </Col>
                        <Col />
                        <Col>
                            <BrainObserver2 />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
