import  React, { useEffect, useState } from "react";
// import { addDoc, collection } from 'firebase/firestore'
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import { postURL } from '../routes/routes';
import axios from "axios";
import {AuthProps} from "../interface/AuthProps";

function CreatePost({ isAuth }: AuthProps) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const createPost = async () => {
    await axios.post(postURL, {
      title,
      text,
      author: { name: auth.currentUser?.displayName, id: auth.currentUser?.uid }
    })
      .then((response) => {
        if (response.status === 201)
        navigate("/");
      })
      .catch(error => console.log(error));
  }

  // prevents the user to hack the auth. requirement before creating a post;
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate])

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="title"
            onChange={({ target: { value }}) => { setTitle(value) }} />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="text"
            onChange={({ target: { value }}) => { setText(value) }} />
        </div>
        <button onClick={createPost} type="submit">Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost;