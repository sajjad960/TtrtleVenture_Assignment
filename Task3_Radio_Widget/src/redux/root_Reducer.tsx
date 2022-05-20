import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
// our all reducer goes here,
import stationReducer from './StationRedux/stationReducer'
//create Reducers will give you ability to work with one to more reducers with
//their action
const rootReducers = combineReducers({
    //auth reducer define here
    stationReducer,
});

export default rootReducers;

// //This RootState is required to use useSelector later on
// export type RootState = ReturnType<typeof rootReducers>;

// // made a custom app selector to grab state value from reducer
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
