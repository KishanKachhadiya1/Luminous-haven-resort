import React from "react";
import "../styles/home.css";
import "../styles/room-info.css";
import roomInfoBg from "../images/roomInfoBg.jpg";
import roomInfo1 from "../images/roomInfo1.jpg";
import gallery1 from "../images/gallery1.jpg";
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import room4 from "../images/room4.jpg";
import room5 from "../images/room5.jpg";

const RoomInfo = () => {
  return (
    <>
      <main>
        <header>
          <div className="headerBg headerBgSm">
            {/* https://unsplash.com/photos/emqnSQwQQDo */}
            <img src={roomInfoBg} className="headerImg" alt="Room Info" />
          </div>
          <div className="container">
            <div className="row">
              <div className="headerContent">
                <h1 className="headerTitle">Room Info</h1>
              </div>
            </div>
          </div>
        </header>
      </main>
      <section className="roomInfo">
        <div className="container">
          <div className="row">
            <div>
              <h2>Deluxe Twin</h2>
              <div className="roomInfoImg">
                <img src={roomInfo1} alt="Room Info" />
              </div>
              <p>
                Experience the pinnacle of luxury in our Deluxe Rooms. These
                spaces seamlessly blend modern elegance with traditional comfort
                to create a tranquil retreat. With a spacious and sophisticated
                design, our Deluxe Rooms offer a stylish haven where you can
                unwind in comfort. The rich furnishings and tasteful decor
                create a welcoming ambiance, while large windows allow abundant
                natural light, enhancing the room’s airy and warm feel. Relax on
                a plush king-sized bed adorned with premium linens for an
                unparalleled night’s rest. The en-suite bathroom, featuring
                marble finishes, a rain shower, and upscale amenities, adds to
                the indulgent experience.
              </p>
              <p>
                Our Deluxe Rooms come equipped with a range of modern amenities
                designed for those who value the finer details. Relax with a
                freshly brewed coffee from the in-room coffee maker, watch your
                favorite programs on the flat-screen TV, or stay connected with
                high-speed Wi-Fi. Our attentive staff is dedicated to providing
                prompt and friendly service, ensuring all your needs are met
                with personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="roomPhotos">
        <div className="container">
          <div className="row">
            <h2>Gallery</h2>
            <div className="photoGallery">
              <div className="galleryImg">
                {/* https://unsplash.com/photos/aI6Su7Mu9Ro */}
                <img src={gallery1} alt="Hotel Room" />
              </div>
              <div className="galleryImg">
                {/* https://unsplash.com/photos/T5pL6ciEn-I */}
                <img src={room1} alt="Hotel Room" />
              </div>
              <div className="galleryImg">
                {/* https://unsplash.com/photos/xc4oxgAbDmw */}
                <img src={room2} alt="Hotel Room" />
              </div>
              <div className="galleryImg">
                {/* https://unsplash.com/photos/Id2IIl1jOB0 */}
                <img src={room3} alt="Hotel Room" />
              </div>
              <div className="galleryImg">
                {/* https://unsplash.com/photos/A548FlIW6Ho */}
                <img src={room4} alt="Hotel Room" />
              </div>
              <div className="galleryImg">
                {/* https://unsplash.com/photos/VoYzj_ITdog */}
                <img src={room5} alt="Hotel Room" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roomFacilities">
        <div className="container">
          <div className="row">
            <h2>Our Rooms Facilities</h2>
            <table>
              <tbody>
                <tr>
                  <th>Room Type</th>
                  <th>Luxury Suite</th>
                  <th>Executive Suite</th>
                  <th>Presidential Suite</th>
                </tr>
                <tr>
                  <td>Bed Type</td>
                  <td>King-sized Bed + Sofa Bed</td>
                  <td>King-sized Bed + Separate Living Area</td>
                  <td>King-sized Bed + 2 Twin Beds</td>
                </tr>
                <tr>
                  <td>Occupancy</td>
                  <td>2 Adults + 1 Child</td>
                  <td>2 Adults + 2 Children</td>
                  <td>4 Adults</td>
                </tr>
                <tr>
                  <td>View</td>
                  <td>Garden / Pool View</td>
                  <td>Cityscape View</td>
                  <td>Ocean View</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>450 sq. ft.</td>
                  <td>600 sq. ft.</td>
                  <td>1000 sq. ft.</td>
                </tr>
                <tr>
                  <td>Additional</td>
                  <td>Complimentary Fruit Basket</td>
                  <td>Private Balcony / Terrace</td>
                  <td>Exclusive Access to VIP Lounge</td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>Evening Turn-down Service</td>
                  <td>Complimentary Airport Transfer</td>
                  <td>Personal Butler Service</td>
                </tr>
                <tr>
                  <td>Bathroom</td>
                  <td>En-suite Bathroom with Rain Shower</td>
                  <td>En-suite Bathroom with Bathtub</td>
                  <td>Marble Bathroom with Jacuzzi</td>
                </tr>
                <tr>
                  <td>Amenities</td>
                  <td>Flat-screen TV</td>
                  <td>Flat-screen TV + DVD Player</td>
                  <td>Flat-screen TV + Home Theater System</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Work Desk</td>
                  <td>Separate Living Area</td>
                  <td>Large Living Area with Dining Table</td>
                </tr>
                <tr>
                  <td></td>
                  <td>In-room Coffee Machine</td>
                  <td>In-room Coffee Machine + Mini Bar</td>
                  <td>In-room Coffee Machine + Wine Cellar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomInfo;
