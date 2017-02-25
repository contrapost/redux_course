/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import Constants from './constants';
import storeFactory from './store';

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {};

const saveState = () => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
};

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: Constants.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true
    }
});

store.dispatch({
    type: Constants.ADD_DAY,
    payload: {
        "resort": "Squaw Valley",
        "date": "2016-3-28",
        "powder": true,
        "backcountry": false
    }
});

store.dispatch({
    type: Constants.ADD_DAY,
    payload: {
        "resort": "The Canyons",
        "date": "2016-1-2",
        "powder": false,
        "backcountry": true
    }
});