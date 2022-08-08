import {Request, Response} from "express";
import * as admin from "firebase-admin";

const db = admin.firestore();
const postCollection = "posts";

const findPostById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const postId = await db.collection(postCollection).doc(id).get();
    if (!postId.exists) {
      res.status(404).send("Unable to find the post by this id");
    } else {
      res.send(postId.data());
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export default findPostById;
