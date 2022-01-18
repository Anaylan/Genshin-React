import {Image} from "react-bootstrap";
import './css/Skills.css'

export const SkillDesc = (props) => {
    return (
        <>
        {props.skill.map((describe) =>
            <div key={describe.id}>
                <p className={'h6 mb-0'}>{describe.title}</p>
                <p className={'fs-8'}>{describe.body}</p>
            </div>
        )}

</>
)
    ;
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