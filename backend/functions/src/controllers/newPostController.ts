import {Request, Response} from "express";
import * as admin from "firebase-admin";
import Post from "../interface/Post";

const db = admin.firestore();
const postCollection = "posts";

const newPost = async (req: Request, res: Response) => {
  try {
    const post: Post = {
      title: req.body["title"],
      text: req.body["text"],
      author: req.body["author"],
    };

    await db.collection(postCollection).add(post);
    res.status(201).send(`Post created sucessfully in ${new Date()}`);
  } catch (error) {
    res.status(400).send("Post should contain title, text and author");
  }
};

export default newPost;

