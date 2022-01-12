import React from 'react';

const CreatePost = (props) => {
    document.title = props.title;
    return (
        <div>
            Создать пост
        </div>
    );
};

export default CreatePost;