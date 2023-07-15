// const promise = Promise.resolve("api data");

// // promise.then(data=>{
// //     console.log(data);
// //     setState(data);
// //     apiCall(data).then(data2=>{
// //         console.log(data2);
// //     });
// // });

// const fn = async () => {
//     const data = await promise;
//     // console.log(data);
//     return data
//     // setState(data);
//     // const data2 = await apiCall(data);
//     // console.log(data2);
// }
// console.log(fn())

// // {} -> brackets
// // () -> parenthesis


// // IIFE  - Immediately Invoked Function Expression
// // (async()=>{
// //     const data = await promise;
// //     console.log(data);
// //     // setState(data);
// //     // const data2 = await apiCall(data);
// //     // console.log(data2);
// // })()


// {/* <section>
//         <Link to=''>Home</Link>
//         <br />
//         <Link to='flex'>Flexbox</Link>
//         <br />
//         <Link to='routing'>Routing</Link>
//         <br />
//         {/* <Link to='parent'>Routing</Link>
//         <Link to='/parent/child-route'>Child route Absolute</Link>
//         <br /> */}

// const friendList = [
//     "60d0fe4f5311236168a109ca",
//     "60d0fe4f5311236168a109cb"
// ];

// result = [
//     { "owner.id": "60d0fe4f5311236168a109ca" },
//     { "owner.id": "60d0fe4f5311236168a109cb" },
// ];

// const query = friendList.map(id => {
//     return { "owner.id" : id }
// });

// console.log(query);

const originalData = [
    {
        "owner": {
            "name": "Sara Andersen",
            "_id": "60d0fe4f5311236168a109ca",
            "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "_id": "64aac68f6700385310b5ef1a",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "likes": 29,
        "text": "Two boys hug their dogs in a leaf pile in the fall...",
        "date": "2020-05-23T18:52:32.613Z",
        "isLiked": true
    },
    {
        "owner": {
            "name": "Edita Vestering",
            "_id": "60d0fe4f5311236168a109cb",
            "profilePicture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        "_id": "64aac68f6700385310b5ef1c",
        "image": "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg",
        "likes": 19,
        "text": "Sleeping dogs lie two dogs lying on black textile",
        "date": "2020-05-23T12:55:22.576Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Edita Vestering",
            "_id": "60d0fe4f5311236168a109cb",
            "profilePicture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        "_id": "64aac68f6700385310b5ef20",
        "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
        "likes": 12,
        "text": "Gratitude short-coated tan dog on seashore",
        "date": "2020-05-22T06:33:02.593Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Sara Andersen",
            "_id": "60d0fe4f5311236168a109ca",
            "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "_id": "64aac68f6700385310b5ef21",
        "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
        "likes": 43,
        "text": "@adventure.yuki peekaboo adult short-coated black ...",
        "date": "2020-05-22T03:10:54.820Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Edita Vestering",
            "_id": "60d0fe4f5311236168a109cb",
            "profilePicture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        "_id": "64aac68f6700385310b5ef2c",
        "image": "https://img.dummyapi.io/photo-1557976606-d068b9719915.jpg",
        "likes": 41,
        "text": "brown and white short coated puppy lying on grass ...",
        "date": "2020-05-19T22:56:15.213Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Sara Andersen",
            "_id": "60d0fe4f5311236168a109ca",
            "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "_id": "64aac68f6700385310b5ef2f",
        "image": "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
        "likes": 6,
        "text": "Being a proud owner of a frenchie... That means lo...",
        "date": "2020-05-19T02:16:25.689Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Sara Andersen",
            "_id": "60d0fe4f5311236168a109ca",
            "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "_id": "64aac68f6700385310b5ef3d",
        "image": "https://img.dummyapi.io/photo-1550206574-96bbd259b685.jpg",
        "likes": 76,
        "text": "This is Ruby. I heard somewhere that dogs get a su...",
        "date": "2020-05-15T06:42:12.347Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Edita Vestering",
            "_id": "60d0fe4f5311236168a109cb",
            "profilePicture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        "_id": "64aac68f6700385310b5ef41",
        "image": "https://img.dummyapi.io/photo-1556955163-2ba8c049db4a.jpg",
        "likes": 33,
        "text": "adult long-coated white and black dog",
        "date": "2020-05-14T14:41:35.893Z",
        "isLiked": false
    },
    {
        "owner": {
            "name": "Sara Andersen",
            "_id": "60d0fe4f5311236168a109ca",
            "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "_id": "64aac68f6700385310b5ef47",
        "image": "https://img.dummyapi.io/photo-1457473075527-b0db85c08e66.jpg",
        "likes": 297,
        "text": "long-coated brown dog on white boat",
        "date": "2020-05-13T06:37:11.359Z",
        "isLiked": false
    },
    {
        "owner": {
            "_id": "64aac00630e1fe4f17b4e525",
            "name": "Nikhil"
        },
        "_id": "64aadc106fbe742e2021fdf6",
        "text": "abcd",
        "date": "2023-07-09T16:10:56.131Z",
        "__v": 0
    }
]


const dataToBeUpdated = {
    "owner": {
        "name": "ABCD",
        "_id": "60d0fe4f5311236168a109ca",
        "profilePicture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    "_id": "64aac68f6700385310b5ef1a",
    "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
    "likes": 9999,
    "text": "Two boys hug their dogs in a leaf pile in the fall...",
    "date": "2020-05-23T18:52:32.613Z",
    "isLiked": false
};


const newData = originalData.map(e=>{
    if (e._id === dataToBeUpdated._id){
        return dataToBeUpdated
    }
    return e
});

console.log(newData);