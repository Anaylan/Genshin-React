import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import PostService from "../API/PostService"
import { Link } from "react-router-dom";

// import styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/banners.css";

// import custom UI modules

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import Banner from "../components/elements/Banner";


// install Swiper modules
SwiperCore.use([Pagination]);

const Home = () => {
	const [post, setPost] = useState([]);
	useEffect(() => {
		fetchInfo().then((response) => setPost(response));
	}, []);

	async function fetchInfo() {
		const items = await PostService.getHome();
		return items;
	}
	document.title = "Путеводитель по Тейвату | Genshin Easy";
	return (
		<>
			{post.length !== 0 ? (
				<>
					<div className='mb-0'>
						<p className='h5'>Молитвы</p>
						<Banner info={post.wishes}/>
					</div>
					<div className='mb-2'>
						<p className='h5'>Мероприятия</p>
						<Banner info={post.events}/>
					</div>
				</>
			) : (
				<div className={"d-flex justify-content-center align-self-center"}>
					<h3>Ничего не найдено</h3>
				</div>
			)}
			<div className='mt-4 mb-3 text-justify'>
				<h4>Ваш путеводитель по миру Genshin Impact</h4>
				<p>
					В настоящее время существует огромное количество ресурсов,
					предоставляющих полезные гайды об игре Genshin Impact, но в
					русскоязычном сообществе эти ресурсы в основном являются новостными
					порталами и касаются Genshin Impact лишь поверхностно.
				</p>
				<p>
					В интернете есть огромное количество информации об игре, но часть из
					нее неполная или неактуальная и не успевает за очень быстрым темпом
					разработки Genshin Impact. Некоторые из наиболее полезных ресурсов
					практически не доступны на русском языке или являются неполными.
				</p>
				<p>
					Цель данного сайта - предоставить пользователям нужные инструменты для
					изучения мира Genshin Impact и компенсировать недостаток полезных
					гайдов.
				</p>
				<p>
					В будущем мы хотели бы расширить функциональность этого сайта и
					собрать самую актуальную и уникальную информацию, необходимую
					путешественникам, посещающим Тейват. Если у вас есть замечания по
					работе сайта или предложения по ее улучшению, обязательно присылайте
					их по адресу: contacts@genshin-easy.ru.
				</p>
				<p>
					Большое спасибо за уделенное время и мы надеемся увидеть вас снова в
					Тейвате. «К звёздам и безднам»
				</p>
			</div>
		</>
	);
};

export default Home;
