/**
 * Created by alexandershipunov on 25/02/2017.
 *
 */

import storeFactory from './store';
import { addDay, removeDay, setGoal } from './actions';

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