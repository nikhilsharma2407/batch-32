import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import "./style.css"
function User(props) {
    // console.log(props);
    const { userData: { firstName, lastName, title, picture } } = props;
    // const fullName = title + ' '+firstName+' '+lastName;
    const fullName = `${title} ${firstName} ${lastName}`;
    return (
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} md={5} lg={4} xl={3}>
            <Card className='user'>
                <Card.Body className='user-card'>
                    <img src={picture} height="100px" width="100px" />
                    <div className='info'>
                        <div>{fullName}</div>
                        <Button variant="outline-primary">Add Friend</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User