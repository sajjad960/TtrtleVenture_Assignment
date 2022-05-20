import React from 'react'
import { shallowEqual } from 'react-redux';
import styled from 'styled-components'
import { useAppSelector } from '../../redux/root_Reducer';


const WidgetBody = () => {
    const { allStation, loading, error } = useAppSelector(
        state => state.stationReducer,
        shallowEqual,
    );
    console.log(allStation);

    return (
        <Wrapper>WidgetBody</Wrapper>
    )
}

const Wrapper = styled.div`

`;



export default WidgetBody