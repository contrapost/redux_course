/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */
import Constants from '../constants';

export const goal = (state = 10, action) => {
    if(action.type === Constants.SET_GOAL) {
        return parseInt(action.payload);
    } else {
        return state
    }
};

