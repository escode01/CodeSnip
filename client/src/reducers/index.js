import { combineReducers } from "redux";

import snippets from './snippets.js';

const rootReducer = combineReducers({
    snippets: snippets,
  });
  
  export default rootReducer;