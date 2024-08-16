import React from "react";
import "../styles/home.css";
import "../styles/contact.css";
import contactBg from "../images/contactBg.jpg";

const Contact = () => {
  return (
    <div>
      <main>
        <header>
          <div className="headerBg headerBgSm">
            {/* https://unsplash.com/photos/-0xCCPIbl3M */}
            <img src={contactBg} className="headerImg" alt="Room Info" />
          </div>
          <div className="container">
            <div className="row">
              <div className="headerContent">
                <h1 className="headerTitle">Services</h1>
              </div>
            </div>
          </div>
        </header>
        <section className="contactForm">
          <div className="container">
            <h2>How Can We Assist?</h2>
            <form action="">
              <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" />
              </div>
              <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="textarea">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="submitBtn">Submit</button>
            </form>
          </div>
        </section>
        <section className="faqs">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faqsMain">
              <div className="faqsContent">
                <h4>What types of accommodations do you offer?</h4>
                <p>
                  We offer a variety of room types, including Deluxe King,
                  Family Suite, and Luxury Penthouse. Each option is designed to
                  provide comfort and elegance for a memorable stay.
                </p>
              </div>
              <div className="faqsContent">
                <h4>Is airport shuttle service available?</h4>
                <p>
                  Yes, we provide complimentary shuttle service to and from the
                  airport. Please notify us in advance with your flight details
                  for a smooth pickup.
                </p>
              </div>
              <div className="faqsContent">
                <h4>Are pets allowed at the hotel?</h4>
                <p>
                  Unfortunately, pets are not allowed. We strive to maintain a
                  clean and allergen-free environment for all our guests.
                </p>
              </div>
              <div className="faqsContent">
                <h4>What dining options are available on-site?</h4>
                <p>
                  We offer several dining options, including a gourmet
                  restaurant, a casual café, and a rooftop bar with stunning
                  views. All meals are prepared with the freshest ingredients.
                </p>
              </div>
              <div className="faqsContent">
                <h4>Do you have a fitness center?</h4>
                <p>
                  Yes, our fitness center is fully equipped with modern machines
                  and free weights, allowing you to maintain your workout
                  routine during your stay.
                </p>
              </div>
              <div className="faqsContent">
                <h4>Can I book event and meeting spaces?</h4>
                <p>
                  Yes, we offer versatile event spaces perfect for meetings,
                  conferences, weddings, and more. Our dedicated events team
                  will assist with all your planning needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
