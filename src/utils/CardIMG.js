import React from 'react';
import Albedo from './../assets/images/characters/Albedo/card.webp'

const CardIMG = ({folder}) => {
    return (
        <img src={`./../assets/images/characters/${folder}/face.webp`} alt={folder}/>
    );
};

export default CardIMG;