import React from "react";

export default function Banner() {
	try {
		return (
			<div className='text-justify'>
				<div
					className={"d-flex h-100 justify-content-center align-self-center"}>
					<p className='h3'>
						К сожалению данная страница находится в разработке
					</p>
				</div>
			</div>
		);
	} catch (error) {
		return (
			<div className={"d-flex h-100 justify-content-center align-self-center"}>
				<p className='h3'>К сожалению данная страница находится в разработке</p>
			</div>
		);
	}
}
