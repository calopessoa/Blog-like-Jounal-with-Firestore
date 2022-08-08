// import libraries
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import getAllPosts from "./controllers/getAllPostsController";
import newPost from "./controllers/newPostController";
import findPostById from "./controllers/findPostController";
import updatePost from "./controllers/updatePostController";
import deletePost from "./controllers/deletePostController";
// import Post from "./interface/Post";

// admin.firestore().collection("posts");

// initialize express server
const app = express();
const main = express();

app.use(cors());

// add the path to receive request and set json as bodyParser
//  to process the body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// initialize the database and the collection
// const db = admin.firestore();
// const postCollection = "posts";

// define google cloud function name
export const webApi = functions.https.onRequest(main);

app
    .get("/posts", (req, res) => getAllPosts(req, res))
    .get("/post/:id", (req, res) => findPostById(req, res));

app.post("/post", newPost);
app.put("/post/:id", updatePost);
app.delete("/post/:id", deletePost);

// exports.api = functions.https.onRequest(app);
