import axios from 'axios';
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { allPostsURL } from '../routes/routes';
import PostCard from '../components/PostCard';

function Home({isAuth, searchValue, setPostList, postList}: any) {
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = () => {
      axios.get(allPostsURL)
        .then((response) => {
          const data = response.data
          if (response.status === 200)
            setPostList([...data]);
        })
        .catch(error => console.log(error));
    }
    getPost();
  }, [setPostList]);


  return (
    <>
      { isAuth ? <PostCard postList={postList} setPostList={setPostList} isAuth={isAuth} searchValue={searchValue} />
      : navigate("/login") }
    </>
  )
}

export default Home;
