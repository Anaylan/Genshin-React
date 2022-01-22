import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	Accordion,
	Col,
	Container,
	Figure,
	Nav,
	Row,
	Tab,
	Table,
	Tabs,
} from "react-bootstrap";
import StoryItem from "../components/elements/StoryItem";
import CharacterCard from "../components/elements/characterCard";
import { SkillDesc, SkillItem } from "../components/elements/Skill";
import YoutubeVideo from "../components/elements/YoutubeVideo";
import StatsElement from "../components/elements/StatsElement";
import WeaponItem from "../components/elements/WeaponItem";
import { nameApp } from "../App";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, EffectCards]);

const Character = () => {
	const { title } = useParams();
	const [post, setPost] = useState(null);
	useEffect(() => {
		fetchCharacter();
	}, [fetchCharacter, title]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function fetchCharacter() {
		const response = require("../data/characters");
		// eslint-disable-next-line array-callback-return
		response.characters.map((character) => {
			if (title === character.title) {
				setPost(character);
			}
		});
	}

	document.title = title + " | " + nameApp;
	return (
		<>
			{post && (
				<div className={"text-justify"}>
					<CharacterCard character={post} />
					<div className='mb-4'>
						<h2>Описание</h2>
						{post.describe}
					</div>
					<div className='mb-4'>
						<h2>Премущества</h2>
						<ul>
							{post.plus.map((advantage) => (
								<li key={advantage.id}>{advantage.body}</li>
							))}
						</ul>
						<h2>Недостатки</h2>
						<ul>
							{post.minus.map((disadvantage) => (
								<li key={disadvantage.id}>{disadvantage.body}</li>
							))}
						</ul>
					</div>
					<div className='mb-4'>
						<h2>История</h2>
						<Row>
							<Col>
								<Accordion>
									{post.stories.map((story) => (
										<Accordion.Item key={story.id} eventKey={story.id}>
											<StoryItem key={story.id} story={story} />
										</Accordion.Item>
									))}
								</Accordion>
							</Col>
						</Row>
					</div>
					<div className={"mb-4"}>
						<h2>Базовые характеристики</h2>
						<Figure
							className={
								"border-start border-end border-gray overflow-auto w-100 m-0 p-0"
							}>
							<Table
								className={"fs-8 table-striped table-responsive m-0 w-100"}>
								<thead className={"text-center text-wrap"}>
									<tr className={"table-dark table-bordered"}>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											Фаза возвышения
										</td>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											Уровень
										</td>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											Базовое HP
										</td>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											Базовая атака
										</td>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											Базовая защита
										</td>
										<td
											className={"vertical-center p-1 border-light border-end"}>
											{post.sp_stat}
										</td>
										<td className={"w-45 vertical-center p-1"}>
											Материалы для возвышения
										</td>
									</tr>
								</thead>
								<tbody className={"text-wrap text-center"}>
									{post.stats.map((stat) => (
										<>
											<StatsElement key={stat.id} stats={stat} />
										</>
									))}
								</tbody>
							</Table>
						</Figure>
					</div>
					<div className='mb-4'>
						<h2>Таланты</h2>
						<Row className='justify-content-center d-flex overflow-hidden m-1 bg-transparent w-100'>
							<Tab.Container id='skills' defaultActiveKey='first'>
								<Col
									xs={10}
									md={5}
									sm={10}
									lg={4}
									xl={4}
									className={"mb-3 px-0 pr-4"}>
									<Nav
										variant='pills'
										className={
											"fs-7 shadow h-auto rounded bg-white flex-column g-0 gap-0 border-0 p-0 m-0"
										}>
										{post.skills.map((skill) => (
											<Nav.Item key={skill.id}>
												<Nav.Link
													className={
														"w-100 border-start border-end border-top rounded-0 list-item d-flex align-items-center"
													}
													key={skill.id}
													eventKey={skill.tab_id}>
													<SkillItem
														key={skill.id}
														icon={skill.icon}
														title={skill.title}
													/>
												</Nav.Link>
											</Nav.Item>
										))}
									</Nav>
								</Col>
								<Col
									xs={12}
									md={7}
									xl={8}
									sm={12}
									lg={7}
									className={"mb-3 px-2 py-3 bg-white rounded border shadow"}>
									<Tab.Content>
										{post.skills.map((skill) => (
											<Tab.Pane key={skill.id} eventKey={skill.tab_id}>
												<SkillDesc
													classname={"py-2"}
													list={skill.list}
													key={skill.id}
													skill={skill.body}
												/>
												{skill.list ? (
													<ul className={"fs-7"}>
														{skill.list.map((item) => (
															<li key={item.id}>{item.item}</li>
														))}
													</ul>
												) : (
													<></>
												)}
												<YoutubeVideo video={skill.link} />
											</Tab.Pane>
										))}
									</Tab.Content>
								</Col>
							</Tab.Container>
						</Row>
					</div>
					<div className='mb-4'>
						<h2>Созвездия</h2>
						<Row className='justify-content-center d-flex overflow-hidden m-1 bg-transparent w-100'>
							<Tab.Container id='skills' defaultActiveKey='first'>
								<Col
									xs={10}
									md={5}
									sm={10}
									lg={4}
									xl={4}
									className={"mb-3 px-0 pr-4"}>
									<Nav
										variant='pills'
										className={
											"w-100 fs-7 shadow h-auto rounded bg-white flex-column g-0 gap-0 border-0 p-0 m-0"
										}>
										{post.constellations.map((constellation) => (
											<Nav.Item key={constellation.id}>
												<Nav.Link
													className={
														"border-start border-end border-top rounded-0 list-item d-flex align-items-center"
													}
													key={constellation.id}
													eventKey={constellation.tab_id}>
													<SkillItem
														key={constellation.id}
														icon={constellation.icon}
														title={constellation.title}
													/>
												</Nav.Link>
											</Nav.Item>
										))}
									</Nav>
								</Col>
								<Col
									xs={12}
									md={7}
									xl={8}
									sm={12}
									lg={7}
									className={"mb-3 px-2 py-3 bg-white rounded border shadow"}>
									<Tab.Content>
										{post.constellations.map((constellation) => (
											<Tab.Pane
												key={constellation.id}
												eventKey={constellation.tab_id}>
												<SkillDesc
													classname={"py-2"}
													list={constellation.list}
													key={constellation.id}
													skill={constellation.body}
												/>
												{constellation.list ? (
													<ul className={"fs-7"}>
														{constellation.list.map((item) => (
															<li key={item.id}>{item.item}</li>
														))}
													</ul>
												) : (
													<></>
												)}
											</Tab.Pane>
										))}
									</Tab.Content>
								</Col>
							</Tab.Container>
						</Row>
					</div>
					<div className='mb-4'>
						<h2>Рекомендуемые билды</h2>
						<div className='bg-transparent rounded'>
							<Container
								fluid
								className='container-lg justify-content-center container-fluid p-3'>
								<Tabs
									defaultActiveKey='build_1'
									id='builds'
									className='border-0 d-flex justify-content-center flex-nowrap align-items-end'>
									{post.builds.map((build) => (
										<Tab eventKey={build.key} title={build.title}>
											<Row className={"bg-white rounded border py-3"}>
												<>
													<Col>123</Col>
													<Col md={4} xs={8} id={"weapons"}>
														<Swiper
															// effect={"cards"}
															grabCursor={true}
															
															slidesPerView={2}
															spaceBetween={30}
															pagination={{
																clickable: true,
															}}
															className='w-75 py-5 px-3 h-auto mySwiper'>
															{build.weapons.map((item) => (
																<>
																	<SwiperSlide>
																		<WeaponItem weapon={item} />
																	</SwiperSlide>
																</>
															))}
														</Swiper>
													</Col>
												</>
											</Row>
										</Tab>
									))}
									<Tab eventKey='1' title='Home'>
										<Row className={"bg-white rounded border"}>
											<Col className={"py-3"}>12312312 1234sadffsad</Col>
										</Row>
									</Tab>
									<Tab eventKey='12' title='Home'>
										<Row className={"bg-white rounded border"}>
											<Col className={"py-3"}>12312312 1234asd</Col>
										</Row>
									</Tab>
								</Tabs>
							</Container>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Character;
