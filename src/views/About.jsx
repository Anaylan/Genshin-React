import React from 'react';

const About = (props) => {
    document.title = props.title;

    return (
        <div>
            О нас
        </div>
    );
};

export default About;