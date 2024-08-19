// src/layout/Layout.js
import React, { Suspense } from "react";
import Header from "./partials/header";
import ContactUs from "./partials/ContactUs";
import Footer from "./partials/footer";
import { Outlet } from "react-router-dom";
const Layout = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet/>
      <ContactUs /> 
      <Footer />
    </Suspense>
  );
};

export default Layout;
