import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {user,signOutUser} = useAuth()
    const links = <>
        <NavLink to={"/"} className={({ isActive, isPending }) => `${isPending ? sppiner : isActive ? "text-orange-400 underline underline-offset-8 transition-all duration-500" : undefined}`}>Home</NavLink>
    </>
    const handleSignOut = () =>{
        signOutUser()
        .then(() => console.log("Sign-out successful."))
        .catch((error) => console.log(error))
    }
    return (
        <>
            <div className="navbar bg-black text-white backdrop-blur-sm fixed z-10 lg:px-10 justify-between p-0">
                <div>
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        {
                            toggle ? <CgClose size={25} /> : <BiMenu size={25} />
                        }
                        <div className={`flex font-medium gap-2 mt-5 flex-col w-full duration-1000 absolute bg-base-100 px-4 py-4 shadow-md ${toggle ? "left-0" : "-left-[100%]"}`}>
                            {links}
                        </div>
                    </div>
                   <div className='flex items-center gap-2'>
                   <a href="/"><img className='w-24 h-12 object-cover' src={logo} alt="" /></a>
                   <a href='/' className='uppercase font-font-family text-shadow animate__animated animate__lightSpeedInLeft animate__delay-1s'>Toyota</a>
                   </div>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu gap-5 font-medium menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="gap-4">
                    {user ? 
                <>
                <img title={user?.displayName} referrerPolicy="no-referrer" className="w-10 cursor-pointer h-10 btn-circle" src={user?.photoURL} alt="" />
                <NavLink onClick={handleSignOut} className={({ isActive, isPending }) => `  ${isPending ? sppiner : isActive ? "text-green-500 underline underline-offset-8" : ""}`}>Sign Out</NavLink>
                </>
               : 
               <>
                <NavLink to={"/register"} className={({ isActive, isPending }) => `font-medium ${isPending ? sppiner : isActive ? "text-green-500 underline underline-offset-8" : ""}`}>Register</NavLink>
                <NavLink to={"/login"} className={({ isActive, isPending }) => `font-medium ${isPending ? sppiner : isActive ? "text-green-500 underline underline-offset-8" : ""}`}>Login</NavLink>
               </>
               }
                </div>
            </div>
            <div className='flex fixed z-10 w-full lg:px-10 my-16'>
            <div className='border border-orange-500 flex-[2]'></div>
            <div className='border border-green-500 flex-[3]'></div>
        </div>
        </>
    );
};

export default Navbar;