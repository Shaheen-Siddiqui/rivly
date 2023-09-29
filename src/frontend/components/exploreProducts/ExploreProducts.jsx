import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../../../App.css";

import "./ExploreProducts.css";

const ExploreProducts = () => {
  return (
    <main className="explore-main-case">
      <section className="exp-sec-first">
        <h1>Explore Products</h1>

        <div className="one same-sections">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-teen-boy-uniform-playing-badminton-serving-shuttlecock-racket-isolated-over-blue-purple-background-neon-ligth-265687172.jpg"
            alt=""
            className="prod-img-size"
          />
         
        </div>

        <div className="same-sections">
          <img
            src="https://st.depositphotos.com/47153598/59514/i/450/depositphotos_595148964-stock-photo-happy-kid-swimming-suit-doughnut.jpg"
            alt=""
            className="prod-img-size"
          />
          <span>
            <h2>
              Love the swim <br /> you're in
            </h2>
            <p>Shop Now</p>
          </span>
          <div className="up-arrow">
            <FiArrowUpRight size={20} />
          </div>
        </div>

        <div className="last-two-section">
          <div className="shop-categories">
            <img
              src="https://i5.walmartimages.com/seo/Simple-Designs-Sand-Nickel-Mini-Basic-Table-Lamp-with-Fabric-Shade_4753e8c7-d3fd-427d-b803-19d834284282.01756666457a5931dbe93a75ffb64478.jpeg"
              alt=""
              className="prod-img-size"
            />

            <span className="up-arrow">
              <FiArrowUpRight size={20} />
            </span>
            <div className="bottom-info">
              <span>
                <h3>Create amazing lignting</h3>
                <p>Show Now</p>
              </span>
              <button className="button" id="btn-size">$79</button>
            </div>
          </div>

          <div className="shop-categories">
            <span>
            <button>Clothing</button>
            <button>Accessories</button>
            <button>Baby</button>
            <button>Pets</button>
            <button>School & Office</button>
            <button>Handmade</button>
            <button>Garden & Patio</button>
            </span>

            <div>
              <div className="bottom-info">
                <h3>View All Categories</h3>
                <button className="default-none">
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exp-sec-second exp-sec-first">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            reprehenderit! Asperiores 
          </p>
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
        </div>

        <div>
          <div className="shop-categories" id="shop-category-id">
            <img
              src="https://www.therange.co.uk/media/1/7/1683373299_12_5814.jpg"
              alt=""
              className="img-size"
            />
            <div className="bottom-info">
              <strong>Minimal Rose Armchair</strong>
              <button className="button" id="btn-size">$890</button>
            </div>
          </div>

          <div className="shop-categories" id="shop-category-id">
            <img
              src="https://www.bigw.com.au/medias/sys_master/images/images/h2c/ha5/44129272791070.jpg"
              alt=""
              className="img-size"
            />
            <div className="bottom-info">
              <strong>Fullfill chair Armichar </strong>
              <button className="button" id="btn-size">$890</button>
            </div>
          </div>
        </div>

        <div className="same-sections">
          <img
            src="https://media.karousell.com/media/photos/products/2021/3/9/ikea_odger_chair_dark_blue_1615296257_6b722b0a_progressive.jpg"
            alt=""
            className="prod-img-size"
          />
          <span>
            <h2>
              Find the best <br /> Furniture!
            </h2>
            <p>Shop Now</p>
          </span>
          <div className="up-arrow">
            <FiArrowUpRight size={20} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreProducts;
