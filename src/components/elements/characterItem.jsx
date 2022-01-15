import React from 'react';
import {Image} from "react-bootstrap";

const CharacterItem = (props) => {
    return (
        <div className={`character border rounded ${props.character.weapon_type} bg-white`}>
            <div className={`card-img  ${props.character.rarity} rounded-0 rounded-top`}>
                <Image loading={"lazy"} src={require(`../../assets/images/characters/${props.character.title}/card.webp`)}
                       alt={props.character.body}/>
            </div>
            <div className={'card-body w-100 fs-8 bg-white text-black rounded-bottom'}>
                {props.character.body}
            </div>
        </div>
    );
};
export default CharacterItem;