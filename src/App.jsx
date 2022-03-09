import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/Faq-Page";
import Dashboard from "./components/Dashboard";
import Gamedetails from "./components/GameDetail";
import Policy from "./components/Policy";
import TermsCon from "./components/Terms-Condition";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails"
import Contact from "./components/Contact"
import Depositlog from "./components/Deposit-log"
import Withdrawlog from "./components/Withdraw-log"
import Trxlog from "./components/Trx-log"
import Profile from "./components/Profile"
import ChangePass from "./components/Change-Pass"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buy" element={<Gamedetails />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/termscondition" element={<TermsCon />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deposit-log" element={<Depositlog />} />
        <Route path="/withdraw-log" element={<Withdrawlog />} />
        <Route path="/trx-log" element={<Trxlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-pass" element={<ChangePass />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
