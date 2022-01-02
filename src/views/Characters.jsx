import React from 'react';
import CharacterList from '../components/elements/Characters/CharacterList';
const Characters = () => {
    document.title = "Персонажи | Genshin Easy";
    return (
        <CharacterList/>
    );
};

export default Characters;