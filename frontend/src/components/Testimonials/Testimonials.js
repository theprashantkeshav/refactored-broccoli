import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div>
      {" "}
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/testimonials/Anjali.jpg" alt="Testimonial1" />
          <div className="myCarousel">
            <h3>Anjali Kadam</h3>
            {/* <h4>Designer</h4> */}
            <p>
              I had been searching a platform for practicing SRT, TAT and GPE
              specifically, and randomly I came across the troppers on telegram.
              I solved the 1st SRT set where the responses were there and found
              it very helpful. The way the answers are structured make us wonder
              how simply we could have done it. I am using the premium right now
              & highly recommend this website to everyone. There is so much to
              learn & get benefitted. Thank you.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/testimonials/mayank.jpg" alt="Testimonial1" />
          <div className="myCarousel">
            <h3>Mayank Sinha</h3>
            <h4>Recommended From 21 SSB Bhopal.</h4>
            <p>
              The Features of this site are Top Notch especially the Test Module
              Feature which has personally helped me a lot with my Preparations.
              The solution provided with every module helps with self-analyzing
              our performance and work on them. Used properly, Troppers would
              surely be productive for Aspirants. I highly recommend it.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/testimonials/Rutuja.jpeg" alt="Testimonial1" />
          <div className="myCarousel">
            <h3>RUTUJA SATYAN</h3>
            {/* <h4></h4> */}
            <p>
              My name is Rutuja, I have been using Troppers for the past few
              weeks, and I am stuck to it now since the variety which is
              available to me for practice and the solutions they have provided
              kicks my brain to think from all possible perspectives and expands
              my horizon which eventually leads to me exploring myself better
              and to present it well in the form of words, not just TAT but also
              other psych tests have guided me well till date and helping me a
              lot since I get ample examples to practice. This platform is very
              helpful for SSB Aspirants.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/testimonials/profile.webp" alt="Testimonial1" />
          <div className="myCarousel">
            <h3>Sandeep Sehrawat</h3>
            {/* <h4></h4> */}
            <p>
              The content of Troppers is very unique and creative, it helps to
              build narration in your mind, and it helps us to broaden our
              psychology. The test mode is very supportive and helps to enhance
              the speed. I find it very relevant to SSB. It's worthful for
              preparation.
            </p>
          </div>
        </div>

        <div>
          <img
            src="/images/testimonials/Krishan_Kumar.jpg"
            alt="Testimonial1"
          />
          <div className="myCarousel">
            <h3>Aman Kaushik</h3>
            <h4>Son of Martyr Krishan Kumar(MCPO)</h4>
            <p>
              The website has great Content for Practice and the solutions
              provided is helpful for Evaluation and sharpening the efficiency.
              It's very considerates for those for are preparing for SSB without
              any external coaching.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
