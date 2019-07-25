import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';

import 'antd/dist/antd.css';




const CharacterCard = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const fillModal = () => {
        setModalVisible(!modalVisible);
    }

    
    const cardColor = props.character.gender === "unknown" ? '#f1cda7' : props.character.gender === "Male" ? '#badff5' : '#e296c2';


    const Card = styled.div`
    position: relative;
    width: 250px;
    height: 400px;
    border-radius: 5px;
    border: 1px solid white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 0px;
    background-color: ${cardColor}
        h6{
            color: white;
        }
`

const ImageHolder = styled.div`
    width: 80%;
    height: auto;
`

const DeathText = styled.p`
    
    position: absolute;
    top: 28%;
    transform: translate(-50%, -50%);
    font-size: 75px;
    transform: rotate(-30deg);
    color: red;
    background-color: black;
`

const Pic = styled.img`
    width: 100%;
`


    return(
        <>
            <Card>
                <h6>{props.character.name}</h6>
                <ImageHolder>
                    {props.character.status === "Dead" && <DeathText>DEAD</DeathText>}
                    <Pic src={props.character.image} />
                </ImageHolder>
                <Button onClick={() => fillModal()}>Learn More</Button>
            </Card>
            <Modal
                title={props.character.name}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                >
                <p>Species: {props.character.species}</p>
                <p>Place of Origin: {props.character.origin.name}</p>
            </Modal>
        </>
    )
};

export default CharacterCard;