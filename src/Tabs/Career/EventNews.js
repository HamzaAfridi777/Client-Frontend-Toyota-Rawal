import React from "react";
import Header from "../../layouts/partials/header";
import Footer from "../../layouts/partials/footer";

const EventNews = () => {
    return (
        <div>
            <Header />
            <section className="eventBanner" style={{ backgroundImage: "url('assets/new-img/high-1.jpeg')", maxHeight: "640px" }}>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="eventBanner-cont">
                                <h1
                                    style={{
                                        fontSize: "98px",
                                        paddingTop: "145px",
                                    }}
                                >
                                    BLOGS
                                </h1>

                                <div className="eventBanner-proMain"></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <a href="/Blog">
                                <div className="eventBanner-chat-card">
                                    <div>
                                        <span className="val-50"></span>

                                        <b>
                                            <img
                                                src="assets/new-img/a.jpg"
                                                alt=""
                                                className="w-100"
                                            />
                                        </b>
                                    </div>

                                    <div className="ebChat-card-body">
                                        <p>HIGH-QUALITY ENGINE TUNE-UP</p>

                                        <h6>5 MIN READ</h6>
                                    </div>
                                </div>
                            </a>

                            <a href="/Blog2">
                                <div className="eventBanner-chat-card last">
                                    <div>
                                        <span className="val-30"></span>

                                        <b>
                                            <img
                                                src="assets/new-img/b.jpg"
                                                alt=""
                                                className="w-100"
                                            />
                                        </b>
                                    </div>

                                    <div className="ebChat-card-body">
                                        <p>
                                            SIGNS YOUR CAR BATTERY HAS TO BE
                                            REPLACED
                                        </p>

                                        <h6>5 MIN READ</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="eventnewsSection">
                <div className="container">
                    <div className="row">
                        <div>
                            {/* <!-- CARD 1 -->   */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="event-card">
                                        <div className="eventSecCard-top">
                                            <div className="eNSC-img">
                                                <a
                                                    href="/Blog"
                                                    style={{
                                                        position: "unset",
                                                    }}
                                                >
                                                    <img
                                                        src="assets/new-img/HIGH-QUALITY ENGINE TUNE-UP.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="eventSecCard-body">
                                            <h6>2 MIN AGO</h6>

                                            <h4>
                                                <span>New</span> HIGH-QUALITY
                                                ENGINE TUNE-UP
                                            </h4>

                                            <p>
                                                If your vehicle’s engine is
                                                squealing, sluggish, unreliable,
                                                or vibrating, it might be time
                                                for an engine tune-up. The roads
                                                can really take a toll on the
                                                engine{" "}
                                                <a href="/Blog">
                                                    Read More
                                                </a>
                                            </p>
                                        </div>

                                        <div className="eventSecCard-bottom">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-heart"></i>{" "}
                                                        349
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-share-alt"></i>{" "}
                                                        151
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="event-card">
                                        <div className="eventSecCard-top">
                                            <div className="eNSC-img">
                                                <a
                                                    href="/Blog2"
                                                    style={{
                                                        position: "unset",
                                                    }}
                                                >
                                                    <img
                                                        src="assets/new-img/SIGNS YOUR CAR BATTERY HAS TO BE REPLACED.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="eventSecCard-body">
                                            <h6>2 MIN AGO</h6>

                                            <h4>
                                                <span>New</span>SIGNS YOUR CAR
                                                BATTERY HAS TO BE REPLACED
                                            </h4>

                                            <p>
                                                Dealing with a car battery that
                                                is not as strong as it used to
                                                be is concerning. It can lead to
                                                a long list of issues car owners
                                                don’t want to face while{" "}
                                                <a href="/Blog2">
                                                    Read More
                                                </a>
                                            </p>
                                        </div>

                                        <div className="eventSecCard-bottom">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-heart"></i>{" "}
                                                        349
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-share-alt"></i>{" "}
                                                        151
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="event-card">
                                        <div className="eventSecCard-top">
                                            <div className="eNSC-img">
                                                <a
                                                    href="/Blog3"
                                                    style={{
                                                        position: "unset",
                                                    }}
                                                >
                                                    <img
                                                        src="assets/new-img/tire-rotation-vs-whel-alignment-whats-the-difference.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="eventSecCard-body">
                                            <h6>2 MIN AGO</h6>

                                            <h4>
                                                <span>New</span>TIRE ROTATION
                                                VS. WHEEL ALIGNMENT
                                            </h4>

                                            <p>
                                                Tire safety is an important part
                                                of driving safely. If you feel
                                                like your vehicle is jiggling
                                                whenever you are driving,
                                                especially after hitting a
                                                massive pothole, you might need{" "}
                                                <a href="/Blog3">
                                                    Read More
                                                </a>
                                            </p>
                                        </div>

                                        <div className="eventSecCard-bottom">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-heart"></i>{" "}
                                                        349
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-share-alt"></i>{" "}
                                                        151
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- CARD 1 -->

                <!-- CARD 2  -->*/}
                            <div className="row"></div>
                            {/* <!-- CARD 2  -->*/}

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="eventvideo-card">
                                        <div className="evc-header">
                                            <video controls>
                                                {/*  <!-- <source src="movie.mp4" type="video/mp4" className="evclv"> -->*/}
                                                <img
                                                    src="assets/images/event-news/evc-img1.jpg"
                                                    className="evclv"
                                                    alt=""
                                                />
                                                <span>
                                                    <img
                                                        src="assets/images/event-news/play.png"
                                                        alt=""
                                                    />
                                                </span>
                                            </video>
                                        </div>

                                        <div className="evc-body">
                                            {/* <!-- <h6>John citizen <span> in </span> videos</h6> -->

                            <!-- <h5>The video that is Spreading with a Musical Performer that is causing census in the Networks</h5> -->*/}
                                        </div>

                                        <div className="evc-list">
                                            <ul>
                                                <li>
                                                    <div className="row align-items-center">
                                                        <div className="col-md-5">
                                                            <div className="evc-list-video">
                                                                <a href="#">
                                                                    <img
                                                                        src="assets/images/event-news/evc-img1.jpg"
                                                                        className="evclv"
                                                                        alt=""
                                                                    />

                                                                    <span>
                                                                        <img
                                                                            src="assets/images/event-news/play.png"
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-7">
                                                            <div className="evc-list-cont">
                                                                <h6>
                                                                    video{" "}
                                                                    <span>
                                                                        10:45
                                                                    </span>
                                                                </h6>

                                                                <h5>
                                                                    TIRE
                                                                    ROTATION VS.
                                                                    WHEEL
                                                                    ALIGNMENT
                                                                </h5>

                                                                <p>
                                                                    Tire safety
                                                                    is an
                                                                    important
                                                                    part of
                                                                    driving
                                                                    safely. If
                                                                    you feel
                                                                    like your
                                                                    vehicle is
                                                                    jiggling
                                                                    whenever you
                                                                    are driving.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="row align-items-center">
                                                        <div className="col-md-5">
                                                            <div className="evc-list-video">
                                                                <a href="#">
                                                                    <img
                                                                        src="assets/images/event-news/evc-img1.jpg"
                                                                        className="evclv"
                                                                        alt=""
                                                                    />
                                                                    <span>
                                                                        <img
                                                                            src="assets/images/event-news/play.png"
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-7">
                                                            <div className="evc-list-cont">
                                                                <h6>
                                                                    video{" "}
                                                                    <span>
                                                                        00:52
                                                                    </span>
                                                                </h6>

                                                                <h5>
                                                                    SIGNS YOUR
                                                                    CAR BATTERY
                                                                    HAS TO BE
                                                                    REPLACED
                                                                </h5>

                                                                <p>
                                                                    Dealing with
                                                                    a car
                                                                    battery that
                                                                    is not as
                                                                    strong as it
                                                                    used to be
                                                                    is
                                                                    concerning.
                                                                    It can lead
                                                                    to a long
                                                                    list of
                                                                    issues.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="row align-items-center">
                                                        <div className="col-md-5">
                                                            <div className="evc-list-video">
                                                                <a href="#">
                                                                    <img
                                                                        src="assets/images/event-news/evc-img1.jpg"
                                                                        className="evclv"
                                                                        alt=""
                                                                    />

                                                                    <span>
                                                                        <img
                                                                            src="assets/images/event-news/play.png"
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-7">
                                                            <div className="evc-list-cont">
                                                                <h6>
                                                                    video{" "}
                                                                    <span>
                                                                        00:32
                                                                    </span>
                                                                </h6>

                                                                <h5>
                                                                    HIGH-QUALITY
                                                                    ENGINE
                                                                    TUNE-UP
                                                                </h5>

                                                                <p>
                                                                    If your
                                                                    vehicle’s
                                                                    engine is
                                                                    squealing,
                                                                    sluggish,
                                                                    unreliable,
                                                                    or
                                                                    vibrating,
                                                                    it might be
                                                                    time for an
                                                                    engine
                                                                    tune-up.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <!-- <div className="evc-footer">
                            <a href="#">See All Comments</a>
                        </div> -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- <div className="col-md-4">
                <div className="recentCard">
                   <div className="recentcard-head">
                      <h3>
                         Recent Comments

                         <a href="#"><i className="far fa-ellipsis-h"></i></a>
                      </h3>
                   </div>

                   <div className="recentcard-body">
                      <ul>
                         <li>
                           
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                         
                         </li>

                         <li>
                            
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                         </li>

                         <li>
                            
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                           
                         </li>

                         <li>
                            
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                         </li>

                         <li>
                            
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                            
                         </li>

                         <li>
                            
                               <div className="recentcardBody-img">
                                  <img src="assets/images/event-news/recent-user.png" alt="">
                               </div>

                               <div className="recentcardBody-cont">
                                  <h6>45 min</h6>

                                  <h4><b>Dany Janssen</b> left the comment:</h4>

                                  <p>Etiam eget erat accumsan, tempus purus a, sagittis nisi. <a href="#"> @raesent </a> laoreet interdum diam,</p>

                                  <h5>In: <b>Phasellus pulvinar iaculis nunc at placerat sed porta sollicitudin...</b></h5>
                               </div>
                           
                         </li>
                      </ul>
                   </div>
                </div>
             </div>    -->*/}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EventNews;
