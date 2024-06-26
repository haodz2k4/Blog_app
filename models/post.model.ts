import { Schema, model } from "mongoose";
interface Post {
    title: string;
    content: string;
    thumbnail: string, 
    status: ("active"|"inactive"),
    category_id: string,
    deleted: boolean,
    slug: string,
    createdBy: string,
    createdAt: Date,
    updatedAt: Date
}
const postSchema = new Schema<Post>({
    title: String,
    content: String,
    thumbnail: String,
    status: String,
    slug: String,
    category_id: String,
    createdBy: String,
    deleted: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
})

export default model("post",postSchema,"posts")