import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state.auth);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedAuthState = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  {
    auth: persistedAuthState
  },
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
