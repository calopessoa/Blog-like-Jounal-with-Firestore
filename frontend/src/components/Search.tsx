import { useState } from 'react';
import searchIcon from '../assets/searchIcon.svg';
import '../App.css';

function Search({ postList, setSearchValue }: any) {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <>
      <img
          className='search'
          role="presentation"
          width={28}
          src={searchIcon}
          alt="search"
          onClick={() => setToggleSearch(!toggleSearch)}
        />

     { toggleSearch &&
      <form
        onSubmit={ () => {
        setToggleSearch(false);
      } }>
        <section className="search-input">
          <input
            placeholder='Search by title...'
            onChange={({ target: { value } }) => setSearchValue(value)}
          />
        </section>
      </form>}
    </>
  );
}

export default Search;
