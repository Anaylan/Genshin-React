import React, {useState} from 'react';
import CharacterItem from "../characterItem";
import './../css/characters.css';
import {Link} from "react-router-dom";

const CharacterList = (props) => {
    const [characters] = useState(props.data)
    console.log(characters)
    return (
        <div id={'characters'}>
            {characters.map((characters) =>
                <Link key={characters.id} to={`/wiki/characters/${characters.id}`}>
                    <CharacterItem character={characters}/>
                </Link>)
            }
        </div>
    );
};

export default CharacterList;