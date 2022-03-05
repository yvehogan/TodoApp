import React from 'react';

const Homepage = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => (
          <div className=' w-48 h-auto  inline-block mt-2 relative bg-black '>
            <div className='border border-b-fuchsia-200 rounded p-2'>
              <h3 className='text-white truncate mb-2'>{movie.Title}</h3>
              <img className='' src={movie.Poster} alt="Movie" />
            </div>
           
          </div>
        ))}
    </>
  );
};

export default Homepage;