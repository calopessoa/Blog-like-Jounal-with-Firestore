import {Request, Response} from "express";
import * as admin from "firebase-admin";
// import { getDocs } from "firebase/firestore";
import Post from "../interface/Post";

const db = admin.firestore();
const postCollection = "posts";

const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const post = await db.collection(postCollection).get();
    const postArray: [] = [];
    if (post.empty) {
      res.status(404).send("No post have been found");
    } else {
      post.forEach((doc) => {
        const id = doc.id;
        console.log(doc);

        const post = new Post(
            id,
            doc.data().title,
            doc.data().text,
            doc.data().author,
            doc.data().date,
        );
        postArray.push(post as never);
      });
      res.send(postArray);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export default getAllPosts;
