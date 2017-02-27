/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import C from './constants';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import sampleData from './initialState';
import storeFactory from './store';
import { Provider } from 'react-redux';
import { addError } from './actions';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData;

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState());

const handleError = error => {
    store.dispatch(
        addError(error)
    )
};

const store = storeFactory(initialState);
store.subscribe(saveState);

window.React = React;
window.store = store;

window.addEventListener("error", handleError);

render(
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('react-container')
);

/*
import expect from 'expect'
import storeFactory from './store';
import { addDay,
    removeDay,
    setGoal,
    addError,
    clearError,
    changeSuggestions,
    clearSuggestions,
    randomGoals,
    suggestResortNames
} from './actions';

const store = storeFactory();

store.dispatch(
    addDay("Heavenly", "2016-10-22")
);

store.dispatch(
    removeDay("2016-10-22")
);

store.dispatch(
    setGoal(101)
);

// Challenge: build addError() Action Creator
store.dispatch(
    addError("something went wrong")
);

expect(store.getState().errors)
    .toEqual(["something went wrong"]);

console.log(`

    addError() Action Creator Works!!!

`);

// Challenge: build clearError() Action Creator
store.dispatch(
    clearError(0)
);

expect(store.getState().errors)
    .toEqual([]);

console.log(`

    clearError() Action Creator Works!!!

`);

// Challenge: build changeSuggestios() Action Creator
store.dispatch(
    changeSuggestions(['One', 'Two', 'Three'])
);

expect(store.getState().resortNames.suggestions)
    .toEqual(['One', 'Two', 'Three']);

console.log(`

    changeSuggestions() Action Creator Works!!!

`);

// Challenge: build clearSuggestions() Action Creator
store.dispatch(clearSuggestions());

expect(store.getState().resortNames.suggestions).toEqual([]);

console.log(`

    clearSuggestions() Action Creator Works!!!

`);

store.dispatch(
  randomGoals()
);

store.dispatch(
    suggestResortNames('hea')
);*/
