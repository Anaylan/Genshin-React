import React from 'react';
import {Image} from "react-bootstrap";
import {Link} from 'react-router-dom';

const CharacterItem = (props) => {
    console.log(props)
    return (
        <div className={`character border rounded ${props.character.weapon_type} bg-white`}>
            <Link to={`/wiki/characters/${props.character.id}`} className={'text-center'}>
                <div className={`card-img  ${props.character.rarity}`}>
                    <Image src={props.character.src} alt={props.character.body}/>
                </div>
                <div className={'card-body w-100 fs-8 bg-white text-black'}>
                    {props.character.body}
                </div>
            </Link>
        </div>
    );
};
export default CharacterItem;