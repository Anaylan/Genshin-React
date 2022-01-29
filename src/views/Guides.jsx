import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Guide from "./Guide";
import {Helmet} from "react-helmet";

const Guides = () => {
    const [guides, setGuide] = useState([]);
    return (
        <>
            <Helmet>
                <title>Гайды | Genshin Easy</title>
                <meta name="description"
                      content="Genshin Easy - Полезные гайды и инструменты для путешественников по миру игры Genshin Impact, а также еженедельные обновления гайдов."/>
                <meta name="keywords" content={'гайды, genshin, impact, новые, персонажи, гайд, геншин, импакт'}/>
            </Helmet>
            {guides.length !== 0
                ? <div id={'characters'}>
                    {guides.map((guide) =>
                        <Link key={guide.id} to={`/wiki/characters/${guide.title}`}>
                            <Guide key={guide.id} guide={guide}/>
                        </Link>)
                    }
                </div>
                : <div className={'d-flex justify-content-center align-self-center'}>
                    <h3 className='text-center'>Ничего не найдено</h3>
                </div>}
        </>
    );
};

export default Guides;