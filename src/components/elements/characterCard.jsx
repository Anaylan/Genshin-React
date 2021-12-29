import React from 'react';

const CharacterItem = (props) => {

    console.log(props)
    return (
        <div className={`character border rounded ${props.character.weapon_type} ${props.character.rarity}`}>
            <a className={'text-center'}>
                <div className={'card-img'}>
                    <img className={''} src={props.character.src} alt={props.character.alt}/>
                </div>
                <div className={'card-body fs-8 bg-white text-black'}>
                    {props.character.body}
                </div>
            </a>
        </div>
    );
};
export default CharacterItem;