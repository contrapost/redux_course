/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import Constants from './constants';
import { goal } from './store/reducers';

const state = 10;

const action = {
  type: Constants.SET_GOAL,
    payload: 15
};

const nextState = goal(state, action);

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}

`);