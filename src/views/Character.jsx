import {useEffect, useState} from "react"
import {useLocation, useParams} from "react-router-dom"
import {Accordion, Col, Nav, Row, Tab, Table} from "react-bootstrap"
import StoryItem from "../components/elements/StoryItem";
import CharacterCard from "../components/elements/characterCard";
import {SkillDesc, SkillItem} from "../components/elements/Skill";
import YoutubeVideo from "../components/elements/YoutubeVideo";

const Character = props => {
    const {title} = useParams()
    const location = useLocation()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetchCharacter()
    }, [title]);

    function fetchCharacter() {
        const response = require('../db');
        console.log(title)
        response.characters.map((character) => {
            console.log(character.title)
            if (title == character.title) {
                return setPost(character);
            }

        })
    }

    function f() {
        console.log(post)
    }

    function changeColor() {

    }


    return (
        <>
            {post && (
                <>
                    <CharacterCard character={post}/>
                    <div className='mb-4'>
                        <h2>Описание</h2>
                        {post.describe}
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
                                            <StoryItem key={story.id} story={story}/>
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
                                    <>
                                        {/*    <StatsElement key={stat.id} stats={stat}/>*/}
                                    </>
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
                                    <Nav variant="pills" color={'light'}
                                         className={"rounded bg-white flex-column rounded"}>
                                        {post.skills.map((skill) =>
                                            <Nav.Item key={skill.id}>
                                                <Nav.Link className={'list-item d-flex align-items-center'}
                                                          key={skill.id} eventKey={skill.tab_id}>
                                                    <SkillItem key={skill.id} icon={skill.icon} title={skill.title}/>
                                                </Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </Nav>
                                </Col>
                                <Col xs={'12'} sm={'8'} className={'bg-white rounded border shadow'}>
                                    <Tab.Content bsPrefix={'p-1'}>
                                        {post.skills.map((skill) =>
                                            <Tab.Pane key={skill.id} eventKey={skill.id}>
                                                <SkillDesc key={skill.id} skill={skill.body} />
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
                </>
            )}
        </>
    )
}

export default Character
