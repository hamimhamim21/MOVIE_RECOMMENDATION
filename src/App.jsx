import { useState, useEffect } from "react";
import "./App.css";
import fetchDataFromApi from "./utils/api.js"; // Update the path if needed
import { useSelector, useDispatch } from "react-redux";
import { getApiConfigurations } from "./store/homeSlice";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/searchResult";
import Explore from "./pages/explore/explore";
import PageNotFound from "./pages/404/pageNotFound";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const fetchPopularMovies = async () => {
    try {
      const data = await fetchDataFromApi("/configuration", "");
      const url = {
        backdrop: data.images.secure_base_url + "original",
        poster: data.images.secure_base_url + "original",
        profile: data.images.secure_base_url + "original",
      };

      dispatch(getApiConfigurations(url));
    } catch (error) {
      console.error("Error fetching popular movies:", error.message);
    }
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
