import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const middleWares = [];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);
