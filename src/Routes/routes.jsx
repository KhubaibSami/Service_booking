import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout";
import NotFound from "../modules/notFound/notFound";
import About from "../modules/about/about";

import Nonlayout from "../pages/nonlayout";
import Faq from "../components/FAQ/faq";
import Login from "../modules/form/components/login/login";
import Signup from "../modules/form/components/signup/signup";
import Reset from "../modules/form/components/resetPAssword/resetPAssword";
import OTPVerification from "../modules/form/components/opt/opt";
import EmailInputPage from "../modules/form/components/email/email";
// import Contact from "../components/contact/contact";
import LoginGoogle from "../components/login/login";
import Request from "../modules/services/components/request";
import RequestPage from "../modules/services/pages/services";
import Add from "../modules/services/components/add";

// import AXLogin from "../components/axios/login";
// import AXHeader from "../components/axios/header";
// import AXRegister from "../components/axios/register";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Nonlayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/request" element={<RequestPage />} />

          {/* <Route path="/contact" element={ <Contact/> } /> */}
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/emailtaking" element={<EmailInputPage />} />
        <Route path="/google" element={<LoginGoogle />} />
        <Route path="/add" element={<Add />} />
        {/* <Route path="/axioslogin" element={<AXLogin /> } />
        <Route path="/axiosregister" element={<AXRegister /> } />
        <Route path="/axiosheader" element={<AXHeader /> } /> */}



      </Routes>
    </>
  );
};

export default Routing;
