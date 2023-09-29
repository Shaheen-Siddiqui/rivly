import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <nav className="nav-main-case">
      <div className="top-nav">
        <h1 onClick={()=>navigate('/')}>Rivly</h1>

        <div className="dipart-case">
          <div>
            <img
              src="https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg"
              alt=""
            />
            <img
              src="https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg"
              alt="Mphoto"
            />
            <br />
            <img
              src="https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg"
              alt="Mphoto"
            />
            <img
              src="https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg"
              alt="Mphoto"
            />
          </div>
          <div>
            <h2>DEPARTMENTS</h2>
            <span>+7 Categories</span>
            <strong>
              View All <span>&rarr;</span>
            </strong>
          </div>
        </div>

        <div className="searc-case">
          <span>
            <CiSearch size={15} />
          </span>

          <input
            className="default-none"
            type="text"
            placeholder="I'am Shopping for"
          />
        </div>
        <div className="separate-case">

          <div className="cart-case" onClick={()=>navigate('/cart')  }>
            <div>
              <AiOutlineShoppingCart size={15} />
            </div>
            <span>2</span>
          </div>

          <div className="total-price-case">
            <div>R</div> <span> $0.00</span>
          </div>

          <div className="user-space">
            <img
              src="https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg"
              alt=""
            />
            <span>Ryan</span>
            <span>
              <BiChevronDown />
            </span>
          </div>

        </div>
      </div>

      {/* <div>
        <ul>
          <li>Populer Products</li>
          <li>Favorite Brands</li>
          <li>Best Deals</li>
          <li>Top Peviews</li>
          <li>Highest Rewards</li>
          <li>Recently Viewe</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Header;
