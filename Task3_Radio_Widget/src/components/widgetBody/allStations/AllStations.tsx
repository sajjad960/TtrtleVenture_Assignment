import React from 'react'
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../../redux/root_Reducer';
import { getAllStation } from '../../../redux/StationRedux/stationMethods';

const AllStations = () => {
    const { allStation, loading, error } = useAppSelector(
        state => state.stationReducer,
        shallowEqual,
    );
    getAllStation()
    console.log(allStation, loading, error);
    return (
        <div>AllStations</div>
    )
}


export default AllStations