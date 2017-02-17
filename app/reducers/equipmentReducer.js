/**
 * Created by andrew.yang on 2/17/2017.
 */
import * as types from '../common/ActionTypes';
const initialState = {
    loading: false,
    list:[]
};
export default equipments = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ITEMS_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_ITEMS_ACTION:
            return Object.assign({}, state, {
                loading: false,
                list: action.list
            });
        default:
            return state;
    }
};
