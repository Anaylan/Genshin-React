import React, {useEffect, useState} from 'react';
import './../components/elements/css/characters.css';
import CharacterList from "../components/elements/Characters/CharacterList";

const Characters = (props) => {

    const [characters, setCharacter] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/characters')
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, []);
    document.title = props.title;
    return (
        <>
            {characters.length !== 0
                ? <CharacterList data={characters}/>
                : <div>Ничего не найдено</div>}

        </>
    );
};

export default Characters;