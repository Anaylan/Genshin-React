import { Link } from "react-router-dom";

// import styles
import "swiper/css";
import "swiper/css/pagination";

// import custom UI modules

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Image } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Pagination]);

function Banner(props) {
	return (
		<>
			<Swiper
				spaceBetween={10}
				breakpoints={{
					0: {
						spaceBetween: 10,
						slidesPerView: 1,
					},
					700: {
						spaceBetween: 20,
						slidesPerView: 2,
					},
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				className='w-100 pb-5 pt-1 px-2 h-auto'
				id='banners'>
				{props.info.map((item) => (
					<SwiperSlide key={item.title}>
						<div id='banner'>
							<Link to={`/wiki/banners/${item.title}`}>
								<Image
									src={require(`../../assets/images/banners/${item.title}.webp`)}
									loading='lazy'
									className='w-100 border rounded'
									alt={item.name}
								/>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Banner;
