import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";
import {Helmet} from "react-helmet";
import {nameApp} from "../App";

const Weapons = (props) => {
    const [weapons, setWeapon] = useState([]);
    document.title = props.title;

    return (
        <>
            <Helmet>
                <title>Оружие | {nameApp}</title>
                <meta name='description' content='Genshin Easy - Оружие'/>
                <meta name='keywords' content='Genshin, impact, оружие, геншин, импакт, новые'/>
            </Helmet>
            {weapons.length !== 0
                ? <div id={'characters'}>
                    {weapons.map((weapon) =>
                        <Link key={weapon.id} to={`/wiki/characters/${weapon.title}`}>
                            <Guide key={weapon.id} weapon={weapon}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3 className={'text-center'}>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Weapons;