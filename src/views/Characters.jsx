import React, {useEffect, useState} from "react";
import "./../components/elements/css/characters.css";
import {Link} from "react-router-dom";
import CharacterItem from "../components/elements/characterItem";
import PostService from "../API/PostService";
import {nameApp} from "../App";
import {Helmet} from "react-helmet";

const Characters = () => {
    const [characters, setCharacter] = useState([]);
    document.title = "Персонажи | " + nameApp;
    useEffect(() => {
        fetchCharacter().then((response) => setCharacter(response));

    }, [characters]);
    characters.sort((a, b) => a.body.localeCompare(b.body));
    async function fetchCharacter() {
        return await PostService.getAllCharactersCard();
    }

    return (
        <>
            <Helmet>
                <title>Персонажи | {nameApp}</title>
                <meta name='description' content='Genshin Easy - Персонажи'/>
                <meta name='keywords' content='Genshin, impact, персонажи, геншин, импакт, новые'/>
            </Helmet>

            <p className='mt-1 h3 text-center'>Выберите персонажа</p>
            {characters.length !== 0 ? (
                <div id={"characters"}>
                    {characters.map((character) => (
                        <Link key={character.id} to={`/wiki/characters/${character.title}`}>
                            <CharacterItem key={character.id} character={character}/>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={"d-flex justify-content-center align-self-center"}>
                    <h3 className='text-center'>Ничего не найдено</h3>
                </div>
            )}
        </>
    );
};
export default Characters;
