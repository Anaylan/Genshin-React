import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";

const Artifacts = (props) => {
    const [artifacts, setArtifact] = useState([]);
    document.title = props.title;

    return (
        <>
            {artifacts.length !== 0
                ? <div id={'characters'}>
                    {artifacts.map((item) =>
                        <Link key={item.id} to={`/wiki/artifacts/${item.title}`}>
                            <Guide key={item.id} artifact={item}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Artifacts;