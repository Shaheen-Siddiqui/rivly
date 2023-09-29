import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";
import "./ReviewTalks.css";

const ReviewTalks = () => {
  return (
    <main className="bubble-case">
      <h1>
        What our <br />
        reviews say
      </h1>

<div className="review-cards">
      <div className="card-case">
        <div>
          <p>5 Aug 2023</p>
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
              <BsStarHalf size={18} />
            </span>
          </div>
        </div>

        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur quam, fugiat iste vel enim quae eum, dolor voluptatem illo
            totam adipisci rem? A, aspernatur quae placeat deleniti inventore
            asperiores!
          </strong>
        </p>

        <h1>
          <BiSolidQuoteRight size={40} />
        </h1>

        <div className="reviewr-space">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="user-face"
          />
          <div>
            <h3>Pohel sikakuria</h3>
            <p>24 Years</p>
          </div>
        </div>
      </div>

      <div className="card-case">
        <div>
          <p>5 Aug 2023</p>
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
              <BsStarHalf size={18} />
            </span>
          </div>
        </div>

        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur quam, fugiat iste vel enim quae eum, dolor voluptatem illo
            totam adipisci rem? A, aspernatur quae placeat deleniti inventore
            asperiores!
          </strong>
        </p>

        <h1>
          <BiSolidQuoteRight size={40} />
        </h1>

        <div className="reviewr-space">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="user-face"
          />
          <div>
            <h3>Pohel sikakuria</h3>
            <p>24 Years</p>
          </div>
        </div>
      </div> <div className="card-case">
        <div>
          <p>5 Aug 2023</p>
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
              <BsStarHalf size={18} />
            </span>
          </div>
        </div>

        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur quam, fugiat iste vel enim quae eum, dolor voluptatem illo
            totam adipisci rem? A, aspernatur quae placeat deleniti inventore
            asperiores!
          </strong>
        </p>

        <h1>
          <BiSolidQuoteRight size={40} />
        </h1>

        <div className="reviewr-space">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="user-face"
          />
          <div>
            <h3>Pohel sikakuria</h3>
            <p>24 Years</p>
          </div>
        </div>
      </div>
</div>

      <div className="pagination-case">
        <button>&larr;</button>6<span>----</span>9<button>&rarr;</button>
      </div>
    </main>
  );
};

export default ReviewTalks;
