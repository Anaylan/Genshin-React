import React from 'react';
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        <footer className="bg-white shadow" id="footer">
            <Container className='align-items-center pt-3'>
                <div>
                    <p className="text-center fs-8 text-uppercase mb-0 pb-0 text-wrap">
                        © 2021 GENSHIN IMPACT — ГАЙДЫ И ПРОХОЖДЕНИЕ - САЙТ GENSHIN-EASY.RU
                        НЕ ЯВЛЯЕТСЯ АФФИЛИРОВАННЫМ И НЕ СВЯЗАН С КОМПАНИЕЙ MIHOYO.
                        почта для связи: contacts@genshin-easy.ru
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
