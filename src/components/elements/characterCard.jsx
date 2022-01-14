import React from 'react';
import './css/characterCard.css'
import {Image, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
const CharacterCard = (props) => {

    return (
        <aside className={`block bg-opacity-75 card-float border rounded-3 bg-light`}>
            <div className="myColor rounded-top border-bottom">
                <h2 className="m-0  text-center">
                    
                </h2>
            </div>
            <div className="border-bottom justify-content-center">
            </div>
            <Table className={'mb-0'}>
                <tbody>
                <tr>
                    <td className={'w-50 font'}>
                        Полное имя
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Редкость
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Элемент
                    </td>
                    <td className={'w-50 font'}>
                        <Image src={props.character.rar_src} className={'w-100'}/>
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Пол
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        День рождения
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Особое блюдо
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Оружие
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr>
                    <td className={'w-50 font'}>
                        Созвездие
                    </td>
                    <td className={'w-50 font'}>
                        
                    </td>
                </tr>
                <tr className={'border-bottom-0'}>
                    <td className={'w-50 font border-bottom-0'}>
                        Как получить
                    </td>
                    <td className={'w-50 font border-bottom-0'}>
                        
                    </td>
                </tr>
                </tbody>
            </Table>
        </aside>
    );
};
export default CharacterCard;