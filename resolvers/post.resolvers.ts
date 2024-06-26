import Post from '../models/post.model';
interface Id {
    id: string
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
    }
}