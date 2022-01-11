import React from 'react';
import {Accordion} from "react-bootstrap";
import AccordionBody from "react-bootstrap/AccordionBody";

const StoryItem = (props) => {
    console.log(props)
    return (
        <>
            <Accordion.Header>{props.story.title}</Accordion.Header>
            <AccordionBody>{props.story.body}</AccordionBody>
        </>
    );
};

export default StoryItem;