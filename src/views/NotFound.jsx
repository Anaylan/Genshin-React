import React from 'react';

const NotFound = (props) => {
    document.title = props.title;

    return (
        <>
            <div className={'d-flex justify-content-center align-self-center'}>
                <h3>К сожалению данной страницы не существует</h3>
            </div>
        </>
    );
};

export default NotFound;