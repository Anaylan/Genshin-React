import React from "react";
import { Image } from "react-bootstrap";

const CharacterItem = (props) => {
	return (
		<article
			className={`character border rounded-top rounded-bottom ${props.character.weapon_type}`}>
			<div
				className={`card-img  ${props.character.rarity} rounded-0 rounded-top`}>
				<Image
					loading={"lazy"}
					className='h-auto w-100'
					src={require(`../../assets/images/characters/${props.character.title}/card.webp`)}
					alt={props.character.body}
				/>
			</div>
			<span
				className={
					"card-body w-100 fs-7 h-auto bg-white text-black rounded-bottom"
				}>
				{props.character.body}
			</span>
		</article>
	);
};
export default CharacterItem;
