import React, {useState} from 'react';
import CharacterItem from "../characterItem";

import './../css/characters.css'
const CharacterList = () => {
    const [characters, setCharacters] = useState([
        {
            id: 1,
            body: 'Альбедо',
            src: require('../../../assets/images/characters/Albedo/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'geo'
        },
        {
            id: 2,
            body: 'Аяка',
            src: require('../../../assets/images/characters/Ayaka/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 3,
            body: 'Элой',
            src: require('../../../assets/images/characters/Aloy/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 4,
            body: 'Эмбер',
            src: require('../../../assets/images/characters/Amber/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 5,
            body: 'Барбара',
            src: require('../../../assets/images/characters/Barbara/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 6,
            body: 'Бэй Доу',
            src: require('../../../assets/images/characters/Beidou/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 7,
            body: 'Беннет',
            src: require('../../../assets/images/characters/Bennet/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 8,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Chongyun/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 9,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Diluc/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 10,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Diona/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 11,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Eula/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 12,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Fischl/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 13,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Ganyu/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 14,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Gorou/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 15,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Hu Tao/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 16,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Itto/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 17,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Jean/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 18,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Kaeya/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 19,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Kazuha/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 20,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Keqinq/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 21,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Klee/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 22,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Kokomi/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 23,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Lisa/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 24,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Mona/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 25,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Ningguang/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 26,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Noelle/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 27,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Qiqi/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 28,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Raiden/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 29,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Razor/card.webp'),
            weapon_type: 'sword',
            rarity: 'legendary',
            element: 'cryo'
        },
        {
            id: 30,
            body: 'Ayaka',
            src: require('../../../assets/images/characters/Rosaria/card.webp'),
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