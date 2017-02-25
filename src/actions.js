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

export function addError(error) {
    return {
        type: Constants.ADD_ERROR,
        payload: error
    }
}

export function clearError(index) {
    return {
        type: Constants.CLEAR_ERROR,
        payload: index
    }
}

export function changeSuggestions(suggestions) {
    return {
        type: Constants.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export function clearSuggestions() {
    return {
        type: Constants.CLEAR_SUGGESTIONS,
    }
}