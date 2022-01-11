import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import StoryItem from "./StoryItem";

const CharacterStory = () => {

    const [stories, setStories] = useState([
        {
            id: 1,
            title: 'albedo',
            body: 'Альбедо',
        },
        {
            id: 2,
            title: 'albedo2',
            body: 'Альбедо2',
        },
        {
            id: 3,
            title: 'albedo3',
            body: 'Альбедо3',
        },
    ])
    console.log(stories)

    return (
        <Row>
            <Accordion>
                {stories.map((stories) =>
                    <Accordion.Item key={stories.id} eventKey={stories.id}>
                        <StoryItem story={stories}/>
                    </Accordion.Item>
                )
                }
            </Accordion>
        </Row>
    );
};

export default CharacterStory;