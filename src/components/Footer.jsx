import React from 'react';
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        <Container className='align-items-center pt-3'>
            <div>
                <p className="text-center fs-8 text-uppercase mb-0 pb-0">
                    © 2021 GENSHIN IMPACT — ГАЙДЫ И ПРОХОЖДЕНИЕ - САЙТ GENSHIN-EASY.RU
                    НЕ ЯВЛЯЕТСЯ АФФИЛИРОВАННЫМ И НЕ СВЯЗАН С КОМПАНИЕЙ MIHOYO
                </p>
                <p className="text-center fs-8 text-uppercase mt-0 pt-0">
                    contacts@genshin-easy.ru
                </p>
            </div>
        </Container>
    );
}

export default Footer;
