import express from 'express'

import { getPosts,createPost,getPost,updatePost,deletePost,getPostsByTags } from '../controllers/posts.js';
const router= express.Router();
router.get("/",getPosts);
router.post("/",createPost);
router.get("/:id",getPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);
router.get("/",getPostsByTags);


export default router;