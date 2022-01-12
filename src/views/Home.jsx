import React from 'react';

const Home = (props) => {
    document.title = props.title;
    return (<div>
        Главная
    </div>);
};

export default Home;