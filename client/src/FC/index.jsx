import React, { useEffect, useState } from 'react'

function FC(props) {
    
    // useState hook;
    // let greeting = "abcd"
    const [greeting, setGreeting] = useState('Learning React');
    const [name, setName] = useState('Nikhil');
    const [id, setid] = useState(1)
    const [user, setuser] = useState(null);

    useEffect(() => {
        console.log("Component did mount life cycle");
        // fetch user details from api
        // setuser(apiData)
        return ()=>{
            console.log("unmounting functional component");
        }
     }, [])

    useEffect(() => {
        debugger
        console.log("greeting or name updated/initialised");
        console.log(greeting,name);
        // setid(10)
    }, [greeting,name])
    
    // const [id,setId] = useState('101');
    // setGreeting("new value");
    const titleCode = <h1>{greeting}</h1>
    console.log("render");
    return (
        <>
            {titleCode}
            <h2>React is easy</h2>
            <h2>{name} - {id}</h2>
            <button onClick={()=>setGreeting('New Greeting1')}>Update Greeting</button>
            <button onClick={()=>setName('Nikhil Sharma')}>Update Name</button>
            <input type="number" min="1" max="10" onChange={e=> setid(e.target.value)} />
        </>
    )
}

export default FC
