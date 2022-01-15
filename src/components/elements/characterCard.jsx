import React from 'react';
import './css/characterCard.css'
import {Image, Table} from "react-bootstrap";

const CharacterCard = (props) => {

    return (
        <aside className={`block bg-opacity-75 card-float border rounded-3 bg-light`}>
            <div className="myColor rounded-top border-bottom">
                <h2 className="m-0 py-1 text-center">
                    {props.character.body}
                </h2>
            </div>
            <div className="border-bottom justify-content-center">
                <Image loading={"lazy"} src={require(`../../assets/images/characters/${props.character.title}/card.webp`)}
                       className={'w-100'}/>
            </div>
            <Table className={'mb-0'}>
                <tbody>
                <tr>
                    <td className={'w-50 font'}>
                        Полное имя
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.fullname}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Редкость
                    </td>
                    <td className={'w-50 font'}>
                        <Image loading={"lazy"} src={require(`../../assets/images/rarity/${props.character.rarity}.webp`)}/>
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Элемент
                    </td>
                    <td className={'w-50 font'}>
                        <Image loading={"lazy"} src={require(`../../assets/images/elements/${props.character.element}.webp`)}
                               width={'25px'}/>
                        {props.character.el_name}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Пол
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.gender}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        День рождения
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.birthday}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Особое блюдо
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.sp_food}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Оружие
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.w_type}
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Созвездие
                    </td>
                    <td className={'w-50 font'}>
                        {props.character.constellation}
                    </td>
                </tr>
                <tr className={'border-bottom-0'}>
                    <td className={'w-50 font border-bottom-0'}>
                        Как получить
                    </td>
                    <td className={'w-50 font border-bottom-0'}>
                        {props.character.w_get}
                    </td>
                </tr>
                </tbody>
            </Table>
        </aside>
    );
};
export default CharacterCard;