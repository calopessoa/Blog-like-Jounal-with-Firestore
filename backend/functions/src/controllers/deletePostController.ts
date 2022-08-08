import {Request, Response} from "express";
import * as admin from "firebase-admin";

const db = admin.firestore();
const postCollection = "posts";

const deletePost = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    await db.collection(postCollection).doc(id).delete();
    res.status(204).send("Post successfully deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default deletePost;

