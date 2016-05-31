import { createStore as _createStore, combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { middleware } from 'core/store';

import addons from 'core/reducers/addons';
import discoResults from 'disco/reducers/discoResults';
import installations from 'disco/reducers/installations';

export default function createStore(initialState = {}) {
  return _createStore(
    combineReducers({addons, discoResults, installations, reduxAsyncConnect}),
    initialState,
    middleware(),
  );
}
