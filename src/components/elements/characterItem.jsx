import React from 'react';
import {Image} from "react-bootstrap";

const CharacterItem = (props) => {

    console.log(props)
    return (
        <div className={`character border rounded ${props.character.weapon_type} bg-white`}>
            <a href='#' className={'text-center'}>
                <div className={`card-img  ${props.character.rarity}`}>
                    <Image src={props.character.src} alt={props.character.body}/>
                </div>
                <div className={'card-body w-100 fs-8 bg-white text-black'}>
                    {props.character.body}
                </div>
            </a>
        </div>
    );
};
export default CharacterItem;