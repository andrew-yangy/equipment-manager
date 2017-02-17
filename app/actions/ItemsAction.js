/**
 * Created by andrew.yang on 2/17/2017.
 */
import * as types from '../common/ActionTypes';
import {ITEMS_API} from '../common/API'

const URL = 'http://10.1.30.5:1124/';
export function fetchItems(){
    return dispatch => {
        dispatch(fetchItemsAction());
        fetch(URL+ITEMS_API).then(response => response.json())
            .then(responseData => {
                dispatch(receiveItemsAction(responseData));
            }).catch((error) => {
        }).done();
    }
}
function fetchItemsAction() {
    return {
        type: types.FETCH_ITEMS_ACTION
    }
}
function receiveItemsAction(list) {
    return {
        type: types.RECEIVE_ITEMS_ACTION,
        list
    }
}