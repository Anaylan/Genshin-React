import {useEffect, useState} from "react"
import {useLocation, useParams} from "react-router-dom"
import CharacterCard from "../components/elements/characterCard"
import {Col, Nav, NavLink, Row, Tab, Table} from "react-bootstrap"
import StoryItem from "../components/elements/StoryItem"
import Accordion from "react-bootstrap/Accordion"
import StatsElement from "../components/elements/StatsElement"
import axios from "axios";
import {SkillDesc, SkillItem} from "../components/elements/SkillDesc";

const Character = props => {
    const {id} = useParams()
    const location = useLocation()
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:8000/characters/${id}`)
            .then(response => {
                setPost(response.data)
            })
    }, [id])
    return (
        <>
            {post && (
                <>
                    <CharacterCard character={post}/>
                    <div className='mb-4'>
                        <h2>Описание</h2>
                        {post.description}
                    </div>
                    <div className='mb-4'>
                        <h2>Премущества</h2>
                        {post.description}
                        <h2>Недостатки</h2>
                        {post.description}
                    </div>
                    <div className='mb-4'>
                        <h2>Внешность</h2>
                        {post.description}
                    </div>
                    <div className='mb-4'>
                        <h2>История</h2>
                        <Row>
                            <Col>
                                <Accordion>
                                    {post.stories.map(story => (
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
                        <div className={'table-responsive'}>
                            <Table className={"fs-8 w-100 overflow-auto"}>
                                <thead className={'text-center'}>
                                <tr className={"table-dark"}>
                                    <td className={"border-0 vertical-center"}>Фаза возвышения</td>
                                    <td className={"border-0 vertical-center"}>Уровень</td>
                                    <td className={"border-0 vertical-center"}>Базовое HP</td>
                                    <td className={"border-0 vertical-center"}>Базовая атака</td>
                                    <td className={"border-0 vertical-center"}>Базовая защита</td>
                                    <td className={"border-0 vertical-center"}>{post.sp_stat}</td>
                                    <td className={"w-45 border-0 vertical-center"}>Материалы для возвышения</td>
                                </tr>
                                </thead>
                                <tbody className={"text-wrap text-center"}>
                                {post.stats.map((stat) => (
                                    <StatsElement stats={stat}/>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h2>Таланты</h2>
                        <Row className='justify-content-around d-flex overflow-hidden m-1 bg-transparent'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Col xs={'12'} sm={'4'} xl={"auto"}>
                                    <Nav variant="pills" color={'light'} className="flex-column rounded">
                                        <Nav.Item class={'bg-light list-item'}>
                                            <NavLink className={'list-item'} eventKey="first"><SkillItem/></NavLink>
                                        </Nav.Item>
                                        <Nav.Item class={'bg-light list-item'}>
                                            <NavLink className={'list-item'} eventKey="second"><SkillItem/></NavLink>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xs={'12'} sm={'8'} className={'bg-white rounded border shadow'}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <SkillDesc/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <SkillDesc/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Tab.Container>


                        </Row>
                    </div>
                    <div className='mb-4'>
                        <h2>Созвездия</h2>
                        <div className='row mb-2 p-2'>
                            <div
                                className='col
										row
										justify-content-center
										d-flex
										overflow-hidden
										m-1
										bg-transparent
										rounded
									'
                            ></div>
                            <div className='col-xl-auto col-12 col-sm mt-3 mb-xl-3'></div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h2>Рекомендуемое оружие</h2>
                        <div className='bg-transparent rounded'>
                            <div className='container-lg container-fluid p-3'></div>
                        </div>
                    </div>
                </>
            )}
            {/* <Button onClick={f} /> */}
        </>
    )
}

export default Character
