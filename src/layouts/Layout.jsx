import React from 'react'
import Footer from '../components/Footer'
import PizzaLogo from '../assets/images/pizza1.png'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'
import carticon from '../assets/images/cart.svg'
import { getcartdetails } from '../Redux/Slices/CartSlice'
const Layout = ({children}) => {
    const carts = useSelector((state) => state.cart);
    const navigate=useNavigate()
    const dispatch= useDispatch();

    const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn)
    console.log(isLoggedIn)

    async function handlelogout(e){
        e.preventDefault();
        dispatch(logout());
    }


    async function fetchCartDetails() {
        const res = await dispatch(getcartdetails());
        console.log("cart details", res)
        if(res?.payload?.isUnauthorized) {
            console.log("unauthorized");
            dispatch(logout());
        }
    }

    useEffect(() => {
        console.log(typeof(isLoggedIn))
        if(isLoggedIn) {
            fetchCartDetails();
        }
    }, []);

  return (
    <div>
        <nav className='flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md'>
            <div className='flex items-center justify-center '
                onClick={()=> navigate('/')}
            >
                <p>Pizza App</p>
                <img src={PizzaLogo} alt='Pizza Logo'/>
            </div>
            <div className='hidden md:block '>
                <ul className='flex  gap-8 inset-x-0 '>
                    <li className='hover:text-[#FF9110]'> 
                        {'  '}
                        <p>Menu{' '}</p>
                    </li>
                    <li className='hover:text-[#FF9110]'> 
                        {'  '}
                        <p>Services{' '}</p>
                    </li>
                    <li className='hover:text-[#FF9110]'> 
                        {'  '}
                        <p>About{' '}</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#FF9110]'>
                        {isLoggedIn?(
                            <Link onClick={handlelogout}>Logout</Link>
                        ):(
                            <Link to='/auth/login'> Login</Link>
                        ) }
                    </li>

                    { isLoggedIn && (
                        <Link to={'/cart'}>
                            <li>
                                <img src={carticon} className='w-8 h-8 inline'/>
                                {'  '}
                                {/* {carts?.cartsData?.item?.length} */}
                                <p className='text-red inline'>{carts?.cartsData?.item?.length}</p>
                            </li>
                        </Link>
                    )}

                </ul>
            </div>

                    
        </nav>
        {children}
       <Footer />
    </div>
  )
}

export default Layout