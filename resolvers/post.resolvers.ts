import Post from '../models/post.model';

interface Post {
    title: string,
    content: string,
    status: string,
    category_id: string,
    createdBy: string,
}
interface postArgs {
    id: String,
    post: Post
}
export const resolversPosts = {
    Query : {
        posts: async () => await Post.find(),
        post: async (_: unknown, {id}: postArgs) => {
            const post = await Post.findOne({
                _id: id
            })
            return post;
        }   
    },
    Mutation: {
        createPost: async (_: unknown, args: postArgs) =>{
            const {post} = args;
            const record = new Post(post);
            await record.save();
            return record;
        },
        updatePost: async (_: unknown, args: postArgs ) =>{
            const {post, id} = args;

            await Post.updateOne({
                _id: id
            },post)

            return await Post.findById(id);
        }
    }
    
}