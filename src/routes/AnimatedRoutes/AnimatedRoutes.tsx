import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { BookingStepper, Career, Contacts, Home, Product } from "../../pages";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/unanyan.am" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/booking/:pruductId" element={<BookingStepper />} />
      </Routes>
    </AnimatePresence>
  );
};
