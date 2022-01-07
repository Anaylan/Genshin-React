import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Character = () => {
    const {id} = useParams();
    console.log({id});
    console.log(useLocation());
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        fetch(`wiki/characters/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data))
    }, [id])
    return (
        <div>
        {character && (
            <>
            {/* <h1>{character.body}</h1> */}
            {/* <p>{character.id}</p> */}
            </>
        )}
        </div>
    );
};

export default Character;