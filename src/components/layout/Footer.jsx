import React from 'react';
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-white border" id="footer">
            <Container fluid className='container-lg align-items-center pt-3 pb-2'>
                <div>
                    <p className="text-center fs-8 text-uppercase mb-0 pb-0 text-wrap">
                        © 2022 GENSHIN IMPACT — ГАЙДЫ И ПРОХОЖДЕНИЕ - САЙТ GENSHIN-EASY.RU
                        НЕ ЯВЛЯЕТСЯ АФФИЛИРОВАННЫМ И НЕ СВЯЗАН С КОМПАНИЕЙ MIHOYO.
                        почта для связи: contacts@genshin-easy.ru
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
