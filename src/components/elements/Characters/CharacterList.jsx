import React from 'react';
import CharacterItem from "../characterItem";

const CharacterList = () => {
    return (
        <div id={'characters'}>
            <CharacterItem character={{title: 'Albedo', src: '/srs/assets/images/characters/Albedo/card.webp', weapon_type:'sword', rarity:'legendary'}}/>
        </div>
    );
};

export default CharacterList;