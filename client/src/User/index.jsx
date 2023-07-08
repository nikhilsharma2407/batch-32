import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { addFriendActionCreator, removeFriendActionCreator } from '../reducers/userReducer';
import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { useNavigate } from 'react-router-dom';


function User(props) {

    const dispatch = useDispatch();
    const { username } = useSelector(state => state);

    const navigate = useNavigate();

    // console.log(props);
    const { userData: { firstName, lastName, title, picture, id }, isFriend } = props;
    // const fullName = title + ' '+firstName+' '+lastName;
    const fullName = `${title} ${firstName} ${lastName}`;

    const removeFreind = () => {
        dispatch(removeFriendActionCreator({ id, name: `${firstName} ${lastName}` }))
    }
    const addFriend = () => {
        if (username) {
            dispatch(addFriendActionCreator({ id, name: `${firstName} ${lastName}` }))
        } else {
            // navigate to login page
            navigate('/login', { state: { from: '/' } });

        }
    }

    return (
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} md={5} lg={4} xl={3}>
            <Card className='user'>
                <Card.Body className='user-card'>
                    <img src={picture} height="100px" width="100px" />
                    <div className='info'>
                        <div>{fullName}</div>
                        {isFriend ? <Button variant="outline-danger" onClick={removeFreind}>Remove Friend</Button> :
                            <Button variant="outline-primary" onClick={addFriend}>Add Friend</Button>
                        }


                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User