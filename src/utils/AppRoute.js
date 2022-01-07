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
import LayoutDefault from "../layouts/LayoutDefault";
import Character from "../views/characters/Character";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route index element={<Home />} />
        <Route path="wiki/characters" element={<Characters />} />
        <Route path="wiki/characters/:id" element={<Character/>} />
        <Route path="guides" element={<Guides />} />
        <Route path="wiki/weapons" element={<Weapons />} />
        <Route path="wiki/weapons/:id" element={<Weapons />} />
        <Route path="wiki/artifacts/id" element={<Artifacts />} />
        <Route path="about" element={<About />} />
        <Route path="c/r/e/a/t/e/n/e/w/post/20/02" element={<CreatePost />} />
        <Route path="d/e/l/e/t/e/post/20/02" element={<DeletePost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
