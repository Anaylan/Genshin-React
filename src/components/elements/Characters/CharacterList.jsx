import React, {useState} from 'react';
import CharacterItem from "../characterItem";


const CharacterList = () => {
    const [characters, setCharacters] = useState([
        {
            id: 1,
            body: 'Albedo',
            src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Albedo_Thumb.png/revision/latest?cb=20210213163457',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'geo'
        },
        {
            id: 2,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 3,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 4,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 5,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 6,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 7,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 8,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 9,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 10,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 11,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 12,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 13,
            body: 'Ayaka',
            src: '/srs/assets/images/characters/Albedo/card.webp',
            alt: 'Альбедо',
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },


    ])
    return (
        <div id={'characters'}>
            {characters.map((characters) =>
                <CharacterItem character={characters} key={characters.id}/>)
            }
        </div>
    );
};

export default CharacterList;