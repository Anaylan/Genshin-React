import React from 'react';

const NotFound = (props) => {
    document.title = props.title;

    return (
        <div>
            Не найдено
        </div>
    );
};

export default NotFound;