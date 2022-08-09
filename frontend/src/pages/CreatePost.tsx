import  { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import { postURL } from '../routes/routes';
import axios from "axios";
import {AuthProps} from "../interface/AuthProps";

function CreatePost({ isAuth }: AuthProps) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  // prevents the user to hack the auth. requirement before creating a post;
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    const validatePost = () => {
      const minNumber = 2;
      if (title.length >= minNumber && text.length > minNumber) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    validatePost();
    }, [title, text])

  const createPost = async () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    await axios.post(postURL, {
      title,
      text,
      author: { name: auth.currentUser?.displayName, id: auth.currentUser?.uid },
      date,
      completed: false,
    })
      .then((response) => {
        if (response.status === 201)
        navigate("/");
        console.log(date);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Your title must have at least 2 characters"
            onChange={({ target: { value }}) => { setTitle(value) }} />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Your text must have at least 3 characters"
            onChange={({ target: { value }}) => { setText(value) }} />
        </div>
        <button
          onClick={createPost}
          type="submit"
          disabled={disabled}
        >
          Submit post
        </button>
      </div>
    </div>
  )
}

export default CreatePost;