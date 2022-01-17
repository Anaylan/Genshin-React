import React, {useEffect, useState} from 'react';
import './../components/elements/css/characters.css';
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";
import axios from "axios";

const Characters = (props) => {

    const [characters, setCharacter] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/characters')
            .then(response => {
                setCharacter(response.data)
            })
    }, []);
    document.title = props.title;
    return (
        <div id={'characters'}>
            {characters.length !== 0
                ? <>
                    {characters.map((characters) =>
                        <Link key={characters.id} to={`/wiki/characters/${characters.id}`}>
                            <CharacterItem character={characters}/>
                        </Link>)
                    }
                </>
                : <div>Ничего не найдено</div>}

        </div>
    );
};

export default Characters;