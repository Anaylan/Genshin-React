import {Button, ButtonGroup, Image} from "react-bootstrap";
import React from "react";

const MyFilter = ({options, onClick}) => {
    return (
        <ButtonGroup className={'mb-3 justify-content-center border'}>
            {options.map((option) =>
                <Button key={option.value} onClick={event => onClick(event.target)} className={'border p-1 btn-secondary bg-opacity-75'}>
                    <Image name={option.value} src={require(`../../assets/images/elements/${option.value}.webp`)}
                           width={'30px'}/>
                </Button>
            )}
        </ButtonGroup>
    );
};

export default MyFilter;