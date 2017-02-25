/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import Constants from './constants';
import { errors } from './store/reducers';

const state = [
    "user not authorized",
    "server feed not found"
];

const action = {
    type: Constants.ADD_ERROR,
    payload: "cannot connect to server"
};

const nextState = errors(state, action);

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);