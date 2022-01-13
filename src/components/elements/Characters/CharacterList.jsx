import React, {useState} from 'react';
import CharacterItem from "../characterItem";
import './../css/characters.css';
import {Link} from "react-router-dom";

const CharacterList = () => {
    const [characters, setCharacters] = useState([
        {
            id: 1,
            title: "albedo",
            body: 'Альбедо',
            src: require('../../../assets/images/characters/Albedo/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'geo'
        },
        {
            id: 2,
            title: 'ayaka',
            body: 'Аяка',
            src: require('../../../assets/images/characters/Ayaka/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 3,
            title: 'aloy',
            body: 'Элой',
            src: require('../../../assets/images/characters/Aloy/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 4,
            title: 'amber',
            body: 'Эмбер',
            src: require('../../../assets/images/characters/Amber/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 5,
            title: 'barbara',
            body: 'Барбара',
            src: require('../../../assets/images/characters/Barbara/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 6,
            title: 'beidou',
            body: 'Бэй Доу',
            src: require('../../../assets/images/characters/Beidou/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 7,
            title: 'bennet',
            body: 'Беннет',
            src: require('../../../assets/images/characters/Bennet/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        }

    ])
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

export default CharacterList;