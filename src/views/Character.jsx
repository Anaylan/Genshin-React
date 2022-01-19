import {useEffect, useState} from "react"
import {useLocation, useParams} from "react-router-dom"
import {Accordion, Col, Figure, Nav, Row, Tab, Table} from "react-bootstrap"
import StoryItem from "../components/elements/StoryItem";
import CharacterCard from "../components/elements/characterCard";
import {SkillDesc, SkillItem} from "../components/elements/Skill";
import YoutubeVideo from "../components/elements/YoutubeVideo";
import StatsElement from "../components/elements/StatsElement";

const Character = props => {
    const {title} = useParams()
    const location = useLocation()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetchCharacter()
    }, [title]);

    function fetchCharacter() {
        const response = require('../db');
        response.characters.map((character) => {
            if (title == character.title) {
                return setPost(character);
            }

        })
    }
    return (
        <>
            {post && (
                <div className={'text-justify'}>
                    <CharacterCard character={post}/>
                    <div className='mb-4'>
                        <h2>Описание</h2>
                        {post.describe}
                    </div>
                    <div className='mb-4'>
                        <h2>Премущества</h2>
                        <ul>
                            {post.plus.map((advantege) =>
                                <li>{advantege.body}</li>
                            )}
                        </ul>
                        <h2>Недостатки</h2>
                        <ul>
                            {post.minus.map((disadvantege) =>
                                <li>{disadvantege.body}</li>
                            )}
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h2>История</h2>
                        <Row>
                            <Col>
                                <Accordion>
                                    {post.stories.map(story => (
                                        <Accordion.Item key={story.id} eventKey={story.id}>
                                            <StoryItem key={story.id} story={story}/>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                    <div className={"mb-4"}>
                        <h2>Базовые характеристики</h2>
                        <Figure className={'w-100 overflow-auto'}>
                            <Table className={"fs-8 mb-0 w-100 table-responsive"}>
                                <thead className={'text-center text-wrap'}>
                                <tr className={"table-dark table-bordered"}>
                                    <td className={"vertical-center p-1"}>Фаза возвышения</td>
                                    <td className={"vertical-center p-1"}>Уровень</td>
                                    <td className={"vertical-center p-1"}>Базовое HP</td>
                                    <td className={"vertical-center p-1"}>Базовая атака</td>
                                    <td className={"vertical-center p-1"}>Базовая защита</td>
                                    <td className={"vertical-center p-1"}>{post.sp_stat}</td>
                                    <td className={"w-45 vertical-center p-1"}>Материалы для возвышения</td>
                                </tr>
                                </thead>
                                <tbody className={"text-wrap text-center"}>
                                {post.stats.map((stat) => (
                                    <>
                                        <StatsElement key={stat.id} stats={stat}/>
                                    </>
                                ))}
                                </tbody>
                            </Table>
                        </Figure>
                    </div>
                    <div className='mb-4'>
                        <h2>Таланты</h2>
                        <Row className='justify-content-center d-flex overflow-hidden m-1 bg-transparent'>
                            <Tab.Container id="skills" defaultActiveKey="first">
                                <Col xs={10} md={4} sm={"auto"} lg={4} xl={4} className={'mb-3 px-4'}>
                                    <Nav variant="pills"
                                         className={"rounded bg-white flex-column g-0 gap-0 p-0 m-0"}>
                                        {post.skills.map((skill) =>
                                            <Nav.Item key={skill.id}>
                                                <Nav.Link className={'border-start border-end border-top rounded-0 list-item d-flex align-items-center'}
                                                          key={skill.id} eventKey={skill.tab_id}>
                                                    <SkillItem key={skill.id} icon={skill.icon}
                                                               title={skill.title}/>
                                                </Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </Nav>
                                </Col>
                                <Col xs={12} md={7} xl={8} sm={12} lg={7}
                                     className={'mb-3 px-2 py-3 bg-white rounded border shadow'}>
                                    <Tab.Content>
                                        {post.skills.map((skill) =>
                                            <Tab.Pane key={skill.id} eventKey={skill.tab_id}>
                                                <SkillDesc classname={'py-2'} list={skill.list} key={skill.id}
                                                           skill={skill.body}/>
                                                {
                                                    skill.list ?
                                                        <ul className={'fs-7'}>
                                                            {skill.list.map((item) =>
                                                            <li key={item.id}>
                                                                {item.item}
                                                            </li>
                                                            )}
                                                        </ul>
                                                        : <></>
                                                }
                                                <YoutubeVideo video={skill.link}/>
                                            </Tab.Pane>
                                        )}
                                    </Tab.Content>
                                </Col>

                            </Tab.Container>

                        </Row>
                    </div>
                    <div className='mb-4'>
                        <h2>Созвездия</h2>
                        <Row className=' mb-2 p-2'>
                            <Col
                                className='row
            					justify-content-center
            					d-flex
            					overflow-hidden
            					m-1
            					bg-transparent
            					rounded'
                            ></Col>
                            <Col xl={"auto"} sm={"12"} className='col-12 mt-3 mb-xl-3'></Col>
                        </Row>
                    </div>
                    <div className='mb-4'>
                        <h2>Рекомендуемое оружие</h2>
                        <div className='bg-transparent rounded'>
                            <div className='container-lg container-fluid p-3'></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Character
