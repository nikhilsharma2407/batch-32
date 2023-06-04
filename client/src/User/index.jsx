import React from 'react'
import { Button, Card } from 'react-bootstrap';
import "./style.css"
function User(props) {
    console.log(props);
    const { userData } = props
    return (
        <Card className='flex-container'>
            <Card.Body>
                <img src={userData.picture} height="100px" width="100px" />
                <div className='info'>
                    <div>{userData.firstName}</div>
                    <Button variant="outline-primary">Add Friend</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default User