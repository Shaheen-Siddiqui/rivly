import React from "react";
import { GoStopwatch } from "react-icons/go";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="hero-main-section">
      <div>
        <div className="hero-section">
          <div>
            <img
              src="https://e0.pxfuel.com/wallpapers/890/376/desktop-wallpaper-youtube-play-button.jpg"
              alt=""
            />
            <h2>
              Why shop <br /> on Rivly?
            </h2>
          </div>

          <h1>
            Shop everything you need <br /> online from the US <br />
            bussinesses <span>You Love</span>
          </h1>

          <img
            src="https://www.myfood24.org/wp-content/uploads/2023/08/200k-Products-Twitter-Post.png"
            alt="--"
          />
        </div>
        {/* <p>And for a limited time only</p> */}
      </div>

      <div className="align-boxex">
        <div className="first-box">
          <div className="stars-align">
            <span>
              <AiTwotoneStar size={15} />
            </span>
            <span>
              <AiTwotoneStar size={15} />
            </span>
            <span>
              <AiTwotoneStar size={15} />
            </span>
            <span>
              <AiTwotoneStar size={15} />
            </span>
            <span>
              <BsStarHalf size={12} />
            </span>
          </div>

          <span>
            <h1>+15K</h1>
            <strong>Product Reviews</strong>
          </span>

          <p>
            Real identity- <br />
            verified reviews you can trust
          </p>
        </div>

        <section className="middle-section">
          <div>
            <p>And for a limited time only</p>
            <button>
              Join the Rivly United for FREE <FiArrowUpRight />
            </button>
            <br />
            <span>Shop all products</span>
          </div>

          <div className="same-size-box">
            <div>
              <img
                src="https://wallpapers.com/images/hd/pink-dress-1920-x-1080-wallpaper-opfaumyvngs44gsm.jpg"
                alt=""
              />
              <p>
                Quality <br />
                Products from local businesses
              </p>
            </div>

            <div className="three">
              <img
                src="https://www.webfx.com/wp-content/uploads/2023/08/15_circular_images_css.png"
                alt=""
              />

              <div>
                <h2>5,000+</h2>
                <p>Certified Brands</p>
              </div>
            </div>

            <div className="four">
              <div>
                <h2>10%+</h2>
                <p>Up to 10% back on all purchases</p>
              </div>

              <div>
                <GoStopwatch size={30} />
                <p>Free, fast, and reliable shipping</p>
              </div>
            </div>
          </div>
        </section>

        <div className="first-box" id="five-box">
          <p>
            See how Rivly sellers compare to sites like Amazon, Etsy, and others
          </p>
          <span>
            <hr />
            <strong>learn more</strong>
          </span>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
