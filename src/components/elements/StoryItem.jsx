import {Accordion} from "react-bootstrap";
import AccordionBody from "react-bootstrap/AccordionBody";
import './css/style.css'
const StoryItem = (props) => {
    return (
        <>
            <Accordion.Header>{props.story.title}</Accordion.Header>
            <AccordionBody><div className={'white-sp'}>{props.story.body}</div></AccordionBody>
        </>
    );
};

export default StoryItem;