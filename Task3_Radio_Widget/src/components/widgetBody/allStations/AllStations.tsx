import React, { useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/root_Reducer';
import { getAllStation, getSingleStation } from '../../../redux/StationRedux/stationMethods';


const AllStations = () => {
    const { allStation, singleStation, loading, error } = useAppSelector(
        state => state.stationReducer,
        shallowEqual,
    );
    const [selectedStation, setselectedStation] = useState(null);

    useEffect(() => {
        let mount: boolean = false;
        if (!mount) {
            getAllStation()
            // getSingleStation(1)

        }

        return () => {
            mount = true;
        }
    }, [])


    const OpenStation = (id: any) => {
        getSingleStation(id)
        setselectedStation(id);

    }

    if (loading) return (
        <h3>Loading...</h3>
    )

    return (
        <Wrapper>
            <div className="station_container">
                S
                {allStation.map((station: any) => {
                    return (
                        <div className="station_container-single" key={station?.id} onClick={() => OpenStation(station?.id)}>
                            <span>{station?.name} FM</span>
                            <span className='station_container-single--channel'>{station?.channel}</span>
                        </div>

                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: .5rem .8rem !important;
display: block;


.station_container {
    overflow-y: scroll;
    overflow-x: none;
    height: 15rem;
    width: 17rem;
    &-single {
        display: flex;
        font-size: 1.1rem;
        justify-content: space-between;
        color: #a1b3b9;
        padding: 1rem 1rem .5rem .5rem;
        border-bottom: 1px solid #a1b3b941;
        cursor: pointer;

        &--channel {
            font-weight: 900;
            
        }
    }
}

.station_container::-webkit-scrollbar {
    display: none;
}


`;


export default AllStations