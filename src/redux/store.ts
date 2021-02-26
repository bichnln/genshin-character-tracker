import { create } from "domain";
import {createStore, combineReducers} from "redux";

import {teamReducer} from "../reducers/teamReducer";


const rootReducer = combineReducers({team: teamReducer});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;