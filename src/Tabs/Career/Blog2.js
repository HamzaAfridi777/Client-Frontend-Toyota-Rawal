import React from 'react';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Blog2 = () => {
  return (
    <div>
   <Header/>
      <section id="blog-2" className="innerBanner" 
      style={{backgroundImage:"url(assets/new-img/signs-1.jpeg)"}}>
          <div className="container">
              <h1>
                  SIGNS YOUR CAR BATTERY HAS TO BE REPLACED
              </h1>
          </div>
      </section>
      <div id="blog-wrap">
          
          <div className="container">
              <div>
                  
                  <p>Dealing with a car battery that is not as strong as it used to be is concerning. It can lead to a long list of issues car owners don’t want to face while driving.</p>
                  <h3>Here is a look at five common signs that your car battery has to be changed as soon as possible</h3>
                  <ol>
                      <li>Difficulty Turning On the Vehicle</li>
                      <p>When the car has to be turned on, it will start sputtering. This is a sign the car battery is not charging as it needs to and that means it is not driving power to the rest of the vehicle. At first, this is not going to be as noticeable. Over time, the sputtering will continue to get longer and longer. This is frustrating and a clear-cut sign that battery is losing juice.</p>
                      <li>Poor Performance In Cold Weather</li>
                      <p>When it is cold outside, the battery is not warmed up. If the battery is not at 100%, this is going to be a major concern because cold weather puts a tremendous amount of pressure on this part of the vehicle.</p>
                      <p>If it does not turn on easily during the winter, this is a sign it’s time to change the battery.</p>
                      <li>Electrical Malfunctions</li>
                      <p>If the doors are not locking properly or the windows aren’t going up using the button, this is likely due to the car battery not powering them effectively.</p>
                      <p>It’s best to change the battery when this happens because it will get worse with time.</p>
                      <li>Dashboard Lights & Lighting Issues</li>
                      <p>When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and that is when warning lights show up on the dashboard.</p>
                      <p>This can include the alternator not returning charge, which happens when a battery is weak.</p>
                      <li>Strange Odor</li>
                      <p>When there is a distinct smell coming from the vehicle, it is a common sign there is something wrong with the battery. This smell is often referred to as being like “rotten eggs” and it is a smell that continues to worsen with time.</p>
                      <p>The reason this happens has to do with the battery leaking gas. The sulfuric acid in the battery starts to come out. This is a major sign that a change is required right away.</p>
                      <p>For the average person, diagnosing which part of these two systems could be causing the problem can be difficult. The experts at Toyota Rawal Motors can help. Call now for an appointment.</p>
                  </ol>

              </div>
          </div>    
      </div>
    <Footer/>
    </div>
  );
}

export default Blog2;
