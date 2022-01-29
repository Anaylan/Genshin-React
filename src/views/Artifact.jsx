import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";
import {Helmet} from "react-helmet";
import {nameApp} from "../App";

const Artifact = (props) => {
    const [post, setPost] = useState(null);

    return (
        <>

            {post.length !== 0
                ? <>
                    <Helmet>
                        <title>{post.body} | {nameApp}</title>
                    </Helmet>
                    <div id={'characters'}>
                        {post.map((item) =>
                            <Link key={item.id} to={`/wiki/artifacts/${item.title}`}>
                                <Guide key={item.id} artifact={item}/>
                            </Link>)
                        }
                    </div>
                </>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3 className='text-center'>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Artifact;