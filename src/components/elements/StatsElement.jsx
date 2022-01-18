import React from 'react';
import {Image} from "react-bootstrap";
import './css/StatsElement.css'

const StatsElement = (props) => {
    return (
        <>
            <tr className={"bg-light"}>
                <td className={'border-gray vertical-center fs-6'} rowSpan={2}>
                    {props.stats.phase}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.lvl_s}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.hp_s}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.atk_s}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.def_s}
                </td>
                <td className={'border-gray vertical-center fs-6'} rowSpan={2}>
                    {props.stats.sp_stat}
                </td>
                <td className={'border-gray vertical-center w-45'} rowSpan={2}>
                    <div
                        className={"d-flex justify-content-center gap-2 vertical-center align-items-center flex-wrap m-2"}>
                        {props.stats.materials.map((item) =>
                            <div key={item.id} className={"item d-flex align-items-center"}>
                                <Image
                                    src={require(`../../assets/images/materials/${item.material}.webp`)}
                                    alt={item.material}
                                    className={`${item.material_rar} border rounded p-1`} loading={"lazy"}
                                    height={"35px"}
                                    key={item.id}/>
                                <p className={'m-0'} key={item.id}>{item.number}</p>
                            </div>
                        )}
                    </div>

                </td>
            </tr>
            <tr className={"bg-white"}>
                <td className={'border-gray vertical-center'}>
                    {props.stats.lvl_e}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.hp_e}
                </td>
                <td className={'border-gray vertical-center'}>
                    {props.stats.atk_e}
                </td>
                <td className={'border-gray'}>
                    {props.stats.def_e}
                </td>
            </tr>
        </>
    );
};

export default StatsElement;