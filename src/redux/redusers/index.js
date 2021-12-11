import { combineReducers } from 'redux';

import filterReduser from './filters';
import booksReduser from './books';

const rootReduser = combineReducers({
	filter: filterReduser,
	books: booksReduser,
});

export default rootReduser;
