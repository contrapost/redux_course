/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */
import Constants from '../constants';

export const goal = (state = 10, action) => (action.type === Constants.SET_GOAL) ?  parseInt(action.payload) : state;

export const skiDay = (state = null, action) => (action.type === Constants.ADD_DAY) ? action.payload : state;

