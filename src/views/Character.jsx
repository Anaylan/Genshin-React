import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import CharacterCard from "../components/elements/characterCard";
import {Col, Row, Table} from "react-bootstrap";
import StoryItem from "../components/elements/StoryItem";
import Accordion from "react-bootstrap/Accordion";

const Character = (props) => {
    const {id} = useParams();
    const location = useLocation();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/characters/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);
    console.log(post);
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
                    <div className="mb-4">
                        <h2>История</h2>
                        <Row>
                            <Col>
                                <Accordion>
                                    {post.stories.map((story) =>
                                        <Accordion.Item key={story.id} eventKey={story.id}>
                                            <StoryItem story={story}/>
                                        </Accordion.Item>
                                    )
                                    }
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                    <div className="mb-4">
                        <h2>Базовые характеристики</h2>
                        <Table>
                            <thead>
                            <tr class="table-dark border">
                                <td>Фаза возвышения</td>
                                <td>Уровень</td>
                                <td>Базовое HP</td>
                                <td>Базовая атака</td>
                                <td>Базовая защита</td>
                                <td>{post.sp_stat}</td>
                                <td class="w-45">Материалы для возвышения</td>
                            </tr>
                            </thead>
                            <tbody>
                                <td stats={post.stats}/>
                            </tbody>
                        </Table>
                    </div>
                    <div className="mb-4">
                        <h2>Таланты</h2>

                    </div>
                    <div className="mb-4">
                        <h2>Созвездия</h2>
                        <div className="row mb-2 p-2">
                            <div className="col
										row
										justify-content-center
										d-flex
										overflow-hidden
										m-1
										bg-transparent
										rounded
									"></div>
                            <div className="col-xl-auto col-12 col-sm mt-3 mb-xl-3">

                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2>Рекомендуемое оружие</h2>
                        <div class="bg-transparent rounded">
                            <div class="container-lg container-fluid p-3">
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* <Button onClick={f} /> */}
        </>
    );
};

export default Character;
