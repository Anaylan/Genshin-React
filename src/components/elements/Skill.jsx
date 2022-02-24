import {Image} from "react-bootstrap";
import './css/Skills.css'
import './css/style.css'

export const SkillDesc = (props) => {
    return (
        <>
            {props.skill.map((describe) =>
                <div className={' white-sp'} key={describe.id}>
                    <p className={'h6 mb-0'}>{describe.title}</p>
                    <p className={'fs-8'}>{describe.body}</p>
                </div>
            )}

        </>
    );
};

export const SkillItem = (props) => {
    return (
        <>
            <div className={'w-auto m-0 p-0 g-0 gap-0 text-center skill_item'}>
                <Image src={require(`../../assets/images/characters/${props.char_title}/${props.icon}.webp`)}
                       loading={"lazy"} className={'skill_icon'} width="45px" height={'45px'}/>
            </div>
            <div className="w-auto mx-1">
                {props.title}
            </div>
        </>
    );
};