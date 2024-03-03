import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true,
        },
        content:{
            type: String,
            required:true,
        },
         title:{
            type: String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            default:"https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg"
        },
        category:{
            type:String ,
            default:"uncategorized"
        },
        slug:{
            unique:true,
            type:String,
            required:true,
        }
    }, {timestamps:true}
)

const Post = mongoose.model("Post", postSchema)
export default Post