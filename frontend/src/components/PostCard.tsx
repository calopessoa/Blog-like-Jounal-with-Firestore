import axios from 'axios';
import { postURL } from '../routes/routes';
import { auth } from '../firebase-config';

function PostCard({postList, setPostList, isAuth, searchValue}: any) {

  function deletePost(id: string) {
    const url = `${postURL}/${id}`;

    axios.delete(url)
      .then((response) => {
        if (response.status === 204)
        setPostList(
          postList.filter((e: { id: string; }) => {
            return e.id !== id;
          })
        )
      })
      .catch(error => console.log(error));
  }

  const authorValidated = (post: any) => post.author.id === auth.currentUser?.uid;

  function renderPosts(post: { title: string; }) {
      if (searchValue === '') {
        return post
      } else if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return post;
      }
  };

  return (
    <>
      <div className='homePage'>
        {postList?.filter(renderPosts).map((post: any, index: number) => {
        return (
          <div key={post.id}>
            {isAuth && authorValidated(post) &&
          <div className='post'>
          <div className='postHeader'>

          <div className='title'>
            <h2>{post?.title}</h2>
          </div>
          <section className='buttons-space'>

            <aside className='deletePost'>
              <button onClick={() => deletePost(post?.id)}>&#x1F5D1;</button>
            </aside>
          </section>

          </div>

          <article className='postTextContainer'>{post?.text}</article>

          <article className='post-end'>
            <h4 className='post-author'>@{post?.author?.name}</h4>
            <h4 className='post-date'>criado em {post.date}</h4>
          </article>
          </div>
            }
          </div>
          )
        })}
        </div>
    </>
  )
}

export default PostCard;
