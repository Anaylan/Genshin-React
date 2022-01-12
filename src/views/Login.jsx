import React from 'react';
import {useLocation} from "react-router-dom";
import {Button, InputGroup} from "react-bootstrap";
import {useAuth} from "../hooks/useAuth";

const Login = (props) => {
    document.title = props.title;

    const navigate = useLocation();
    const location = useLocation();
    const signIn = useAuth();
    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        const password = form.password.value;

        signIn(user, () => navigate(fromPage, {replace: true}))
    }
    return (

        <div className={'align-self-center p-3'}>
            <form onSubmit={handleSubmit} className={'border d-flex flex-wrap bg-white rounded align-items-center p-4 text-center'}>
                <h1 className={'w-100'}>Login
                </h1>
                <InputGroup className={'align-items-center d-flex justify-content-center flex-wrap'}>
                    <input name={'username'} type={'text'} className={'p-1 rounded border-light'} placeholder={'login'}/>
                    <input name={'password'} type={'password'} className={'p-1 rounded border-light'}  placeholder={'password'}/>
                </InputGroup>
                <Button type={"submit"} className={''}>Login</Button>
                {fromPage}
            </form>

        </div>
    );
};

export default Login;