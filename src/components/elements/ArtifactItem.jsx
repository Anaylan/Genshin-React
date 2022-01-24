import { Image } from "react-bootstrap";
import "./css/Items.css";

const ArtifactItem = (props) => {
	return (
		<>
			<div className={`item border rounded ${props.artifact.type} bg-white`}>
				<div className={`card-img ${props.artifact.rarity} rounded`}>
					<Image
						className={"w-100"}
						loading={"lazy"}
						src={require(`../../assets/images/artifacts/${props.artifact.title}.webp`)}
						alt={props.artifact.body}
					/>
				</div>
				<div
					id={"text"}
					className={
						"card-body py-1 fs-9 text-wrap bg-white text-center text-black rounded-bottom"
					}>
					{props.artifact.body}
				</div>
			</div>
		</>
	);
};

export default ArtifactItem;
