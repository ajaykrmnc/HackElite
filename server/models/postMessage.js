import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: {
        type: String,
        default: "ajay",
    },
    tags: {
        type: [String],
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    creatorId: {
        type: String,
        default: 'ajay'
    },
    clothType: {
        type: String
    },
    imgUrl: 
    {
        type: String
    },
    category: {
        type: String
    }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;