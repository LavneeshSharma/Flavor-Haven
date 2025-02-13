import React, { useContext, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import "./Navbar.css"
import {logout_icon,logo,bag_icon,basket_icon,search_icon,profile_icon} from '../../assets/frontend_assets/assets';
import {StoreContext} from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate("/")
    }
  return (
    <div className='navbar'>
       <Link to='/'><img src={logo} alt="" className='logo'/></Link>
       <ul className="navbar-menu">
         <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>home</Link>
         <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>menu</a>
         <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</a>
         <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>contact us</a>
       </ul>
       <div className="navbar-right">
          <img src={search_icon} alt=""/>
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
          :
          <div className='navbar-profile'>
               <img src={profile_icon} alt=''/>
               <ul className="navbar-profile-dropdown">
                   <li><img src={bag_icon} alt=''/>
                     <p>Orders</p>
                   </li>
                   <hr />
                   <li onClick={logout}><img src={logout_icon} alt=''/>
                     <p>Logout</p>
                   </li>
               </ul>
          </div>
            }
       </div>
    </div>
  )
}

export default Navbar
