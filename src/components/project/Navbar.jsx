import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import localImg from '../../assets/images/image.png'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to='/'><img src={localImg} alt="logo" className="myntra-logo" /></Link>
        </div>

        {/* Categories Section */}
        <div className="nav-links">
          <Link className="nav-item" to='/men'>MEN</Link>
          <Link className="nav-item" to='/product'>WOMEN</Link>
          
          {/* <Link className="nav-item" to='/'>KIDS</Link> */}
          {/* <Link className="nav-item" to='/'>HOME & LIVING</Link>
          <Link className="nav-item" to='/'>BEAUTY</Link> */}
          <Link className="nav-item" to='/'>STUDIO <span className="new-tag">NEW</span></Link>
        </div>

        {/* Search Bar Section */}
        <div className="search-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for products, brands and more" className="search-input" />
          </div>
        </div>

        {/* User Actions Section */}
        <div className="user-actions">
          <div className="action-item">
            <span className="action-icon">👤</span>
            <span className="action-label">Profile</span>
          </div>
          <div className="action-item">
            <span className="action-icon">❤️</span>
            <span className="action-label">Wishlist</span>
          </div>
          <Link to='/cart' className="action-item" style={{textDecoration: 'none', color: 'inherit'}}>
            <span className="action-icon">👜</span>
            <span className="action-label">Bag</span>
          </Link>
        </div>
      </nav>

      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  )
}


























// export const Navbar = () => {
//   return (
//     <div>
//         <nav className="navbar">
//         <div style={{fontWeight: 900, fontSize: '24px', color: '#ff3f6c'}}>Drobe Collection</div>
//         <div className="nav-links">

        
//         <Link to='/'>Home</Link>
//         <Link to='/about'>About</Link>
//         <Link to='/product'>Product</Link>
//         <Link to='/cart'>Cart</Link>
//         </div>

//         <div style={{width: '100px'}}></div> {/* Spacer */}
//         </nav>


        




//         <div className="container">
      
//           <Outlet></Outlet>
//         </div>  
//     </div>
//   )
// }
