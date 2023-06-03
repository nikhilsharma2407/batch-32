import React from 'react'

function User(props) {
    console.log(props);
    const { userData } = props
    return (
        // style={{display:'flex', alignItems:'center'}}
        // <div style={{display:'flex', alignItems:'center'}}>
        <div>
            <span>{userData.firstName}</span>
            <img src={userData.picture} height="100px" width="100px" />
        </div>
    )
}

export default User