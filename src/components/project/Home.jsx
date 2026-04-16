import React from 'react'
import banner from '../../assets/hero_images/1.png'
import casualWear from '../../assets/hero_images/casualwear.png'
import activewear from '../../assets/hero_images/active wear.png'
import footwear from '../../assets/hero_images/footwear.png'
import accessories from '../../assets/hero_images/accessories.png'

export const Home = () => {
  return (
   <div className="home-container">
      {/* Main Hero Banner */}
      <div className="hero-banner">
        <img src={banner} alt="Mega Fashion Sale Banner" className="banner-img" />
      </div>

      <div className="home-content">
        <h2 className="section-title">DEALS OF THE DAY</h2>
        
        {/* Offer Banners Row */}
        <div className="offers-row">
          <div className="offer-card">
            <img src={casualWear} alt="Offer 1" className="offer-img" />
            <div className="offer-info">
              <h3>Casual Wear</h3>
              <p>40-70% OFF</p>
              <span>Shop Now</span>
            </div>
          </div>

          <div className="offer-card">
            <img src={activewear} alt="Offer 2" className="offer-img" />
            <div className="offer-info">
              <h3>Activewear</h3>
              <p>Min 50% OFF</p>
              <span>Shop Now</span>
            </div>
          </div>

          <div className="offer-card">
            <img src={footwear} alt="Offer 3" className="offer-img" />
            <div className="offer-info">
              <h3>Footwear</h3>
              <p>Up to 60% OFF</p>
              <span>Shop Now</span>
            </div>
          </div>

          <div className="offer-card">
            <img src={accessories} alt="Offer 4" className="offer-img" />
            <div className="offer-info">
              <h3>Accessories</h3>
              <p>Flat 30% OFF</p>
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
