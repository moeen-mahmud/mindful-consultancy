// Imporing necessary files
import React from "react";
import customer1 from "../../../assets/customer-1.JPG";
import customer2 from "../../../assets/customer-2.JPG";
import customer3 from "../../../assets/customer-3.JPG";
import "./Reviews.css";

// Importing Reviews Component
const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Our Satisfied Customer Says...</h1>

      {/* Customer Reviews */}
      <div className="user-review">
        <figure>
          <img src={customer1} alt="Susana Kenny" />
          <figcaption>
            <h3>Susana Kenny</h3>
            <p>
              Such a caring, helpful psychologist. Actually listens to you and
              try to find solutions. Would recommend her to anyone who is
              looking for an empathetic person.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer2} alt="John Bowlby" />
          <figcaption>
            <h3>John Bowlby</h3>
            <p>
              At first I liked it was anonymous, because i could discuss my
              issues without feeling judged. I hadn’t been able to do that with
              anyone until my counselling started. Nicholas is truly a godsend.
              He is insanely talented at what he does and makes such a
              difference to peoples lives.
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={customer3} alt="Billy Butcher" />
          <figcaption>
            <h3>Billy Butcher</h3>
            <p>
              It's great to be able to get timely help, especially during
              periods of strong anxiety. The psychologist was very helpful and
              sympathetic. The voice chat sometimes lagged — could be partly our
              connection, but it seemed a bit worse than Zoom or Jitsi in my
              experience.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
