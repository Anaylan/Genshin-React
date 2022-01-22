import React, {useEffect, useState} from 'react';
import './../components/elements/css/characters.css';
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";
import PostService from "../API/PostService";
import {nameApp} from "../App";

const Characters = (props) => {

        const [characters, setCharacter] = useState([])
        const [filtered, setFiltered] = useState('')


        useEffect(() => {
            fetchCharacter()
                .then(response => setCharacter(response));
        }, []);
        document.title = 'Персонажи | ' + nameApp;

        async function fetchCharacter() {
            const items = await PostService.getAllCharacter();
            return items;
        }

        const filter = (sort) => {
            // characters.map((character) => {
            //     if (character.element == e.target.name) {
            //         setFiltered(character)
            //         setCharacter([...characters].sort((a, b) => a[e.target.name].localeCompare(b[e.target.name])
            //         ));
            //     }
            //
            // })
            console.log(sort);
            setFiltered(sort);
            setCharacter([...characters].sort((a, b) => a[sort].localeCompare(b[sort])));

        }

        function f() {
            console.log(filtered)
        }

        return (
            <>

                {/*<Button onClick={f}/>*/}
                {/*<MyFilter*/}
                {/*    value={filtered}*/}
                {/*    options={[*/}
                {/*    {name: 'geo', value: 'geo'},*/}
                {/*    {name: 'cryo', value: 'cryo'}*/}
                {/*]}*/}
                {/*onClick={filter}/>*/}


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