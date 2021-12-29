import React from 'react';
import {Image} from "react-bootstrap";

const CharacterItem = (props) => {

    console.log(props)
    return (
        <div className={`character border rounded ${props.character.weapon_type} ${props.character.rarity}`}>
            <a className={'text-center'}>
                <div className={'card-img rounded-bottom'}>
                    <Image src={props.character.src} alt={props.character.body}/>
                </div>
                <div className={'card-body rounded-bottom w-100 fs-8 bg-white text-black'}>
                    {props.character.body}
                </div>
            </a>
        </div>
    );
};
export default CharacterItem;