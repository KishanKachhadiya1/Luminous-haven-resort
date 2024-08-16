import React from "react";
import "../styles/home.css";
import "../styles/service.css";
import serviceBg from "../images/serviceBg.jpg";
import roomService from "../images/roomService.png";
import assistance from "../images/assistance.png";
import wellness from "../images/wellness.png";
import business from "../images/business.png";
import airport from "../images/airport.png";
import play from "../images/play.png";

const Service = () => {
  return (
    <div>
      <main>
        <header>
          <div className="headerBg headerBgSm">
            {/* https://unsplash.com/photos/GFrBMipOd_E */}
            <img src={serviceBg} className="headerImg" alt="Room Info" />
          </div>
          <div className="container">
            <div className="row">
              <div className="headerContent">
                <h1 className="headerTitle">Services</h1>
              </div>
            </div>
          </div>
        </header>
      </main>
      <section className="service">
        <div className="container">
          <h2>Our Offerings</h2>
          <div className="serviceMain">
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/review_2257138#fromView=search&term=service&page=1&position=2 */}
                <img src={roomService} alt="Room Service" />
              </div>
              <div className="serviceContent">
                <h3>Room Service</h3>
                <p>
                  Enjoy gourmet meals delivered directly to your room, available
                  24/7 for your convenience.
                </p>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/support_1067566#fromView=search&term=assistance&page=1&position=0 */}
                <img src={assistance} alt="Concierge Assistance" />
              </div>
              <div className="serviceContent">
                <h3>Concierge Assistance</h3>
                <p>
                  Our concierge team is here to assist with restaurant bookings,
                  tour planning, and local recommendations.
                </p>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/exercise_1721094#fromView=search&term=wellness&page=1&position=5 */}
                <img src={wellness} alt="Spa & Wellness" />
              </div>
              <div className="serviceContent">
                <h3>Spa & Wellness</h3>
                <p>
                  Rejuvenate with our spa services, including massages, saunas,
                  and a fully-equipped fitness center.
                </p>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/cooperative_7684407#fromView=search&term=business&page=1&position=4 */}
                <img src={business} alt="Business Facilities" />
              </div>
              <div className="serviceContent">
                <h3>Business Facilities</h3>
                <p>
                  Stay productive with our high-speed internet, meeting rooms,
                  and business support services.
                </p>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/airport_2983649#fromView=search&term=airport+&page=1&position=18 */}
                <img src={airport} alt="Airport Transfers" />
              </div>
              <div className="serviceContent">
                <h3>Airport Transfers</h3>
                <p>
                  Complimentary airport shuttle service ensures a smooth and
                  comfortable journey to and from our hotel.
                </p>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceImg">
                {/* https://www.freepik.com/icon/playtime_1702240#fromView=search&term=playing&page=1&position=0 */}
                <img src={play} alt="Kids' Zone" />
              </div>
              <div className="serviceContent">
                <h3>Kids' Zone</h3>
                <p>
                  A dedicated play area for children with toys, games, and
                  activities to keep them entertained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <h2>Our Culinary Delights</h2>
          <div className="menuMain">
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Hearty English Breakfast</h4>
                  <p>
                    - Two fried eggs, grilled tomatoes, sausage, and baked
                    beans.
                  </p>
                  <p>- Served with a cup of English Breakfast tea or coffee.</p>
                </div>
                <span>$22</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Avocado Toast</h4>
                  <p>
                    - Smashed avocado on sourdough with poached eggs and cherry
                    tomatoes.
                  </p>
                  <p>- Complemented by a fresh green juice or smoothie.</p>
                </div>
                <span>$18</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Garden Omelette</h4>
                  <p>
                    - A fluffy omelette filled with mushrooms, spinach, and goat
                    cheese.
                  </p>
                  <p>
                    - Served with whole grain toast and your choice of juice.
                  </p>
                </div>
                <span>$20</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Caesar Salad with a Twist</h4>
                  <p>
                    - Crisp romaine lettuce, parmesan, croutons, and anchovy
                    dressing.
                  </p>
                  <p>- Topped with grilled shrimp and avocado slices.</p>
                </div>
                <span>$25</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Artisan Panini</h4>
                  <p>
                    - Grilled chicken, pesto, and mozzarella on focaccia bread.
                  </p>
                  <p>- Served with sweet potato fries or a side salad.</p>
                </div>
                <span>$23</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Superfood Salad Bowl</h4>
                  <p>
                    - Mixed greens, quinoa, avocado, blueberries, and walnuts.
                  </p>
                  <p>- Drizzled with a honey mustard vinaigrette.</p>
                </div>
                <span>$19</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Grilled Sea Bass</h4>
                  <p>
                    - Fresh sea bass grilled to perfection with a lemon-caper
                    sauce.
                  </p>
                  <p>- Paired with wild rice and sautéed green beans.</p>
                </div>
                <span>$30</span>
              </div>
            </div>
            <div className="menuCard">
              <div className="menuItem">
                <div>
                  <h4>Steak au Poivre</h4>
                  <p>
                    - Pepper-crusted sirloin steak served with a rich brandy
                    cream sauce.
                  </p>
                  <p>
                    - Accompanied by roasted potatoes and a seasonal vegetable
                    medley.
                  </p>
                </div>
                <span>$35</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
