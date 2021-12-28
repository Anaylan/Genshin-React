import React from 'react';
import {Card, CardGroup, CardImg} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const CharacterItem = (props) => {
    console.log(props)
    return (
        <Card className={`character border border-dark rounded ${props.character.weapon_type} ${props.character.rarity}`}>
            <a className={'text-center rounded-0'}>
                <div className={'card-img'}>
                    <CardImg className={'w-100'} src={props.character.src}/>
                </div>
                <div className={'card-body bg-white text-black'}>
                    {props.character.title}
                </div>
            </a>
        </Card>
    );
};
export default CharacterItem;