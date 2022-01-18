import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main id="page" className={"bg-white bg-opacity-75 border shadow rounded-top mt-lg-4 container-lg container-fluid p-3"}>
                <Outlet />
        </main>
    );
};

export default Main;