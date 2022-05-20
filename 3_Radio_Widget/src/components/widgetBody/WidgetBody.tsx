import React from 'react'
import styled from 'styled-components'
import AllStations from './allStations/AllStations';


const WidgetBody = () => {

    return (
        <Wrapper>
            <AllStations />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`;



export default WidgetBody