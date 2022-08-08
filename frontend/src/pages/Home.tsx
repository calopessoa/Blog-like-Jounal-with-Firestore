import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allPostsURL } from '../routes/routes';
import { Post } from '../interface/Post';
import { AuthProps } from '../interface/AuthProps';
import { postURL } from '../routes/routes';

function Home({isAuth}: AuthProps) {
  const [postList, setPostlist] = useState<Post[]>([]);

  useEffect(() => {
    const getPost = () => {
      axios.get(allPostsURL)
        .then((response) => {
          const data = response.data
          if (response.status === 200)
          setPostlist([...data]);
        })
        .catch(error => console.log(error));
    }
    getPost();
  }, []);

  function deletePost(id: string) {
    const url = `${postURL}/${id}`;

    axios.delete(url)
      .then((response) => {
        if (response.status === 204)
        setPostlist(
          postList.filter((e) => {
            return e.id !== id;
          })
        )
      })
      .catch(error => console.log(error));

    }

  // const authorValidated = (post: any) => post.author.id === auth.currentUser?.uid;

  return (
    <>
      <div className='homePage'>{postList?.map((post: any) => {
        return <div className='post'>
          <div className='postHeader'>
            <div className='title'>
              <h2>{post?.title}</h2>
            </div>

          <aside className='deletePost'>
            <button onClick={() => deletePost(post?.id)}>&#x1F5D1;</button>
          </aside>

          </div>
          <article className='postTextContainer'>{post?.text}</article>
          <h3>@{post?.author?.name}</h3>
        </div>
      })}
      </div>
    </>
  )
}

export default Home;
