import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router';
import { Link } from 'react-router-dom';
import CharacterCard from "../components/elements/characterCard";
import CharacterStory from "../components/elements/characterStory";

const Character = () => {


    const {title} = useParams();
    document.title = `${title}`;


    return (
        <div>
            <CharacterCard met={{title}}/>
            <CharacterStory/>
        </div>
    );
};

export default Character;