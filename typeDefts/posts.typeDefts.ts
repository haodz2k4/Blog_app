import {gql} from 'apollo-server-express';
export const typeDeftsPosts = gql`
    type Post {
        id: String,
        title: String,
        content: String,
        status: String,
        category_id: String,
        createdBy: String,
        deleted: String
    }
    type Query {
        posts: [Post]
        post(id: String): Post  
    }


`