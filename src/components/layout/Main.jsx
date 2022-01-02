import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main id="page" className={"bg-white bg-opacity-75 shadow rounded-top mt-lg-4 container-lg container-fluid"}>
            <div className="pt-3 h-100" id="content">
                <Outlet />
            </div>
        </main>
    );
};

export default Main;