import {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";

const Weapons = (props) => {
    const [weapons, setWeapon] = useState([]);
    document.title = props.title;

    return (
        <>
            {weapons.length !== 0
                ? <div id={'characters'}>
                    {weapons.map((weapon) =>
                        <Link key={weapon.id} to={`/wiki/characters/${weapon.title}`}>
                            <Guide key={weapon.id} weapon={weapon}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Weapons;