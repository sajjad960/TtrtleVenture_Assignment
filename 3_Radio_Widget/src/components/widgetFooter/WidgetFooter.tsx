import React from 'react'
import { shallowEqual } from 'react-redux';
import styled from 'styled-components'
import { useAppSelector } from '../../redux/root_Reducer';


const WidgetFooter = () => {
    // getting data from redux store
    const { playingStation } = useAppSelector(
        state => state.stationReducer,
        shallowEqual,
    );

    return (
        <Wrapper>
            {/* if playing station available show it or show nothing */}
            {playingStation?.name ? (
                <div>
                    <h3 className='playing_txt'>Currntly playing</h3>
                    <h3 className='playing_channel'>{playingStation.name} FM</h3>
                </div>
            )
                :
                ''}

        </Wrapper>
    )
}

const Wrapper = styled.div`
border-top: 1px solid #a1b3b941;
.playing {
    &_txt {
        padding: .7rem 0 0 0;
        font-size: .6rem;
        color: var(--primary-color);
        text-transform: uppercase;
        
    }
    &_channel {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-color);
    }
}
`;


export default WidgetFooter