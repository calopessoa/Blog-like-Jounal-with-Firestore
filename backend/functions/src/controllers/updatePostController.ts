import {Request, Response} from "express";
import * as admin from "firebase-admin";

const db = admin.firestore();
const postCollection = "posts";

const updatePost = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const info = req.body;
    await db.collection(postCollection).doc(id).update(info);
    res.status(200).send("Post successfully updated");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default updatePost;
