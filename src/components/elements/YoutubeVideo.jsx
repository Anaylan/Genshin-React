import YouTube from "react-youtube";

const YoutubeVideo = (props) => {
    return (
        <>
            {
                props.video ?
                    <div className={'w-100 pb-1'}>
                        <YouTube videoId={props.video} className={'w-100 hstack'} loading={"lazy"}/>
                    </div> : <></>
            }
        </>
    );
};

export default YoutubeVideo;