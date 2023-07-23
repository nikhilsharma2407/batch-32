const express = require("express")
const { graphqlHTTP } = require("express-graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = require("graphql");

const { friendsData, userData } = require('./mock');

// {
//     "id": "1",
//     "title": "ms",
//     "firstName": "Sara",
//     "lastName": "Andersen",
//     "picture": "https://randomuser.me/api/portraits/women/58.jpg"
// },

const FriendType = new GraphQLObjectType({
    name: 'Friend',
    description: 'This is the Friend Object',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        picture: { type: GraphQLString },

        // custom field
        fullName: {
            type: GraphQLString,
            resolve: ({ title, firstName, lastName }) => `${title} ${firstName} ${lastName}`
        }
    }
});

//     username: 'nikhil101',
//     name: "Nikhil",
//     friendList: ['1', '2']

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This is the User Object',
    fields: {
        username: { type: GraphQLString },
        name: { type: GraphQLString },
        friendList: { type: GraphQLList(GraphQLString) },
        // custom field
        friends: {
            type: GraphQLList(FriendType),
            resolve: ({ friendList }) => friendList.map(id => friendsData
                .find((friend) => friend.id === id))
        }
    }
});

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is Query Object',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello World!!!'
        },
        friends: {
            type: GraphQLList(FriendType),
            resolve: () => friendsData,
        },
        users: {
            type: GraphQLList(UserType),
            resolve: () => userData
        },
        user: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, args) => userData.find(user => user.username === args.username)
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'This is Mutation Object',
    fields: {
        signup: {
            type: UserType,
            description: 'Create a new User account',
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { username, name } = args;
                const newUser = { username, name, friendList: [] };
                userData.push(newUser);
                return newUser;
            },
        },

        addFriend: {
            type: UserType,
            description: 'Add a new Friend',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { id } = args;
                const user = userData.find(({ username }) => username === args.username);
                user.friendList.push(id);
                return user;
            }
        },
        removeFriend: {
            type: UserType,
            description: 'Remove a new Friend',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const user = userData.find(({ username }) => username === args.username);
                user.friendList = user.friendList.filter(id => id !== args.id);
                return user;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query,
    mutation
})

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")