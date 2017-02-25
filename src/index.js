/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import Constants from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState;

console.log(`

    Initial state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    resorts: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);

state = appReducer(state, {
    type: Constants.SET_GOAL,
    payload: 2
});

state = appReducer(state, {
    type: Constants.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": false,
        "backcountry": true
    }
});

state = appReducer(state, {
    type: Constants.CHANGE_SUGGESTIONS,
    payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
});

console.log(`

    Next state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    resorts: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);