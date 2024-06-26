import express, {Application} from 'express';
import { connectDB } from './config/database';
import {ApolloServer} from 'apollo-server-express';
const app= express() as any;
import {typeDefts} from './typeDefts/index.typeDefts';
import {resolvers} from './resolvers/index.resolvers';

//start server here 
(async () => {
    //connect database
    connectDB();
    const server = new ApolloServer({
        typeDefs: typeDefts,
        resolvers
    })
    await server.start();
    server.applyMiddleware({
        app: app,
        path: "/graphql"

    })
    app.listen(3000,() =>{
        console.log("server is running on port " + 3000)
    })
})()



