import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { ChatLeft, HandThumbsUp, HandThumbsUpFill, TrashFill } from 'react-bootstrap-icons'
import Avatar from 'react-avatar';
import './styles.scss'

function Post({ data, like, deletePost }) {

    const { owner: { name, profilePicture, _id: ownerId }, likes, isLiked, _id, date, text, image } = data



    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className='view-post-container'>
                        <section className='view-post-container__user'>
                            <Avatar size='50' name={name} src={profilePicture} round />
                            <section className='view-post-container__user-info'>
                                <div>{name}</div>
                                <div>{new Date(date).toDateString()}</div>
                            </section>

                            {/* timestamp */}
                        </section>

                        <section className='view-post-container__data'>
                            <div>{text}</div>
                            {image ? <img src={image} /> : null}
                        </section>

                        <section className='view-post-container__button'>
                            <div>
                                {isLiked ? <HandThumbsUpFill onClick={() => like(_id)} style={{ color: 'dimgray' }} /> :
                                    <HandThumbsUp onClick={() => like(_id)} />}

                                <h5>{likes}</h5>
                                {/* <h5>Like Post</h5> */}
                            </div>
                            <div>
                                <ChatLeft />
                                <h5>Comments</h5>
                            </div>
                            <div onClick={()=>deletePost(_id)}>
                                <TrashFill style={{ color: 'red' }}  />
                                <h5>Delete Post</h5>
                            </div>
                        </section>

                    </Card>
                </Col>
            </Row>

        </Container>

    )
}

export default Post