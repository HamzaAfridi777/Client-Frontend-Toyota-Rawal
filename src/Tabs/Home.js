import React from 'react'
import Header from "../layouts/partials/header";
import ContactUs from  "../layouts/partials/ContactUs";
import Footer from "../layouts/partials/footer";
import HeroImages from './Home/HeroImages';
import NewArrivals from "./Home/NewArrivals";
import NewCarBooking from "./Home/NewCarBooking";
import ServicesWeOffer from "./Home/ServicesWeOffer";
import ToyotaSure from "./Home/ToyotaSure";
import PeriodicMaintenanceService from "./Home/PeriodicMaintenanceService";
import ValueTime from "./Home/ValueTime";
import  ClientsLove from "./Home/ClientsLove";
import ChooseUs from "./Home/ChooseUs";
import CarCareTips from "./Home/CarCareTips";
import OneClickAway from "./Home/OneClickAway";
import ExpertTeam from "./Home/ExpertTeam";
import MapSection from "./Home/MapSection";
const Home = () => {
  return (
    <div>
      <Header/>
      <HeroImages/>
      <NewArrivals/>
      <NewCarBooking/>
      <ServicesWeOffer/>
      <ToyotaSure/>
      <PeriodicMaintenanceService/>
      <ValueTime/>
      <ClientsLove/>
      <ChooseUs/>
      <CarCareTips/>
      <OneClickAway/>
      <ExpertTeam/>
      <ContactUs/>
      <MapSection/>
      <Footer/>
    </div>
  )
}

export default Home;
