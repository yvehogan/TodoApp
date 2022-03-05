import React from 'react';
import Moonlight from '../Components/assets/moonlight.jpg';

const Navbar = (props) => {
  return (
    <>
      <div className="flex flex-row justify-around items-center py-3 mb-3">
        <div className="flex justify-between items-center">
          <h2 className='text-white'>MovieDatabase</h2>
   
        </div>
        <form>
          <label>
            <input className='outline-none rounded p-2 bg-white'
            type="search" name=""
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type here to search'  />
          </label>  
        </form>
      </div>
      <div>
        
      </div>
      <img className=' w-screen h-screen object-cover absolute' src={Moonlight} alt="" srcset="" />
    </>
  );
}

export default Navbar;  