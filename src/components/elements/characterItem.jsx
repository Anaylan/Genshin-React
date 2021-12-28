import React from 'react';
import {Card, CardGroup, CardImg} from "react-bootstrap";
import classes from './css/character.css'
const CharacterItem = (props) => {
    console.log(props)
    return (
        <div className={`character border rounded ${props.character.weapon_type} ${props.character.rarity}`}>
            <a className={'text-center'}>
                <div className={'card-img'}>
                    <img className={'w-100'} src={props.character.src} alt={props.character.alt}/>
                </div>
                <div className={'card-body fs-8 bg-white text-black'}>
                    {props.character.body}
                </div>
            </a>
        </div>
    );
};
export default CharacterItem;