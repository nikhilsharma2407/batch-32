const rawData = [
    {
        "id": "60d21b4667d0d8992e610c85",
        "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
        "likes": 43,
        "text": "adult Labrador retriever",
        "date": "2020-05-24T14:53:17.598Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ca",
            "name": "Sara Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
        }
    },
    {
        "id": "60d21b4967d0d8992e610c90",
        "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
        "likes": 31,
        "text": "ice caves in the wild landscape photo of ice near ...",
        "date": "2020-05-24T07:44:17.738Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a0b",
            "name": "Margarita Vicente",
            "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
        }
    },
    {
        "id": "60d21b8667d0d8992e610d3f",
        "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
        "likes": 16,
        "text": "@adventure.yuki frozen grass short-coated black do...",
        "date": "2020-05-24T05:44:55.297Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ed",
            "name": "Kayla Bredesen",
            "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
        }
    },
    {
        "id": "60d21b3a67d0d8992e610c60",
        "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
        "likes": 7,
        "text": "Hiking with my dog in the woods. black labrador re...",
        "date": "2020-05-23T22:56:11.424Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d5",
            "name": "Sibylle Leibold",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        }
    },
    {
        "id": "60d21bf967d0d8992e610e9b",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "likes": 28,
        "text": "Two boys hug their dogs in a leaf pile in the fall...",
        "date": "2020-05-23T18:52:32.613Z",
        "owner": {
            "id": "60d0fe4f5311236168a109f7",
            "name": "Jolanda Lacroix",
            "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
        }
    },
    {
        "id": "60d21b7d67d0d8992e610d25",
        "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
        "likes": 18,
        "text": "Bone salt and pepper schnauzer puppy",
        "date": "2020-05-23T14:42:22.808Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e4",
            "name": "Pwry Shylyrd",
            "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
        }
    },
    {
        "id": "60d21bd767d0d8992e610e31",
        "image": "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg",
        "likes": 19,
        "text": "Sleeping dogs lie two dogs lying on black textile",
        "date": "2020-05-23T12:55:22.576Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a0f",
            "name": "Kaya Basoglu",
            "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
        }
    },
    {
        "id": "60d21baa67d0d8992e610da7",
        "image": "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
        "likes": 242,
        "text": "Dog in a forest at sunset dog in forest with sun r...",
        "date": "2020-05-22T22:27:12.912Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a29",
            "name": "Vanessa Ramos",
            "picture": "https://randomuser.me/api/portraits/med/women/33.jpg"
        }
    },
    {
        "id": "60d21af967d0d8992e610ba1",
        "image": "https://img.dummyapi.io/photo-1568572933382-74d440642117.jpg",
        "likes": 79,
        "text": "black and white Husky",
        "date": "2020-05-22T20:05:03.653Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e4",
            "name": "Pwry Shylyrd",
            "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
        }
    },
    {
        "id": "60d21aeb67d0d8992e610b79",
        "image": "https://img.dummyapi.io/photo-1579562243430-4732bcb09d91.jpg",
        "likes": 17,
        "text": "Milo durmiendo después de un largo día de jugar en...",
        "date": "2020-05-22T07:50:38.093Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ce",
            "name": "Rudi Droste",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
        }
    },
    {
        "id": "60d21bad67d0d8992e610daf",
        "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
        "likes": 12,
        "text": "Gratitude short-coated tan dog on seashore",
        "date": "2020-05-22T06:33:02.593Z",
        "owner": {
            "id": "60d0fe4f5311236168a109dd",
            "name": "Miguel Lima",
            "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
        }
    },
    {
        "id": "60d21bee67d0d8992e610e79",
        "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
        "likes": 43,
        "text": "@adventure.yuki peekaboo adult short-coated black ...",
        "date": "2020-05-22T03:10:54.820Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e6",
            "name": "Milla Pollari",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        }
    },
    {
        "id": "60d21bd267d0d8992e610e21",
        "image": "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
        "likes": 92,
        "text": "front view of black and white puppy sitting on bro...",
        "date": "2020-05-21T22:15:26.266Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a12",
            "name": "Kenneth Carter",
            "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
        }
    },
    {
        "id": "60d21b1a67d0d8992e610c05",
        "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
        "likes": 15,
        "text": "Random man walking with his dogs man and dogs on t...",
        "date": "2020-05-21T15:53:26.275Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e7",
            "name": "Joey Oliver",
            "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
        }
    },
    {
        "id": "60d21be267d0d8992e610e52",
        "image": "https://img.dummyapi.io/photo-1580734075803-ac9cdb54fb03.jpg",
        "likes": 3,
        "text": "Majestic looking dog on a lake white and brown sho...",
        "date": "2020-05-21T15:15:02.703Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e3",
            "name": "Vetle Aasland",
            "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
        }
    },
    {
        "id": "60d21b3667d0d8992e610c56",
        "image": "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
        "likes": 27,
        "text": "two puppies next to each other",
        "date": "2020-05-21T07:03:58.248Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a1a",
            "name": "Vaino Sakala",
            "picture": "https://randomuser.me/api/portraits/med/men/56.jpg"
        }
    },
    {
        "id": "60d21b0767d0d8992e610bcf",
        "image": "https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg",
        "likes": 54,
        "text": "two white dogs",
        "date": "2020-05-21T02:10:33.421Z",
        "owner": {
            "id": "60d0fe4f5311236168a109fa",
            "name": "Ann Mason",
            "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
        }
    },
    {
        "id": "60d21afd67d0d8992e610bad",
        "image": "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
        "likes": 20,
        "text": "A picture of my golden doodle, Yogi Bear white dog",
        "date": "2020-05-20T21:49:33.321Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a2c",
            "name": "Toralf Streicher",
            "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
        }
    },
    {
        "id": "60d21b0467d0d8992e610bc5",
        "image": "https://img.dummyapi.io/photo-1549937334-e94f33e69787.jpg",
        "likes": 5,
        "text": "long-coated brown dog",
        "date": "2020-05-20T21:00:40.371Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a0d",
            "name": "Lyam Morin",
            "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
        }
    },
    {
        "id": "60d21bf367d0d8992e610e88",
        "image": "https://img.dummyapi.io/photo-1564849444446-f876dcef378e.jpg",
        "likes": 40,
        "text": "A feral cat short-fur gray and orange cat on green...",
        "date": "2020-05-20T18:51:23.478Z",
        "owner": {
            "id": "60d0fe4f5311236168a109f4",
            "name": "Benjamin Holland",
            "picture": "https://randomuser.me/api/portraits/med/men/58.jpg"
        }
    },
    {
        "id": "60d21bbc67d0d8992e610dde",
        "image": "https://img.dummyapi.io/photo-1549029555-5074848335d1.jpg",
        "likes": 14,
        "text": "selective focus photography of brown dog lying on ...",
        "date": "2020-05-20T07:57:54.421Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a19",
            "name": "Debbie Garcia",
            "picture": "https://randomuser.me/api/portraits/med/women/86.jpg"
        }
    },
    {
        "id": "60d21bbf67d0d8992e610de6",
        "image": "https://img.dummyapi.io/photo-1504208434309-cb69f4fe52b0.jpg",
        "likes": 2225,
        "text": "Beautiful dog in most photographed place in Canada...",
        "date": "2020-05-20T04:57:33.445Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a12",
            "name": "Kenneth Carter",
            "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
        }
    },
    {
        "id": "60d21bd467d0d8992e610e26",
        "image": "https://img.dummyapi.io/photo-1557976606-d068b9719915.jpg",
        "likes": 41,
        "text": "brown and white short coated puppy lying on grass ...",
        "date": "2020-05-19T22:56:15.213Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ce",
            "name": "Rudi Droste",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
        }
    },
    {
        "id": "60d21b7d67d0d8992e610d27",
        "image": "https://img.dummyapi.io/photo-1546975554-31053113e977.jpg",
        "likes": 77,
        "text": "white dog on ground",
        "date": "2020-05-19T08:26:29.436Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d9",
            "name": "Nuria Leon",
            "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"
        }
    },
    {
        "id": "60d21b7f67d0d8992e610d2b",
        "image": "https://img.dummyapi.io/photo-1577849304422-d019fdd6f29f.jpg",
        "likes": 25,
        "text": "Dogs black and brown Yorkshire Terrier",
        "date": "2020-05-19T02:55:23.015Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e3",
            "name": "Vetle Aasland",
            "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
        }
    },
    {
        "id": "60d21bd367d0d8992e610e25",
        "image": "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
        "likes": 6,
        "text": "Being a proud owner of a frenchie... That means lo...",
        "date": "2020-05-19T02:16:25.689Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d4",
            "name": "Valentin Ortega",
            "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
        }
    },
    {
        "id": "60d21bcf67d0d8992e610e16",
        "image": "https://img.dummyapi.io/photo-1562221440-aba53beefed2.jpg",
        "likes": 45,
        "text": "person touching dog's head",
        "date": "2020-05-18T21:14:50.181Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a2b",
            "name": "Angelica Roussel",
            "picture": "https://randomuser.me/api/portraits/med/women/53.jpg"
        }
    },
    {
        "id": "60d21b4667d0d8992e610c87",
        "image": "https://img.dummyapi.io/photo-1583381872273-a4a9e8d157ab.jpg",
        "likes": 6,
        "text": "My dog Cody looking super excited.  brown short co...",
        "date": "2020-05-18T15:52:46.051Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a28",
            "name": "OcÃ©ane Denis",
            "picture": "https://randomuser.me/api/portraits/med/women/51.jpg"
        }
    },
    {
        "id": "60d21bbe67d0d8992e610de4",
        "image": "https://img.dummyapi.io/photo-1582835173528-d2d1ecb87ab6.jpg",
        "likes": 8,
        "text": "white black and brown long coated small dog",
        "date": "2020-05-18T15:43:41.918Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a14",
            "name": "Cameron Mendoza",
            "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
        }
    },
    {
        "id": "60d21b7f67d0d8992e610d2c",
        "image": "https://img.dummyapi.io/photo-1536809188428-e8ecf663d0be.jpg",
        "likes": 149,
        "text": "Sun Bathing adult gold golden retriever lying on f...",
        "date": "2020-05-17T20:54:33.648Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a10",
            "name": "Nenad Leroy",
            "picture": "https://randomuser.me/api/portraits/med/men/62.jpg"
        }
    },
    {
        "id": "60d21bea67d0d8992e610e6a",
        "image": "https://img.dummyapi.io/photo-1569796922509-d2846284929e.jpg",
        "likes": 29,
        "text": "close-up photo of white English Bulldog",
        "date": "2020-05-17T16:08:18.433Z",
        "owner": {
            "id": "60d0fe4f5311236168a109cd",
            "name": "Roberto Vega",
            "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
        }
    },
    {
        "id": "60d21be767d0d8992e610e63",
        "image": "https://img.dummyapi.io/photo-1575852495205-c3dc13f32d8c.jpg",
        "likes": 9,
        "text": "Engagement photos at the north campus at Universit...",
        "date": "2020-05-17T15:32:45.012Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a2a",
            "name": "Susie Harrison",
            "picture": "https://randomuser.me/api/portraits/med/women/20.jpg"
        }
    },
    {
        "id": "60d21b6467d0d8992e610ce0",
        "image": "https://img.dummyapi.io/photo-1548658166-136d9f6a7e76.jpg",
        "likes": 501,
        "text": "yawning white and brown short coated puppy",
        "date": "2020-05-17T10:43:24.011Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d1",
            "name": "Kent Brewer",
            "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
        }
    },
    {
        "id": "60d21b1d67d0d8992e610c0e",
        "image": "https://img.dummyapi.io/photo-1583336663277-620dc1996580.jpg",
        "likes": 16,
        "text": "Hypebeasts brown and white dog wearing pink and bl...",
        "date": "2020-05-17T04:54:41.680Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a07",
            "name": "Sigmund Myran",
            "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
        }
    },
    {
        "id": "60d21bc967d0d8992e610e06",
        "image": "https://img.dummyapi.io/photo-1477973770766-6228305816df.jpg",
        "likes": 462,
        "text": "short-coated gray dog near green leafed plants",
        "date": "2020-05-16T17:50:31.367Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a24",
            "name": "Katie Hughes",
            "picture": "https://randomuser.me/api/portraits/med/women/74.jpg"
        }
    },
    {
        "id": "60d21b8067d0d8992e610d2e",
        "image": "https://img.dummyapi.io/photo-1547480643-88ac656b7cfc.jpg",
        "likes": 21,
        "text": "dog prawn laying on concrete outside during daytim...",
        "date": "2020-05-16T07:29:53.796Z",
        "owner": {
            "id": "60d0fe4f5311236168a109df",
            "name": "Anaelle Dumas",
            "picture": "https://randomuser.me/api/portraits/med/women/25.jpg"
        }
    },
    {
        "id": "60d21bca67d0d8992e610e08",
        "image": "https://img.dummyapi.io/photo-1527973025938-d60fdcbc9ece.jpg",
        "likes": 35,
        "text": "A Walk in the Beach two black and tan dog on beach",
        "date": "2020-05-16T04:29:33.975Z",
        "owner": {
            "id": "60d0fe4f5311236168a109fd",
            "name": "Dylan Vasquez",
            "picture": "https://randomuser.me/api/portraits/med/men/66.jpg"
        }
    },
    {
        "id": "60d21b2f67d0d8992e610c3f",
        "image": "https://img.dummyapi.io/photo-1579178460072-07b6cebedf5f.jpg",
        "likes": 22,
        "text": "Alaskan Malamute black and white wolf",
        "date": "2020-05-16T02:42:34.573Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d8",
            "name": "Karoline Sviggum",
            "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"
        }
    },
    {
        "id": "60d21b7767d0d8992e610d15",
        "image": "https://img.dummyapi.io/photo-1590178534645-de019aa7255e.jpg",
        "likes": 0,
        "text": "Two dogs playing on the grass with a plastic bottl...",
        "date": "2020-05-16T02:17:38.636Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ce",
            "name": "Rudi Droste",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
        }
    },
    {
        "id": "60d21b9e67d0d8992e610d85",
        "image": "https://img.dummyapi.io/photo-1550206574-96bbd259b685.jpg",
        "likes": 76,
        "text": "This is Ruby. I heard somewhere that dogs get a su...",
        "date": "2020-05-15T06:42:12.347Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a1f",
            "name": "David Ramos",
            "picture": "https://randomuser.me/api/portraits/med/men/30.jpg"
        }
    },
    {
        "id": "60d21bc167d0d8992e610deb",
        "image": "https://img.dummyapi.io/photo-1524675772159-ea8ff66a947d.jpg",
        "likes": 64,
        "text": "I took this photo during my trip in Swedish Laplan...",
        "date": "2020-05-15T04:11:48.350Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e2",
            "name": "Heinz-Georg Fiedler",
            "picture": "https://randomuser.me/api/portraits/med/men/81.jpg"
        }
    },
    {
        "id": "60d21b3f67d0d8992e610c6f",
        "image": "https://img.dummyapi.io/photo-1589469526983-0887ebe10072.jpg",
        "likes": 2,
        "text": "Cooling off in the fountain white and black short ...",
        "date": "2020-05-14T16:28:10.135Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a13",
            "name": "Jan Siebert",
            "picture": "https://randomuser.me/api/portraits/med/men/60.jpg"
        }
    },
    {
        "id": "60d21bc367d0d8992e610df2",
        "image": "https://img.dummyapi.io/photo-1587463272361-565200f82b33.jpg",
        "likes": 149,
        "text": "Millie, the Cocker Spaniel self-isolating during t...",
        "date": "2020-05-14T14:53:11.654Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a09",
            "name": "Clea Dubois",
            "picture": "https://randomuser.me/api/portraits/med/women/11.jpg"
        }
    },
    {
        "id": "60d21bc267d0d8992e610dee",
        "image": "https://img.dummyapi.io/photo-1556955163-2ba8c049db4a.jpg",
        "likes": 33,
        "text": "adult long-coated white and black dog",
        "date": "2020-05-14T14:41:35.893Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ea",
            "name": "Mhrs Hsyny",
            "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
        }
    },
    {
        "id": "60d21b3067d0d8992e610c45",
        "image": "https://img.dummyapi.io/photo-1570944191904-4b0be46fe39a.jpg",
        "likes": 13,
        "text": "Border Collie Pup 6 weeks old has one blue eye. So...",
        "date": "2020-05-14T11:53:02.103Z",
        "owner": {
            "id": "60d0fe4f5311236168a109e5",
            "name": "Adrian Rodriguez",
            "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
        }
    },
    {
        "id": "60d21afb67d0d8992e610ba7",
        "image": "https://img.dummyapi.io/photo-1546772324-331b229106a4.jpg",
        "likes": 61,
        "text": "Can I have something to eat? close view of black a...",
        "date": "2020-05-14T07:50:25.770Z",
        "owner": {
            "id": "60d0fe4f5311236168a109f8",
            "name": "Signe Madsen",
            "picture": "https://randomuser.me/api/portraits/med/women/84.jpg"
        }
    },
    {
        "id": "60d21b8e67d0d8992e610d57",
        "image": "https://img.dummyapi.io/photo-1552248879-2b6b2a23c11a.jpg",
        "likes": 82,
        "text": "shallow focus photo of brown dog running on body o...",
        "date": "2020-05-14T06:34:02.980Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a00",
            "name": "Els Ijsseldijk",
            "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
        }
    },
    {
        "id": "60d21b9a67d0d8992e610d7a",
        "image": "https://img.dummyapi.io/photo-1512251275231-63e355f3d028.jpg",
        "likes": 42,
        "text": "short-coated black dog",
        "date": "2020-05-14T05:04:09.702Z",
        "owner": {
            "id": "60d0fe4f5311236168a109d3",
            "name": "Friedrich-Karl Brand",
            "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
        }
    },
    {
        "id": "60d21bf167d0d8992e610e83",
        "image": "https://img.dummyapi.io/photo-1516466723877-e4ec1d736c8a.jpg",
        "likes": 746,
        "text": "Its cold out there scenery of aurora",
        "date": "2020-05-13T23:33:08.447Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ec",
            "name": "Lucas Larsen",
            "picture": "https://randomuser.me/api/portraits/med/men/50.jpg"
        }
    },
    {
        "id": "60d21afc67d0d8992e610baa",
        "image": "https://img.dummyapi.io/photo-1457473075527-b0db85c08e66.jpg",
        "likes": 297,
        "text": "long-coated brown dog on white boat",
        "date": "2020-05-13T06:37:11.359Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a13",
            "name": "Jan Siebert",
            "picture": "https://randomuser.me/api/portraits/med/men/60.jpg"
        }
    }
]

const userData = [
    {
        "id": "60d0fe4f5311236168a109ca",
        "title": "ms",
        "firstName": "Sara",
        "lastName": "Andersen",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cb",
        "title": "miss",
        "firstName": "Edita",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cc",
        "title": "ms",
        "firstName": "Adina",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cd",
        "title": "mr",
        "firstName": "Roberto",
        "lastName": "Vega",
        "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109ce",
        "title": "mr",
        "firstName": "Rudi",
        "lastName": "Droste",
        "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cf",
        "title": "mrs",
        "firstName": "Carolina",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d0",
        "title": "mr",
        "firstName": "Emre",
        "lastName": "Asikoglu",
        "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d1",
        "title": "mr",
        "firstName": "Kent",
        "lastName": "Brewer",
        "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d2",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Carlson",
        "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d3",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "lastName": "Brand",
        "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    }
]

rawData.forEach(post => {
    const { firstName, lastName, id: _id, picture: profilePicture } = userData[~~(Math.random() * 100) % 10];
    const owner = { name: `${firstName} ${lastName}`, _id, profilePicture };
    console.log(owner);
    post.owner = owner;
    delete post.id
    post.isLiked = false;
    delete post.id;
});

console.log(rawData);
