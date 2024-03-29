import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rozet from './Rozet';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/authSlice';


function Navs() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = () => {
    navigate("/basket")
  }

  const handleLogout = ()=>{
    dispatch(clearUser())
  }
  const navigate = useNavigate()
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          
      <div className="flex flex-wrap justify-evenly gap-3 items-center">

        <div>
        {/* <img src="https://www.logo.wine/a/logo/O_Shopping/O_Shopping-Logo.wine.svg" className=" h-24 mr-3" alt="Flowbite Logo" /> */}
        <img src="https://img.ws.mms.shopee.com.my/c08f6bd387562ff7dcbb2ec5ce1a8c4b" className=" h-20 mr-3" alt="" />
        </div>  
        

          
      </div>

      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">

              <div className="flex justify-between items-center">

                  <ul className="flex flex-wrap justify-center items-center gap-2">
                      <li>
                          <Link to="/" className='text-md hover:bg-slate-200 hover:rounded-sm p-3'>Home</Link>
                      </li>
                     
                  </ul>

                  <ul className='flex justify-center items-end'>
                    {user?.email && (<li>
                      <Link className='text-md hover:bg-slate-200 hover:rounded-sm p-3' to='/login' onClick={handleLogout}>Logout</Link>
                      </li>)}
                      {!user?.email&&( <li>
                      <Link className='text-md hover:bg-slate-200 hover:rounded-sm p-3' to='/login'>Login</Link>
                      </li>)}
                 
                      <li>
                      <Link className='text-md hover:bg-slate-200 hover:rounded-sm p-3' to="/register">Register</Link>
                      </li>
                    <li>
                      <Link to="/basket"><Rozet/></Link>
                    </li>
                  
                  </ul>
              </div>
          </div>
      </nav>


     </>
  );
}
export default Navs;