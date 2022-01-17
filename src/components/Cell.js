import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    min-width: 320px;
    
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
    background-repeat:no-repeat;
    margin:5px;
`

const CellTitle = styled.div`
    padding: 25px 0;
    color: rgba(255, 255, 255, 0.838);
    font-size: 40px;
    font-weight:600;
    margin: 0;
    line-height: 1;
`
const CellDescription = styled.p`
    font-size:18px;
    color: rgba(51, 51, 51, 0.838);
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    padding: 30px 0;
    font-weight:300;
`


const Cell = props => ( <
    CellGroup >
    <CellImage image = {props.image} ></CellImage>
    <CellTitle>{props.title}
    <CellDescription>{props.description}</CellDescription>
    </CellTitle>
    </CellGroup>
)

export default Cell;