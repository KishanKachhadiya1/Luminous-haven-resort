import React from "react";
import "../styles/home.css";
import headerImg from "../images/headerImg.jpg";
import aboutHotelImg from "../images/aboutHotelImg.jpg";
import room1Img from "../images/room1.jpg";
import room2Img from "../images/room2.jpg";
import room3Img from "../images/room3.jpg";
import videoImg from "../images/videoImg.jpg";

const Home = () => {
  return (
    <>
      <header>
        <div className="headerBg">
          <img src={headerImg} className="headerImg" alt="hotel" />
        </div>
        <div className="container">
          <div className="row">
            <div className="headerContent">
              <h1 className="headerTitle">
                Where Every Moment Becomes a Memory
              </h1>
              <div className="bookingWidget">
                <div className="widget">
                  <label htmlFor="checkin">Check In</label>
                  <input type="date" name="checkin" id="checkin" />
                </div>
                <div className="widget">
                  <label htmlFor="checkout">Check Out</label>
                  <input type="date" name="checkout" id="checkout" />
                </div>
                <div className="widget">
                  <label htmlFor="promocode">Promo Code</label>
                  <input type="text" name="promocode" id="promocode" />
                </div>
                <div className="widget">
                  <label htmlFor="" className="empty">
                    button
                  </label>
                  <button className="btn searchBtn">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="aboutHotel">
        <div className="container">
          <div className="row">
            <div className="aboutMain">
              <div className="leftContent">
                <h2>Discover Serenity, Embrace Elegance</h2>
                <p>
                  Our hotel offers an exceptional experience for both leisure
                  and business travelers, thanks to its prime location that
                  beautifully captures the city's vibrant culture and character.
                  From the moment you step through our doors, you'll be embraced
                  by an atmosphere of elegance and comfort. Every meticulously
                  designed detail reflects our commitment to creating a space
                  where guests can unwind, indulge, and create unforgettable
                  memories.
                </p>
                <p>
                  We warmly invite you to embark on an exceptional journey with
                  us, whether you're here to explore the city's attractions or
                  to unwind in the tranquility of our impeccably designed rooms.
                  Discover a realm where warmth and elegance come together, and
                  every detail is thoughtfully attended to with care and grace.
                </p>
                <p>
                  Discover our meticulously designed rooms and suites, each
                  offering a sanctuary of luxury and comfort. Enjoy stunning
                  views and a range of amenities tailored to meet all your
                  needs.
                </p>
              </div>
              <div className="rightContent">
                {/* https://unsplash.com/photos/xEaAoizNFV8 */}
                <img src={aboutHotelImg} alt="about hotel" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roomsInfo">
        <div className="container">
          <div className="row">
            <h2>Our Rooms</h2>
            <div className="roomInfoMain">
              <div className="roomInfoCard">
                <div className="roomImg">
                  {/* https://unsplash.com/photos/T5pL6ciEn-I */}
                  <img src={room1Img} alt="Deluxe Twin" />
                </div>
                <div className="roomContent">
                  <h3>Deluxe Twin</h3>
                  <p>
                    From <span>$500 / night</span>
                  </p>
                </div>
              </div>
              <div className="roomInfoCard">
                <div className="roomImg">
                  {/* https://unsplash.com/photos/xc4oxgAbDmw */}
                  <img src={room2Img} alt="Family Triple" />
                </div>
                <div className="roomContent">
                  <h3>Family Triple</h3>
                  <p>
                    From <span>$750 / night</span>
                  </p>
                </div>
              </div>
              <div className="roomInfoCard">
                <div className="roomImg">
                  {/* https://unsplash.com/photos/Id2IIl1jOB0 */}
                  <img src={room3Img} alt="Premium Triple" />
                </div>
                <div className="roomContent">
                  <h3>Premium Triple</h3>
                  <p>
                    From <span>$800 / night</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="videoSection">
        <div className="videoImg">
          {/* https://unsplash.com/photos/TAgGZWz6Qg8 */}
          <img src={videoImg} alt="Video Thumbnail" />
          <span className="videoIcon">
            <span> </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
