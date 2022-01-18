import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";
import guide from "./Guide";
import Guide from "./Guide";

const Guides = (props) => {
    const [guides, setGuide] = useState([]);
    document.title = props.title;
    return (
        <>
            {guides.length !== 0
                ? <div id={'characters'}>
                    {guides.map((guide) =>
                        <Link key={guide.id} to={`/wiki/characters/${guide.title}`}>
                            <Guide key={guide.id} guide={guide}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Guides;