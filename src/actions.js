/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */
import Constants from './constants';
import fetch from 'isomorphic-fetch';

export function addDay(resort, date, powder = false, backcountry = false) {
    return {
        type: Constants.ADD_DAY,
        payload: {resort, date, powder, backcountry}
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

export const randomGoals = () => (dispatch, getState) => {

    if (!getState().resortNames.fetching) {

        dispatch({
            type: Constants.FETCH_RESORT_NAMES
        });

        setTimeout(() => {

            dispatch({
                type: Constants.CANCEL_FETCHING
            });

        }, 1500)

    }

};

export const suggestResortNames = value => dispatch => {

    dispatch({
        type: Constants.FETCH_RESORT_NAMES
    });

    fetch("http://localhost:3333/resorts/" + value)
        .then(response => response.json())
        .then(suggestions => {

            dispatch({
                type: Constants.CHANGE_SUGGESTIONS,
                payload: suggestions
            });
        })
        .catch(error => {

            dispatch(
                addError(error.message)
            );

            dispatch({
                type: Constants.CANCEL_FETCHING
            });
        });

};
