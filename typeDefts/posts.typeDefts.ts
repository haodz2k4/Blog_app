import {gql} from 'apollo-server-express';
export const typeDeftsPosts = gql`
    type Post {
        id: String,
        title: String,
        content: String,
        status: String,
        category_id: String,
        createdBy: String,
        deleted: Boolean
    }
    type Query {
        posts: [Post]
        post(id: String): Post  
    }
    input postInp {
        title: String,
        content: String,
        status: String,
        category_id: String,
        createdBy: String,
    }
    type Mutation {
        createPost(post: postInp): Post
        updatePost(post: postInp, id: String): Post
    }


`