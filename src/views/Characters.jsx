import React from 'react';
import CharacterList from '../components/elements/Characters/CharacterList';
const Characters = (props) => {
    document.title = props.title;
    return (
        <CharacterList/>
    );
};

export default Characters;