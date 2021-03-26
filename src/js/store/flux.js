const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			loadedPeople: false
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ people: data.results, loadedPeople: true });
						console.log(data.results);
						//setTodosFetch([...todosFetch, { label: input, done: false }]);
					})
					.catch(err => console.error("Error Ocurred During Fetch function" + err));
			}
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
