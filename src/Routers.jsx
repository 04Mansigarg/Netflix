import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Payment } from "./component/payment";
import { Paymentform } from "./component/paymentform";
import SignUp1 from "./components/SignUp1";
import SignUp2 from "./components/SignUp2";
import SignUp3 from "./components/SignUp3";
import Login from "./components/Login";
import { HomePage } from "./HomePage/HomePage";
import { TvShows } from "./TvShows/TvShows";
import { Movies } from "./Movies/Movies";
import Player from "./components/Player";
import Navbar from "./component/Navbar";
import GenreBtn from "./component/GenreBtn";
import Navbar2 from "./component/Navbar2";
import { ItemComponent } from "./component/ItemComponent";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup1" element={<SignUp1 />} />
        <Route path="signup2" element={<SignUp2 />} />
        <Route path="signup3" element={<SignUp3 />} />
        <Route path="login" element={<Login />} />
        <Route exact path="payment" element={<Payment />} />
        <Route exact path="paymentform" element={<Paymentform />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="item" element={<ItemComponent />} />
        <Route path="player" element={<Player />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="navbar2" element={<Navbar2 />} />
        <Route path="genrebtn" element={<GenreBtn />} />
        <Route path="signout" element={<LandingPage />} />
      </Routes>
    </div>
  );
};
