// eslint-disable-next-line no-unused-expressions
import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";

const Home = lazy(() => import("../views/Home"));
const Login = lazy(() => import("../views/Login"));
const RequireAuth = lazy(() => import("../views/private/RequireAuth"));
const Characters = lazy(() => import("../views/Characters"));
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

    return (

        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<LayoutDefault/>}>
                    <Route index element={<Home title='Гайды | Genshin Easy' />}/>
                    <Route path={'login'} element={<Login title='' />}/>
                    <Route path="guides" element={<Guides title='' />}/>
                    <Route path="guides/:id" element={<Guide title='' />}/>
                    <Route path="wiki">
                        <Route path="characters" element={<Characters title='' />}/>
                        <Route path="characters/:title" element={<Character/>}/>

                        <Route path="weapons" element={<Weapons title='' />}/>
                        <Route path="weapons/:id" element={<Weapons title='' />}/>

                        <Route path="artifacts" element={<Artifacts title='' />}/>
                        <Route path="artifacts/:id" element={<Artifact title='' />}/>
                    </Route>
                    <Route path="about" element={<About title=' ' />}/>
                    <Route path="create/new/post" element={
                        <RequireAuth>
                            <CreatePost title='' />
                        </RequireAuth>
                    }/>
                    <Route path="edit/post/:id" element={
                        <RequireAuth>
                            <DeletePost title=' ' />
                        </RequireAuth>
                    }/>
                    <Route path="404" element={<NotFound title=' ' />}/>
                    <Route path="*" element={<Navigate replace to={'/404'}/>}/>
                </Route>
            </Routes>
        </Suspense>

    );
};

export default AppRoute;
