import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import {
  BsFillArrowUpRightCircleFill,
  BsStarHalf,
  BsCart3,
} from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { AiTwotoneStar, AiFillDownCircle,AiOutlineStar } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCropRotate } from "react-icons/md";

import "./Cart.css";

const Cart = () => {
  return (
    <main className="single-product-case">
      <section className="product">
        <aside className="sidebar">
          <img
            src="https://media.qechic.com/product/silla-de-madera-50-x-525-x-42785-cm-800x800.jpg"
            alt=""
          />
          <img
            src="https://media.qechic.com/product/silla-de-madera-50-x-525-x-42785-cm-800x800.jpg"
            alt=""
          />
          <img
            src="https://media.qechic.com/product/silla-de-madera-50-x-525-x-42785-cm-800x800.jpg"
            alt=""
          />
          <img
            src="https://media.qechic.com/product/silla-de-madera-50-x-525-x-42785-cm-800x800.jpg"
            alt=""
          />

          <CiCircleChevDown size={30} />
          <AiFillDownCircle size={30} />
        </aside>

        <img
          src="https://mohh.com/wp-content/uploads/2020/01/Sequa-Chair-450x450.jpg"
          alt=""
          className="hero-image"
        />
      </section>
      <section className="details">
        <h1>Armchair HUNDESTED</h1>
        <strong>
          by <u>Zenna</u> <BsFillArrowUpRightCircleFill />
        </strong>

        <div className="stars-align">
          <span>
            <AiTwotoneStar size={20} />
          </span>
          <span>
            <AiTwotoneStar size={20} />
          </span>
          <span>
            <AiTwotoneStar size={20} />
          </span>
          <span>
            <AiTwotoneStar size={20} />
          </span>
          <span>
            <AiOutlineStar size={20} />
          </span>
          &nbsp;
          <span>4.5</span>
          &nbsp;&nbsp;&nbsp;
          <TbMessageDots size={20} /> <sup>110 Reviews</sup>
        </div>

        <div className="shipping-detail">
          <h1>
            $900
            <sup>
              <small>$20.99</small>
            </sup>
            <small>you will save 75</small>
          </h1>

          <LiaShippingFastSolid size={20} />
          <span>Free Shipping</span>
          <MdCropRotate size={20} />
          <span>Free Returns</span>
        </div>

        <p className="normal-fonts">
          <strong>Colors Available: </strong>Green
        </p>

        <div className="color-match">
          <img
            src="https://mohh.com/wp-content/uploads/2020/01/Sequa-Chair-450x450.jpg"
            alt=""
          />
          <img
            src="https://mohh.com/wp-content/uploads/2020/01/Sequa-Chair-450x450.jpg"
            alt=""
          />
          <img
            src="https://mohh.com/wp-content/uploads/2020/01/Sequa-Chair-450x450.jpg"
            alt=""
          />
        </div>

        <p className="normal-fonts">
          <strong>Select Size: Large</strong> &nbsp;&nbsp; Size Guide &nbsp;
          &rarr;
        </p>
        <div>

        <button className="size-btn">Small</button>
        <button className="size-btn">Medium</button>
        <button className="size-btn">Large</button>
        </div>


        <div>
          <button className="size-btn ext-paddding">
            Buy1 <br /> &36,00/ <sub>ea</sub>
          </button>
          <button className="size-btn ext-paddding">
            Buy2 <br /> &36,00/ <sub>ea</sub>
          </button>
          <button className="size-btn ext-paddding">
            Buy3 <br /> &36,00/ <sub>ea</sub>
          </button>
          <button className="size-btn ext-paddding">
            Buy <br /> More
          </button>
        </div>

          <button className="button">
            <BsCart3 /> Add to cart &nbsp; . &nbsp; $243.98
          </button>
      </section>
    </main>
  );
};

export default Cart;
