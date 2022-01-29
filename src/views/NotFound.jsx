import React from "react";

const NotFound = () => {
	document.title = "Страница не найдена";

	return (
		<>
			<div className={"d-flex justify-content-center align-self-center"}>
				<h3 className='text-center'>К сожалению данной страницы не существует</h3>
			</div>
		</>
	);
};

export default NotFound;
