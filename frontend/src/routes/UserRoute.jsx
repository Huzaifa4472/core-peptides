// routes/UserRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../user/pages/AboutUs";
import Contact from "../user/pages/Contact";
import Home from "../user/pages/Home";
import MyAccount from "../user/pages/MyAccount";
import Peptides from "../user/pages/Peptides";
import ForgetPass from "../user/components/ForgetPass";
import PrivacyPolicy from "../user/pages/PrivacyPolicy";
import TermsCondition from "../user/pages/TermsCondition";
import ShippingRefund from "../user/pages/ShippingRefund";
import SearchResult from "../user/components/SearchResult";

const userRoutes = [
  <Route key="home" path="" element={<Home />} />,
  <Route key="about-us" path="about-us" element={<AboutUs />} />,
  <Route key="contact" path="contact" element={<Contact />} />,
  <Route key="peptides" path="peptides" element={<Peptides />} />,
  <Route key="my-accounts" path="my-accounts" element={<MyAccount />} />,
  <Route
    key="forget-password"
    path="my-accounts/forget-password"
    element={<ForgetPass />}
  />,
  <Route key="privacy" path="privacy-policy" element={<PrivacyPolicy />} />,
  <Route key="terms" path="terms-condition" element={<TermsCondition />} />,
  <Route key="shipping" path="shipping" element={<ShippingRefund />} />,
  <Route key="result" path="result-search" element={<SearchResult />} />

];

export default userRoutes;
