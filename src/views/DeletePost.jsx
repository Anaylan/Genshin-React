import React from 'react';

const DeletePost = (props) => {
    document.title = props.title;
    return (
        <div>
            Удалить пост
        </div>
    );
};

export default DeletePost;