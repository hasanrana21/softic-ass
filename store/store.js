import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postsReducer } from "./reducers/postsReducer";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  Posts: postsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [ThunkMiddleware];

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware)
    // ,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
