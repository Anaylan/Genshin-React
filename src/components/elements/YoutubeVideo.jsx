import React from 'react';

const YoutubeVideo = (props) => {
    console.log(props)
    return (
        <div>
            {/*<iframe width="100%" height="315" src={props.video.link}*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen></iframe>*/}
        </div>
    );
};

export default YoutubeVideo;