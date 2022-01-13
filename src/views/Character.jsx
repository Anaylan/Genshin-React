import {lazy, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import CharacterCard from "../components/elements/characterCard";


const Character = (props) => {


    const {title} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/characters/${title}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [title]);

    return (
        <div>
            <p>
                {title}
            </p>
        </div>
    );
};

export default Character;