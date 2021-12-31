import React from 'react';

const Main = ({children}) => {
    return (
        <main id="page" className={"bg-white bg-opacity-75 shadow rounded-top mt-lg-4 container-lg container-fluid"}>
            <div className="pt-3 h-100" id="content">
                {children}
            </div>
        </main>
    );
};

export default Main;