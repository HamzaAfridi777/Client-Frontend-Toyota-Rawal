import React from "react";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
import Header from "../../layouts/partials/header";

function CompanyProfile() {
    return (
        <div>
            <Header />

            <section className="text-booking pad-tb companyProfile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="process-text m1-h m2-h p1">
                                <h1>Company profile</h1>
                                <br />

                                <p>
                                    Discover how Toyota is evolving into a
                                    mobility company, performing in global
                                    markets, contributing to communities,
                                    developing new technologies, and creating
                                    ever-better cars.
                                </p>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img1.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <h3>Content</h3>

                                            <p>
                                                Learn the facts, from the date
                                                of our founding and location of
                                                our headquarters, to corporate
                                                stock summary.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img2.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                All information contained on
                                                this website is for
                                                informational purposes only.
                                                Therefore, this website cannot
                                                be used as a substitute for
                                                information that an authorized
                                                TOYOTA dealer can give you. The
                                                information contained on this
                                                website is not binding and does
                                                not constitute an offer to sell.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img3.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                The product images on this
                                                website may differ in individual
                                                details from models available in
                                                Germany or may contain optional
                                                extras and accessories that are
                                                subject to a surcharge.
                                                <br />
                                                We try to ensure that the
                                                information given here is as
                                                complete as possible. TDG
                                                reserves the right,
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img4.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                The product images on this
                                                website may differ in individual
                                                details from models available in
                                                Germany or may contain optional
                                                extras and accessories that are
                                                subject to a surcharge.
                                                <br />
                                                We try to ensure that the
                                                information given here is as
                                                complete as possible. TDG
                                                reserves the right,
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img5.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                The product images on this
                                                website may differ in individual
                                                details from models available in
                                                Germany or may contain optional
                                                extras and accessories that are
                                                subject to a surcharge.
                                                <br />
                                                We try to ensure that the
                                                information given here is as
                                                complete as possible. TDG
                                                reserves the right,
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img6.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                The product images on this
                                                website may differ in individual
                                                details from models available in
                                                Germany or may contain optional
                                                extras and accessories that are
                                                subject to a surcharge.
                                            </p>

                                            <h3>TOYOTA Product Prices</h3>

                                            <p>
                                                We try to ensure that the
                                                information given here is as
                                                complete as possible. TDG
                                                reserves the right,
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img7.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <h3>TOYOTA Product Prices</h3>

                                            <p>
                                                The price information contained
                                                on this website or accessible
                                                via the website is for
                                                informational purposes only and
                                                does not constitute a binding
                                                offer for the sale of TOYOTA
                                                products. All prices are
                                                recommended retail prices from
                                                Toyota Deutschland GmbH plus
                                                delivery costs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="companyProfile-card">
                                            <div className="cpCard-img">
                                                <img
                                                    src="assets/images/company-profile/img8.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <p>
                                                Tdelivery costs. Accessory
                                                equipment plus assembly costs,
                                                which may differ from the actual
                                                prices of your authorized TOYOTA
                                                dealer. The purchase of any
                                                TOYOTA product is subject to the
                                                terms of the respective sales
                                                contract.
                                            </p>

                                            <h3>TOYOTA Product Prices</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />
            <Footer />
        </div>
    );
}

export default CompanyProfile;
