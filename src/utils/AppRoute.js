// eslint-disable-next-line no-unused-expressions
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";
import { Spinner } from "react-bootstrap";
import ReactGA from "react-ga";

const Home = lazy(() => {
	return import("../views/Home");
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

const Character = lazy(() => {
	return import("../views/Character");
});
const Guide = lazy(() => {
	return import("../views/Guide");
});
const Artifact = lazy(() => {
	return import("../views/Artifact");
});

export const initGA = () => {
	ReactGA.initialize("UA-215831491-1"); // put your tracking id here
};

const AppRoute = () => {
	return (
		<Suspense
			fallback={
				<div
					className={
						"d-flex justify-content-center align-items-center min-vh-100"
					}>
					<Spinner variant={"warning"} animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			}>
			<Routes>
				<Route path='/' element={<LayoutDefault />}>
					<Route index element={<Home title='Гайды | Genshin Easy' />} />
					<Route path='guides' element={<Guides title='' />} />
					<Route path='guides/:id' element={<Guide title='' />} />
					<Route path='wiki'>
						<Route path='characters' element={<Characters title='' />} />
						<Route path='characters/:title' element={<Character />} />

						<Route path='weapons' element={<Weapons title='' />} />
						<Route path='weapons/:id' element={<Weapons title='' />} />

						<Route path='artifacts' element={<Artifacts title='' />} />
						<Route path='artifacts/:id' element={<Artifact title='' />} />
					</Route>
					<Route path='about' element={<About title=' ' />} />
					<Route path='404' element={<NotFound />} />
					<Route path='*' element={<Navigate replace to={"/404"} />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoute;
