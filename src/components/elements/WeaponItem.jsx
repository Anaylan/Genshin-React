import { Image } from "react-bootstrap";
import "./css/Items.css";

const WeaponItem = (props) => {
	return (
		<>
			<div className={`item border rounded ${props.weapon.type} bg-white`}>
				<div className={`card-img weapon ${props.weapon.rarity} rounded`}>
					<Image
						className={"w-100 h-100"}
						loading={"lazy"}
						src={require(`../../assets/images/weapons/${props.weapon.link}/card.webp`)}
						alt={props.weapon.body}
					/>
				</div>
				<div
					id={"text"}
					className={
						"card-body py-1 fs-9 text-wrap bg-white text-center text-black rounded-bottom"
					}>
					{props.weapon.body}
				</div>
			</div>
		</>
	);
};

export default WeaponItem;
