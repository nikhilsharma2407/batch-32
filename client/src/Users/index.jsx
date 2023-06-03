import React, { useEffect, useState } from 'react'
import axios from "axios"
import User from '../User';
function Users() {
    const URL = 'https://dummyapi.io/data/v1/user?limit=10';
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = (await axios.get(URL, {
                headers: { "app-id": '6404aa48e04d670642b100c6' }
            })).data
            console.log(data);
            setUsers(data)
        })()
    }, [])


    return (
        <>
            {/* <h1>{userData[0]? userData[0].name:null}</h1> */}
            {/* <h1>{userData[0]?.name}</h1> */}

            {/* {userData.map(user => {
                return <div>
                    <span>{user.firstName}</span>
                    <img src={user.picture} height="100px" width="100px"/>
                </div>
            })}
             */}
            {users.map(user => {
                return <User userData={user} key={user.id}/>
            })}


        </>
    )
}

export default Users