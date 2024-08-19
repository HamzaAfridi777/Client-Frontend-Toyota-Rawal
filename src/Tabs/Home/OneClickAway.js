import React, { useState, useEffect } from "react";
import axios from "axios";
const OneClickAway = () => {
  const [companyData, setCompanyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/site-credentials");
        const companyData = DataResponse.data[0];
        setCompanyData(companyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <section className="call-away pad-tb" id="cta_lg-d">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="away-txt m1-h p1 p5 text-center">
                <h1>We are one click away</h1>
                <p></p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-4 ca-lft-side"
              id="sm-scrn"
            >
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-1">
                  <a href={companyData.whatsapp_number} target="_blank">
                    <img
                      src="assets/img/whatsap-icon.png"
                      alt="whatsap-icon.png"
                    />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-1">
                  <h6>
                    Contact Us On <br />
                    WhatsApp <br />
                    <span className="fnt-15">
                      {companyData.whatsapp_number}
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-2">
                  <a href={companyData.facebook_link} target="_blank">
                    <img src="assets/img/fb-logo.png" alt="fb-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-2">
                  <h6>
                    Connect Us On <br />
                    Facebook <br />
                    <span>{companyData.facebook_link}</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-3">
                  <a href={companyData.twitter_link} target="_blank">
                    <img
                      src="assets/img/tiwtter-logo.png"
                      alt="tiwtter-logo.png"
                    />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-3">
                  <h6>
                    Connect Us On <br />
                    Twitter <br />
                    <span>{companyData.twitter_link}</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-4">
                  <a href={companyData.instagram_link} target="_blank">
                    <img src="assets/img/insta-logo.png" alt="insta-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-4">
                  <h6>
                    Connect Us On <br />
                    Instagram <br />
                    <span>{companyData.instagram_link}</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-5">
                  <a href={companyData.linkedin_link} target="_blank">
                    <img src="assets/img/linkd-logo.png" alt="linkd-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-5">
                  <h6>
                    Connect Us On <br />
                    Linkedin
                    <br />
                    <span>{companyData.linkedin_link}</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-6">
                  <a href={companyData.facebook_link} target="_blank">
                    <img src="assets/img/fbmsg-logo.png" alt="fbmsg-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-6">
                  <h6>
                    Connect Us On <br />
                    Messenger <br />
                    <span>{companyData.facebook_link}</span>{" "}
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 sm-ntshw">
              <div className="glob-subbx">
                <a
                  href="https://earth.google.com/web/search/Toyota+Rawal+Motors,+Swan+Camp%d8%8c+Grand+Trunk+Road,+Rawalpindi/@33.5419159,73.1071167,437.13947519a,863.0294482d,35y,0h,45t,0r/data=CqgBGn4SeAolMHgzOGRmZWQzYzVjNDUzZmIzOjB4OWFmOGQwZmY0ZTM5YTY1Mxmg_N07asVAQCGQ-dv52UZSQCo9VG95b3RhIFJhd2FsIE1vdG9ycywgU3dhbiBDYW1w2IwgR3JhbmQgVHJ1bmsgUm9hZCwgUmF3YWxwaW5kaRgCIAEiJgokCQKVirI71jVAEf6UirI71jXAGdMU8UftlT1AIc8JHQLunVLAKAI"
                  target="_blank"
                >
                  <img
                    src="assets/img/giphy.gif"
                    alt="giphy.gif"
                    className="glob-img"
                  />
                </a>
              </div>
              <div className="glob-subbx-name">
                <h6>
                  Our Location <br />
                  <span className="fnt-15"></span>{" "}
                </h6>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 ca-lft-side"
              id="sm-scrn"
            >
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-1">
                  <a href={`mailto:${companyData.email}`} target="_blank">
                    <img
                      src="assets/img/msg-logo.png"
                      alt="msg-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-1">
                  <h6>
                    For More Information <br />
                    Email Us <br />
                    <span className="fnt-15">{companyData.email}</span>{" "}
                  </h6>
                </div>
              </div>

              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-2">
                  <a href={`tel:${companyData.customer_relation_number}`}>
                    <img
                      src="assets/img/face-logo.png"
                      alt=""
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-2">
                  <h6>
                    For Inquiry <br />
                    Call On <br />
                    <span className="fnt-15">
                      {companyData.customer_relation_number}
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-3">
                  <a href="#">
                    <img
                      src="assets/img/house-logo.png"
                      alt="house-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="right-subbx-name rgt-hovr-3">
                  <h6>
                    Visit Us At <br />{" "}
                    <span className="fnt-15">{companyData.address}</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-4">
                  <a href="online-complaints.php">
                    <img
                      src="assets/img/phone-logo.png"
                      alt="phone-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-4">
                  <h6 className="fnt-15">
                    REGISTER ONLINE COMPLAINT <span></span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-5">
                  <a href="Tel:+923481119629">
                    <img
                      src="assets/img/cell2-logo.png"
                      alt="cell2-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-5">
                  <h6>
                    Get Information on <br />
                    Call <br />
                    <span className="fnt-15">0348-1119629</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-6">
                  <a href="Tel:(051)4917204">
                    <img
                      src="assets/img/cell-sms-logo.png"
                      alt="cell-sms-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-6">
                  <h6>
                    Get Information on <br />
                    SMS <br />
                    <span className="fnt-15">
                      {companyData.whatsapp_number}
                    </span>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* small screen start-->* */}
      <section className="call-away pad-tb" id="cta_sm-d">
        <div className="container">
          <div>
            <div className="away-txt m1-h p1 p5 text-center">
              <h1>We are one click away</h1>
              <p></p>
            </div>

            <div className="cta-sm-screen">
              <div>
                <div className="ca-sm-box">
                  <a
                    href="https://api.whatsapp.com/send?phone=923460089488&app=facebook&entry_point=page_cta"
                    target="_blank"
                  >
                    <img
                      src="assets/img/whatsap-icon.png"
                      alt="whatsap-icon.png"
                    />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://www.facebook.com/Toyotarawal.official/"
                    target="_blank"
                  >
                    <img src="assets/img/fb-logo.png" alt="fb-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://twitter.com/ToyotaRawal?t=9XQtIWdGEdhLTwCZ02KU9Q&s=09"
                    target="_blank"
                  >
                    <img
                      src="assets/img/tiwtter-logo.png"
                      alt="tiwtter-logo.png"
                    />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://instagram.com/toyota_rawal?utm_medium=copy_link"
                    target="_blank"
                  >
                    <img src="assets/img/insta-logo.png" alt="insta-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://pk.linkedin.com/company/toyota-rawal-motors"
                    target="_blank"
                  >
                    <img src="assets/img/linkd-logo.png" alt="linkd-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://www.facebook.com/Toyotarawal.official/"
                    target="_blank"
                  >
                    <img src="assets/img/fbmsg-logo.png" alt="fbmsg-logo.png" />
                  </a>
                </div>
              </div>

              <div>
                <div className="ca-sm-box ">
                  <a href="https://mail.google.com/mail/" target="_blank">
                    <img
                      src="assets/img/msg-logo.png"
                      alt="msg-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:(051)4917200">
                    <img
                      src="assets/img/face-logo.png"
                      alt="face-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="#">
                    <img
                      src="assets/img/house-logo.png"
                      alt="house-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="online-complaints.php">
                    <img
                      src="assets/img/phone-logo.png"
                      alt="phone-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:+923481119629">
                    <img
                      src="assets/img/cell2-logo.png"
                      alt="cell2-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:(051)4917204">
                    <img
                      src="assets/img/cell-sms-logo.png"
                      alt="cell-sms-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- small screen End-->*/}

      <section className="event pad-tb">
        <div className="container">
          <div className="d-flex justify-content-center">
            <iframe
              src="https://www.toyota-indus.com/"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneClickAway;
