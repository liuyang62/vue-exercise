const actions = {
	increaseodd(store, data) {
		if (store.state.count % 2 === 0) return;
		store.commit('INCREASEMENT', data);
	},
	asyncincrease({ commit }, data) {
		setTimeout(() => {
			commit('INCREASEMENT', data);
		}, 2000);
	}
};
export default actions;
