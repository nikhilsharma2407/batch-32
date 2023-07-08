import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { CameraVideoFill, Images, EmojiLaughingFill } from 'react-bootstrap-icons'
import './styles.scss'

function CreatePost() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className='post-container'>
                        <section className='post-container__input'>
                            <input type="text" placeholder="What's on your mind" />
                            <input type="text" placeholder="Image URL" />
                        </section>

                        <section className='post-container__button'>
                            <Button variant='outline-primary'>Post</Button>
                            <div>
                                <CameraVideoFill style={{ color: 'red'}}/>
                                <h5>Live Video!!!</h5>
                            </div>
                            <div>
                                <Images style={{ color: 'green' }} />
                                <h5>Photo/Video</h5>
                            </div>
                            <div>
                                <EmojiLaughingFill style={{ color: 'yellow' }} />
                                <h5>Feeling/Activity</h5>
                            </div>
                        </section>

                    </Card>
                </Col>
            </Row>

        </Container>

    )
}

export default CreatePost