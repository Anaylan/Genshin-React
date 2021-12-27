import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = () => (<>
    <Header/>
    <main id="page" class="h-100">
        <section
            className="h-100 bg-white bg-opacity-75 shadow rounded-top mt-lg-4 container-lg container-fluid"
        >
            <div className="pt-3" id="content"></div>
        </section>
    </main>
    <Footer/>
</>);

export default LayoutDefault;