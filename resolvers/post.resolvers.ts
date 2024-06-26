import Post from '../models/post.model';
interface Id {
    id: string
}
interface Post {
    title: string,
    content: string,
    status: string,
    category_id: string,
    createdBy: string,
}
interface createPostArgs {
    post: Post
}
export const resolversPosts = {
    Query : {
        posts: async () => await Post.find(),
        post: async (_: unknown, {id}: Id) => {
            const post = await Post.findOne({
                _id: id
            })
            return post;
        }   
    },
    Mutation: {
        createPost: async (_: unknown, args: createPostArgs) =>{
            const {post} = args;
            const record = new Post(post);
            await record.save();
            return record;
        }
    }
}