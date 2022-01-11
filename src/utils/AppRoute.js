// eslint-disable-next-line no-unused-expressions
import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";
import {useNavigate} from "react-router";

const Characters = lazy(() => import("../views/Characters"));
const Home = lazy(() => import("../views/Home"));
const Guides = lazy(() => import("../views/Guides"));
const Weapons = lazy(() => import("../views/Weapons"));
const Artifacts = lazy(() => import("../views/Artifacts"));
const About = lazy(() => import("../views/About"));
const NotFound = lazy(() => import("../views/NotFound"));
const CreatePost = lazy(() => import("../views/CreatePost"));
const DeletePost = lazy(() => import("../views/DeletePost"));

const Character = lazy(() => import("../views/Character"));
const Guide = lazy(() => import("../views/Guide"));
const Artifact = lazy(() => import("../views/Artifact"));

const AppRoute = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<LayoutDefault/>}>
                    <Route index element={<Home/>}/>
                    <Route path="guides" element={<Guides/>}/>
                    <Route path="guides/:id" element={<Guide/>}/>
                    <Route path="wiki">
                        <Route path="characters" element={<Characters/>}/>
                        <Route path="characters/:title" element={<Character/>}/>

                        <Route path="weapons" element={<Weapons/>}/>
                        <Route path="weapons/:id" element={<Weapons/>}/>

                        <Route path="artifacts" element={<Artifacts/>}/>
                        <Route path="artifacts/:id" element={<Artifact/>}/>
                    </Route>
                    <Route path="about" element={<About/>}/>
                    <Route path="c/r/e/a/t/e/n/e/w/post/20/02/admin" element={<CreatePost/>}/>
                    <Route path="d/e/l/e/t/e/post/20/02/admin" element={<DeletePost/>}/>
                    <Route path="404" element={<NotFound/>}/>
                    <Route path="*" element={<Navigate replace to={'/404'}/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoute;
