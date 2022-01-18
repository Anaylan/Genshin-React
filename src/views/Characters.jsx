import React, {useEffect, useState} from 'react';
import './../components/elements/css/characters.css';
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";
import PostService from "../API/PostService";

const Characters = (props) => {

        const [characters, setCharacter] = useState([])
        // useEffect(() => {
        //     fetchCharacters()
        //         .then(response => setCharacter(response))
        // }, []);
        useEffect(() => {
            fetchCharacter()
                .then(response => setCharacter(response));
        }, []);

        async function fetchCharacters() {
            const item = await PostService.getAllCharacters();
            return item;
        }

        async function fetchCharacter() {
            const items = await PostService.getAllCharacter();
            return items;
        }

        document.title = props.title;
        return (
            <>
                {characters.length !== 0
                    ? <div id={'characters'}>
                        {characters.map((character) =>
                            <Link key={character.id} to={`/wiki/characters/${character.title}`}>
                                <CharacterItem key={character.id} character={character}/>
                            </Link>)
                        }
                    </div>
                    : <div className={'d-flex justify-content-center align-self-center'}>
                        <h3>Ничего не найдено</h3>
                    </div>}

            </>
        );
    }
;

export default Characters;