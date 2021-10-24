import { createStore } from 'redux';
import login from "./reducers/login";


export const store = createStore(login);