import React from "react";
import vg from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are one and only solution to the tech problems you face every
            day. We are leading tech company whose aim is to increase the
            problem solving ability in childeren.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae ipsum quaerat facilis accusantium adipisci omnis hic
            cumque nihil, odio voluptatibus minima fugit ratione, eum inventore
            corrupti laudantium dignissimos eligendi Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Adipisci corporis quia voluptatem
            maiores eveniet reprehenderit repudiandae aliquam ducimus fugiat
            dolorem tempora, hic cum assumenda facilis pariatur! Animi quos,
            repudiandae exercitationem nulla voluptates beatae modi nostrum?
            Harum assumenda, molestias natus possimus unde deserunt obcaecati
            culpa atque, nostrum itaque perferendis est quibusdam facilis
            voluptas eos placeat delectus mollitia id minima soluta impedit
            optio error similique aliquid? Repellat cumque, animi qui quae atque
            accusantium earum, ab voluptas aliquam, nemo possimus architecto
            officia nobis quidem fugit neque incidunt optio quibusdam? Officiis
            non vel mollitia et blanditiis voluptatum ducimus aperiam sunt
            voluptatibus
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:".9s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
