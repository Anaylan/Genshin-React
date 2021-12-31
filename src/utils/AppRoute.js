// eslint-disable-next-line no-unused-expressions
import React from "react";
import { Route, Routes } from "react-router-dom";
import Characters from "../views/Characters";
import Home from "../views/Home";
import Guides from "../views/Guides";
import Weapons from "../views/Weapons";
import Artifacts from "../views/Artifacts";
import About from "../views/About";
import NotFound from "../views/NotFound";
import CreatePost from "../views/CreatePost";
import DeletePost from "../views/DeletePost";

const AppRoute = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/guides" element={<Guides/>} />
        <Route path="/weapons" element={<Weapons/>} />
        <Route path="/artifacts" element={<Artifacts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/c/r/e/a/t/e/n/e/w/post/20/02" element={<CreatePost/>} />
        <Route path="/d/e/l/e/t/e/post/20/02" element={<DeletePost/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
};

export default AppRoute;
