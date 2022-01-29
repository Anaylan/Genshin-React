import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";
import {nameApp} from "../App";
import {Helmet} from "react-helmet";

const Artifacts = (props) => {
    const [artifacts, setArtifact] = useState([]);
    document.title = props.title;

    return (
        <>
            <Helmet>
                <title>Артефакты | {nameApp}</title>
                <meta name='description' content='Genshin Easy - Оружие'/>
                <meta name='keywords' content='Genshin, impact, артефакты, геншин, импакт, лучшие, новые, сеты, сэты'/>
            </Helmet>
            {artifacts.length !== 0
                ? <div id={'characters'}>
                    {artifacts.map((item) =>
                        <Link key={item.id} to={`/wiki/artifacts/${item.title}`}>
                            <Guide key={item.id} artifact={item}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3 className='text-center'>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Artifacts;