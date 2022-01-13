import React, {useEffect, useState} from 'react';
import CharacterList from '../components/elements/Characters/CharacterList';
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";


const Characters = (props) => {

    const [characters, setCharacter] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/characters')
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, []);

    document.title = props.title;
    return (
        <div id={'characters'}>
            {characters.map((characters) =>
                <Link key={characters.id} to={`/wiki/characters/${characters.title}`}>
                    <CharacterItem character={characters} key={characters.id}/>
                </Link>)
            }
        </div>
    );
};

export default Characters;