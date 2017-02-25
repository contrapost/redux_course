/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */
import Constants from './constants';

export function addDay(resort, date, powder = false, backcountry = false) {
    return {
        type: Constants.ADD_DAY,
        payload: { resort, date, powder, backcountry }
    }
}

export function removeDay(date) {
    return {
        type: Constants.REMOVE_DAY,
        payload: date
    }
}

export function setGoal(goal) {
    return {
        type: Constants.SET_GOAL,
        payload: goal
    }
}