import React, {lazy, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import CharacterCard from "../components/elements/characterCard";
import Button from "react-bootstrap/Button";
import {Col, Image, Row} from "react-bootstrap";
import StoryItem from "../components/elements/StoryItem";
import Accordion from "react-bootstrap/Accordion";
const Character = (props) => {

    // console.log(characters)
    const {id} = useParams();
    const location = useLocation();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/characters/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);
useEffect(() => {
        characters.map((character) => {
character.id == id ? setPost(character): ;
})
    }, [id]);
    return (
        <>
            {post && (
                <>
                    {/*<Image src={element}/>;*/}
                    {post.title}
                    <CharacterCard character={post} />
                    <Row>
                        <Col>
                            <Accordion>
                    {post.story.map((stories) =>
                        <Accordion.Item key={post.story.id} eventKey={post.story.id}>
                            <StoryItem story={post.story}/>
                        </Accordion.Item>
                    )
                    }
                            </Accordion>
                        </Col>
                    </Row>
                </>
            )}
            <Button onClick={f} />
        </>
    );
};

export default Character;
