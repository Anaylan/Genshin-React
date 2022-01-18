// eslint-disable-next-line no-unused-expressions
import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";
import {Spinner} from "react-bootstrap";

const Home = lazy(() => {
    return import("../views/Home");
});
const Login = lazy(() => {
    return import("../views/Login");
});
const RequireAuth = lazy(() => {
    return import("../views/private/RequireAuth");
});
const Characters = lazy(() => {
    return import("../views/Characters");
});
const Guides = lazy(() => {
    return import("../views/Guides");
});
const Weapons = lazy(() => {
    return import("../views/Weapons");
});
const Artifacts = lazy(() => {
    return import("../views/Artifacts");
});
const About = lazy(() => {
    return import("../views/About");
});
const NotFound = lazy(() => {
    return import("../views/NotFound");
});
const CreatePost = lazy(() => {
    return import("../views/CreatePost");
});
const DeletePost = lazy(() => {
    return import("../views/DeletePost");
});

const Character = lazy(() => {
    return import("../views/Character");
});
const Guide = lazy(() => {
    return import("../views/Guide");
});
const Artifact = lazy(() => {
    return import("../views/Artifact");
});


const AppRoute = () => {

    return (

        <Suspense fallback={
            <div className={'d-flex justify-content-center align-items-center h-100 mh-100'}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        }>
            <Routes>
                <Route path="/" element={<LayoutDefault/>}>
                    <Route index element={<Home title='Гайды | Genshin Easy'/>}/>
                    <Route path={'login'} element={<Login title=''/>}/>
                    <Route path="guides" element={<Guides title=''/>}/>
                    <Route path="guides/:id" element={<Guide title=''/>}/>
                    <Route path="wiki">
                        <Route path="characters" element={<Characters title=''/>}/>
                        <Route path="characters/:title" element={<Character/>}/>

                        <Route path="weapons" element={<Weapons title=''/>}/>
                        <Route path="weapons/:id" element={<Weapons title=''/>}/>

                        <Route path="artifacts" element={<Artifacts title=''/>}/>
                        <Route path="artifacts/:id" element={<Artifact title=''/>}/>
                    </Route>
                    <Route path="about" element={<About title=' '/>}/>
                    <Route path="create/new/post" element={
                        <RequireAuth>
                            <CreatePost title=''/>
                        </RequireAuth>
                    }/>
                    <Route path="edit/post/:id" element={
                        <RequireAuth>
                            <DeletePost title=' '/>
                        </RequireAuth>
                    }/>
                    <Route path="404" element={<NotFound title=' '/>}/>
                    <Route path="*" element={<Navigate replace to={'/404'}/>}/>
                </Route>
            </Routes>
        </Suspense>

    );
};

export default AppRoute;
