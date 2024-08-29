import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact_us">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-cell-block wk-desk-5 wk-ipadp-4 wk-tab-12 wk-mobile-12">
            <img
              className="mainImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp35.svg"
            />
          </div>
          <div className="responsive-cell-block wk-desk-7 wk-ipadp-8 wk-tab-12 wk-mobile-12">
            <p className="text-blk heading">: )</p>
            <form
              className="formTable"
              id="izml"
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
            >
              <input type="hidden" name="oid" value="00DNS000000ldM5" />
              <input
                type="hidden"
                name="retURL"
                value="https://madhuryahait.github.io/portfolio/"
              />
              <div className="firstRow">
                <div className="fullNameArea">
                  <p className="cardHead">First Name</p>
                  <input
                    className="fullName"
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="fullNameArea">
                  <p className="cardHead">Last Name</p>
                  <input
                    className="fullName"
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="firstRow">
                <div className="fullNameArea">
                  <p className="cardHead">Email Address</p>
                  <input
                    className="email"
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="fullNameArea">
                  <p className="cardHead">Country</p>
                  <input
                    className="email"
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="messageArea">
                <p className="cardHead">Message</p>
                <textarea
                  className="message"
                  cols="30"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                />
              </div>

          
            

              <button type="submit" className="submit">
                <BsFillSendFill className="iconn" />  Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
