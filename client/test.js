const promise = Promise.resolve("api data");

// promise.then(data=>{
//     console.log(data);
//     setState(data);
//     apiCall(data).then(data2=>{
//         console.log(data2);
//     });
// });

const fn = async () => {
    const data = await promise;
    // console.log(data);
    return data
    // setState(data);
    // const data2 = await apiCall(data);
    // console.log(data2);
}
console.log(fn())

// {} -> brackets
// () -> parenthesis


// IIFE  - Immediately Invoked Function Expression
// (async()=>{
//     const data = await promise;
//     console.log(data);
//     // setState(data);
//     // const data2 = await apiCall(data);
//     // console.log(data2);
// })()


{/* <section>
        <Link to=''>Home</Link>
        <br />
        <Link to='flex'>Flexbox</Link>
        <br />
        <Link to='routing'>Routing</Link>
        <br />
        {/* <Link to='parent'>Routing</Link>
        <Link to='/parent/child-route'>Child route Absolute</Link>
        <br /> */}

const friendList = [
    "60d0fe4f5311236168a109ca",
    "60d0fe4f5311236168a109cb"
];

result = [
    { "owner.id": "60d0fe4f5311236168a109ca" },
    { "owner.id": "60d0fe4f5311236168a109cb" },
];

const query = friendList.map(id => {
    return { "owner.id" : id }
});

console.log(query);


