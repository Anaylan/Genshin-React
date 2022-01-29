import {Image} from "react-bootstrap";
import './css/StatsElement.css'

const StatsElement = (props) => {
    return (
        <>
            <tr className={"bg-light"}>
                <td className={'border-gray border-top border-end vertical-center fs-6 p-1'} rowSpan={2}>
                    {props.stats.phase}
                </td>
                <td className={'border-gray vertical-center p-1'}>
                    {props.stats.lvl_s}
                </td>
                <td className={'border-gray border vertical-center p-1'}>
                    {props.stats.hp_s}
                </td>
                <td className={'border-gray border vertical-center p-1'}>
                    {props.stats.atk_s}
                </td>
                <td className={'border-gray border vertical-center p-1'}>
                    {props.stats.def_s}
                </td>
                <td className={'border-gray border vertical-center p-1 fs-6'} rowSpan={2}>
                    {props.stats.sp_stat}
                </td>
                <td className={'border-gray border-top vertical-center p-1'} rowSpan={2}>
                    <div
                        className={"d-flex justify-content-center gap-2 vertical-center align-items-center flex-wrap"}>
                        {props.stats.materials.map((item) =>
                            <div key={item.material} className={"item d-flex align-items-center"}>
                                <Image
                                    src={require(`../../assets/images/materials/${item.material}.webp`)}
                                    alt={item.material}
                                    className={`${item.material_rar} border rounded p-1`} loading={"lazy"}
                                    height={"35px"}
                                    />
                                <p className={'m-0'}>{item.number}</p>
                            </div>
                        )}
                    </div>

                </td>
            </tr>
            <tr className={"bg-white"}>
                <td className={'border-gray  border vertical-center p-1'}>
                    {props.stats.lvl_e}
                </td>
                <td className={'border-gray border vertical-center p-1'}>
                    {props.stats.hp_e}
                </td>
                <td className={'border-gray border vertical-center p-1'}>
                    {props.stats.atk_e}
                </td>
                <td className={'border-gray border p-1'}>
                    {props.stats.def_e}
                </td>
            </tr>
        </>
    );
};

export default StatsElement;