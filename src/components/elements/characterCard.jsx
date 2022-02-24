import React from "react";
import "./css/characterCard.css";
import { Image, Table } from "react-bootstrap";

const CharacterCard = (props) => {
	return (
		<aside
			className={`mb-3 block bg-opacity-75 card-float 
                                    border rounded-3 bg-light`}>
			<div className='myColor rounded-top border-bottom'>
				<h2 className='m-0 py-1 text-center'>{props.character.body}</h2>
			</div>
			<div className='border-bottom d-flex justify-content-center m-0'>
				<Image
					src={require(`../../assets/images/characters/${props.character.title}/face.webp`)}
					className={"h-auto w-auto"}
				/>
			</div>
			<Table size='sm' responsive='sm' className={"mb-0 fs-6"}>
				<tbody>
					<tr>
						<td className={" font vertical-center"}>Полное имя</td>
						<td className={" font vertical-center"}>
							{props.character.fullname}
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>Редкость</td>
						<td className={"w-50 font vertical-center"}>
							<Image
								className='w-auto'
								src={require(`../../assets/images/rarity/${props.character.rarity}.webp`)}
							/>
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>Элемент</td>
						<td className={"w-50 font vertical-center"}>
							<Image
								src={require(`../../assets/images/elements/${props.character.element}.webp`)}
								width={"25px"}
							/>
							{props.character.el_name}
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>Оружие</td>
						<td className={"w-50 font vertical-center"}>
							{props.character.w_type}
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>Пол</td>
						<td className={"w-50 font vertical-center"}>
							{props.character.gender}
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>День рождения</td>
						<td className={"w-50 font vertical-center"}>
							{props.character.birthday}
						</td>
					</tr>
					<tr>
						<td className={"w-50 font vertical-center"}>Особое блюдо</td>
						<td className={"w-50 font vertical-center"}>
							{props.character.sp_food}
						</td>
					</tr>
					<tr className={"border-bottom-0"}>
						<td className={"w-50 font border-bottom-0 vertical-center"}>
							Как получить
						</td>
						<td className={"w-50 font border-bottom-0 vertical-center"}>
							<ul className={'px-3 mb-0'}>
								{props.character.w_get.map((way) =>
								<li key={way}>{way}</li>)}
							</ul>
						</td>
					</tr>
				</tbody>
			</Table>
		</aside>
	);
};
export default CharacterCard;
