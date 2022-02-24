import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Accordion, Col, Container, Figure, Nav, Row, Tab, Table, Tabs,} from "react-bootstrap";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import {Helmet} from "react-helmet";


// Import custom components
import StoryItem from "../components/elements/StoryItem";
import CharacterCard from "../components/elements/characterCard";
import {SkillDesc, SkillItem} from "../components/elements/Skill";
import StatsElement from "../components/elements/StatsElement";
import {nameApp} from "../App";
import PostService from "../API/PostService";
import BuildsSection from "../components/elements/BuildsSection";


// Import styles
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "../components/elements/css/characterTemplate.css";

const Character = () => {
    const {title} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetchCharacter();
    }, [title]);

    async function fetchCharacter() {
        const items = await PostService.getAllCharacters();
        items.map((item) => {
            if (item.title === title) {
                return setPost(item);
            }
        });
    }
    return (
        <>
            <Helmet>
                <title>
                    {post.body} | {nameApp}
                </title>
                <meta name='description' content={post.describe}/>
                <meta name='keywords' content=''/>
            </Helmet>
            {post && (
                <>
                    <div className={"text-justify"}>
                        <CharacterCard character={post}/>
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
                                                <StoryItem story={story}/>
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
                                    hover
                                    responsive={"lg"}
                                    className={"fs-8 table-striped m-0 w-100"}>
                                    <thead className={"text-center text-wrap"}>
                                    <tr className={"table-dark table-bordered"}>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            Фаза возвышения
                                        </td>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            Уровень
                                        </td>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            Базовое HP
                                        </td>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            Базовая атака
                                        </td>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            Базовая защита
                                        </td>
                                        <td
                                            className={
                                                "vertical-center p-1 border-light border-end"
                                            }>
                                            {post.sp_stat}
                                        </td>
                                        <td className={"w-405 vertical-center p-1"}>
                                            Материалы для возвышения
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody className={"text-wrap text-center"}>
                                    {post.stats.map((stat) => (
                                        <StatsElement key={stat.id} stats={stat}/>
                                    ))}
                                    </tbody>
                                </Table>
                            </Figure>
                        </div>
                        <div className='mb-4'>
                            <h2>Таланты</h2>
                            <Row
                                className='justify-content-center justify-self-center d-flex overflow-hidden m-0 bg-transparent w-100'>
                                <Tab.Container id='skills' defaultActiveKey='first'>
                                    <Col
                                        xs={10}
                                        md={5}
                                        sm={10}
                                        lg={4}
                                        xl={4}
                                        className={"mb-3"}>
                                        <Nav
                                            variant='pills'
                                            className={
                                                "fs-7 h-auto rounded bg-white flex-column g-0 gap-0 border-0 p-0 m-0"
                                            }>
                                            {post.skills.map((skill) => (
                                                <Nav.Item key={skill.id}>
                                                    <Nav.Link
                                                        className={
                                                            "w-auto border-start border-end border-top rounded-0 list-item d-flex align-items-center"
                                                        }
                                                        eventKey={skill.id}>
                                                        <SkillItem
                                                            icon={skill.icon}
                                                            title={skill.title}
                                                            char_title={post.title}
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
                                        className={"mb-3 px-2 py-3 bg-white rounded border"}>
                                        <Tab.Content>
                                            {post.skills.map((skill) => (
                                                <Tab.Pane key={skill.id} eventKey={skill.id}>
                                                    <SkillDesc
                                                        classname={"py-2"}
                                                        list={skill.list}
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
                                                    <div className={"w-100 pb-1"}>
                                                        {skill.link ? (
                                                            <>
                                                                <LiteYouTubeEmbed
                                                                    id={skill.link}
                                                                    className={"w-100 hstack"}
                                                                    loading={"lazy"}
                                                                    title='Youtube'/>
                                                            </>

                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </div>
                        <div className='mb-4'>
                            <h2>Созвездия</h2>
                            <Row className='justify-content-center d-flex overflow-hidden m-0 bg-transparent w-100'>
                                <Tab.Container id='skills' defaultActiveKey='first'>
                                    <Col
                                        xs={10}
                                        md={5}
                                        sm={10}
                                        lg={4}
                                        xl={4}
                                        className={"mb-3"}>
                                        <Nav
                                            variant='pills'
                                            className={
                                                "w-100 fs-7 h-auto rounded bg-white flex-column g-0 gap-0 border-0 p-0 m-0"
                                            }>
                                            {post.constellations.map((constellation) => (
                                                <Nav.Item key={constellation.id}>
                                                    <Nav.Link
                                                        className={
                                                            "border-start border-end border-top rounded-0 list-item d-flex align-items-center"
                                                        }
                                                        eventKey={constellation.id}>
                                                        <SkillItem
                                                            icon={constellation.icon}
                                                            title={constellation.title}
                                                            char_title={post.title}
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
                                        className={"mb-3 px-2 py-3 bg-white rounded border"}>
                                        <Tab.Content>
                                            {post.constellations.map((constellation) => (
                                                <Tab.Pane
                                                    key={constellation.title}
                                                    eventKey={constellation.id}>
                                                    <SkillDesc
                                                        classname={"py-2"}
                                                        list={constellation.list}
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
                        <div className=''>
                            <h2>Рекомендуемые билды</h2>
                            <div className='rounded'>
                                <Container
                                    fluid
                                    className='container-lg justify-content-center p-3'>
                                    <Tabs
                                        defaultActiveKey='build_1'
                                        id='builds'
                                        className='border-0 d-flex flex-nowrap fs-8 align-items-start'>
                                        {post.builds.map((build) => (
                                            <Tab
                                                key={build.id}
                                                eventKey={build.key}
                                                title={build.title}>
                                                <Row
                                                    className={
                                                        "bg-white rounded border justify-content-center text-wrap"
                                                    }>
                                                    <BuildsSection build={build}/>
                                                </Row>
                                            </Tab>
                                        ))}
                                    </Tabs>
                                </Container>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Character;
