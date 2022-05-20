//bring action with type
import { StaticStations } from '../../utiles/constants';
import { Action, ActionType } from './stationActions';

//define state variable with their type
export interface stationState {
    allStation: Array<Object>;
    singleStation: Array<Object>;
    loading: Boolean;
    error: String;
}

//our initial state define here
//this the initial value of our state
const initialState: stationState = {
    allStation: [],
    singleStation: [],
    loading: false,
    error: '',
};

const stationReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType?.GET_ALL_STATION:
            return {
                ...state,
                allStation: action?.payload ?? StaticStations,
            };
        case ActionType?.LOADING:
            return {
                ...state,
                loading: true,
            };
        case ActionType?.ERROR:
            return {
                ...state,
                Error: 'Something is rong'
            };
        default:
            return state;
    }
};

export default stationReducer;