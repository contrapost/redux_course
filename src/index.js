/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import Constants from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {};
const store = createStore(appReducer, initialState);

window.store = store;

store.subscribe(() => console.log(store.getState()) );

store.subscribe(() => localStorage['redux-store'] = JSON.stringify(store.getState()) );