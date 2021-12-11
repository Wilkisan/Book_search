const setSortBy = (name) => ({
	type: 'SET_SORT_AGE',
	payload: name,
});

const setCategory = (catIndex) => ({
	type: 'SET_CATEGORY',
	payload: catIndex,
});
