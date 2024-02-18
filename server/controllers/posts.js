import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts= async(req,res) =>
{
    try{
        const postMessage= await PostMessage.find();
        res.status(200).json(postMessage)
    }
    catch (error){
        res.status(404).json({error});
    }
}

export const createPost = async (req, res) => {
    const values = req.body;

    const newPostMessage = new PostMessage(values)

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getPost= async(req,res)=>{
    const {id}= req.params;
    try{
        const post= await PostMessage.findById(id);
        res.status(200).json(post);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }

}

export const getPostsByTags = async (req, res) => {
    const { tags } = req.query;
    console.log(tags)
    // Convert tags to an array if it's a comma-separated string
    const tagList = Array.isArray(tags) ? tags : [tags];
    
    try {
        const filteredPosts = await PostMessage.find({ tags: { $in: tagList } });
        res.json(filteredPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePost = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({message: "Post deleted successfully"});
}


export const updatePost= async (req,res) =>{
    const {id} = req.params;
    const { title ,message, creator, selectFile, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

    const updatedPost= {creator,title,message,tags,selectedFile,_id: id};
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});
    res.json(updatedPost);
}

export default router;