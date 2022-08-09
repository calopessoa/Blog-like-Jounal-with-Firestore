import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { auth } from './firebase-config';
import { signOut } from "firebase/auth";
import { Post } from './interface/Post';

import './App.css';
import Search from './components/Search';

function App() {
  const authUser = localStorage.getItem('isAuth');
  const [isAuth, setIsAuth] = useState(authUser as any);
  const [searchValue, setSearchValue] = useState('');
  const [postList, setPostList] = useState<Post[]>([]);

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  }

  return (
    <BrowserRouter>
      <nav>
      <Link to='/'>Home</Link>
      {!isAuth
          ? (<Link to='/login'>Login</Link>)
          : (
            <>
              <Link to='/createpost'>Create Post</Link>
              <Link to='/login' onClick={logOut}>Log out</Link>
            </>
          )}
        <Search className="search-bar" postList={postList} setSearchValue={setSearchValue} />
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} searchValue={searchValue} setPostList={setPostList} postList={postList} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
