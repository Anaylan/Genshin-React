import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import StoryItem from "./StoryItem";

const CharacterStory = (props) => {


    return (
        <Row>
            <Col>
                <Accordion>
                    {props.stories.map((stories) =>
                        <Accordion.Item key={stories.id} eventKey={stories.id}>
                            <StoryItem story={stories}/>
                        </Accordion.Item>
                    )
                    }
                </Accordion>
            </Col>
        </Row>
    );
};

export default CharacterStory;