import React, { useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/root_Reducer';
import { getAllStation, getSingleStation } from '../../../redux/StationRedux/stationMethods';
import { modeChecker } from '../../../utiles/helpers';


const AllStations = () => {

    // Host adress for load image from public
    const hostAddress = modeChecker();

    // Get data from redux store
    const { allStation, loading } = useAppSelector(
        state => state.stationReducer,
        shallowEqual,
    );
    const [selectedStation, setselectedStation] = useState(null);

    // Fetch all station and show
    useEffect(() => {
        let mount: boolean = false;
        if (!mount) {
            getAllStation()

        }

        return () => {
            mount = true;
        }
    }, [])


    // play station
    const PlayStation = (id: any) => {
        getSingleStation(id)
        setselectedStation(id);
    }

    // show loading
    if (loading) return (
        <h3>Loading...</h3>
    )

    return (
        <Wrapper>
            <div className="station_container">
                {allStation.map((station: any) => {
                    return (
                        <div className='station_container_key' key={station?.id}>

                            {/* when a channel play(Clicked) then show it START */}
                            {station.id === selectedStation && (
                                <div className="station_container-playing">
                                    <button>
                                        <img src={`${hostAddress}/minus.png`} alt="Increase channel" className="station_container-playing--minus" />
                                    </button>

                                    <>
                                        <img src={`${hostAddress}/${station?.Image}`} alt="Increase channel" className="station_container-playing--logo" />
                                    </>

                                    <button>
                                        <img src={`${hostAddress}/plus.png`} alt="Increase channel" className="station_container-playing--plus" />
                                    </button>
                                </div>
                            )}
                            {/* when a channel playing then show it END */}

                            {/* Show all channel START */}
                            <div className="station_container-single" onClick={() => PlayStation(station?.id)}>
                                <span>{station?.name} FM</span>
                                <span className='station_container-single--channel'>{station?.channel}</span>
                            </div>
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
    overflow-x: hidden;
    height: 15rem;
    width: 17rem;

    &_key:not(:last-child) {
        border-bottom: 1px solid #a1b3b941;
    }
    &-single {
        display: flex;
        font-size: 1.1rem;
        justify-content: space-between;
        color: var(--text-color);
        padding: 1rem 1rem .5rem .5rem;
        cursor: pointer;
        /* border-bottom: 1px solid #a1b3b941; */
        &:not(:last-child) {

        }

        &--channel {
            font-weight: 900;
            
        }
    }

    &-playing {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;

        img {
            width: 1.5rem;
            height: 100%;
        }
        &--logo {
            width: 6rem !important;
            height: 100%;
        }

    }
}

.station_container::-webkit-scrollbar {
    display: none;
}


`;


export default AllStations