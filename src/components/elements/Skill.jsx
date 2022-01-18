import {Image, NavLink} from "react-bootstrap";
import './css/Skills.css'
export const SkillDesc = (props) => {
    console.log(props)
    return (
        <>
            <div>
                {props.body}
            </div>

        </>
    );
};

export const SkillItem = (props) => {
    return (
        <>
            <Image src={props.icon}
                   loading={"lazy"} className={'skill_icon'} width="45px" height={'45px'}/>
            <div className="w-75 mx-1">
                {props.title}
            </div>

        </>
    );
};