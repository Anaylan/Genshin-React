import {lazy, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import CharacterCard from "../components/elements/characterCard";

const Character = (props) => {


    const params = useParams();
    const title = params.title;
    document.title = props.title;
    const Ch = lazy(() => import(`./characters/${title}`));
    useEffect(() => {
        console.log(1);
    }, [])
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div>
            <CharacterCard met={title}/>
        </div>
    );
};

export default Character;