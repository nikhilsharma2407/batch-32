import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { CameraVideoFill, Images, EmojiLaughingFill } from 'react-bootstrap-icons'
import { POST_API } from '../apiUtils'
import './styles.scss'

function CreatePost({invokePostApi, postText, setPostText, image, setImage, }) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className='post-container'>
                        <section className='post-container__input'>
                            <input type="text" onChange={e=>setPostText(e.target.value)}  placeholder="What's on your mind" />
                            <input type="text" onChange={e=>setImage(e.target.value)} placeholder="Image URL" />
                        </section>

                        <section className='post-container__button'>
                            <Button variant='outline-primary' onClick={invokePostApi} disabled={!postText.length}>Post</Button>
                            <div>
                                <CameraVideoFill style={{ color: 'red' }} />
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