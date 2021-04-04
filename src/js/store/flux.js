const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritePeople: [],
			favoritePlanets: [],
			people: [],
			planets: [],
			singleChar: {},
			loadedPeople: false,
			loadedPlanets: false
		},
		actions: {
			//ASYNC AWAIT CONTROLS THE PROMISE. ASYNC TELLS THE FUNCTION THAT IT IS ASYNCHRONOUS, AND AWAIT MAKE IT WAIT FOR THE CALL TO BE RESOLVED. /// USING .THEN WILL PROVIDE THE SAME RESULT.
			fetchPeople: async () => {
				let newArray = [];
				for (let i = 1; i <= 83; i++) {
					if (i != 17) {
						const url = `https://www.swapi.tech/api/people/${i}`;
						const config = {
							method: "GET",
							headers: {
								"Content-type": "application/json"
							}
						};
						const response = await fetch(url, config);
						const data = await response.json();
						newArray.push(data);
					}
				}

				setStore({ people: newArray, loadedPeople: true });
			},
			fetchPlanets: async () => {
				let newArray = [];
				for (let i = 1; i <= 60; i++) {
					const url = `https://www.swapi.tech/api/planets/${i}`;
					const config = {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					};
					const response = await fetch(url, config);
					const data = await response.json();
					newArray.push(data);
				}

				setStore({ planets: newArray, loadedPlanets: true });
			},
			setFavoritePeople: (id, index) => {
				const store = getStore();
				const actions = getActions();
				//actions.deleteFavorite(store.favorite.indexOf("(Empty)"));
				store.people.map(element => {
					element.result.uid === id
						? store.favoritePeople.includes(element.result.properties.name)
							? ""
							: setStore({
									favoritePeople: [
										...store.favoritePeople,
										{
											name: element.result.properties.name,
											position: store.people.indexOf(element)
										}
									]
							  })
						: "";
				});
			},
			setFavoritePlanet: id => {
				const store = getStore();
				const actions = getActions();
				//actions.deleteFavorite(store.favorite.indexOf("(Empty)"));
				store.planets.map(element => {
					element.result.uid === id
						? store.favoritePlanets.includes(element.result.properties.name)
							? ""
							: setStore({
									favoritePlanets: [
										...store.favoritePlanets,
										{
											name: element.result.properties.name,
											position: store.planets.indexOf(element)
										}
									]
							  })
						: "";
				});
			},
			deleteFavoritePeople: positionToDelete => {
				const store = getStore();
				let newArray = [];
				store.favoritePeople.map((element, index) => {
					index !== positionToDelete ? newArray.push(element) : "";
				});
				newArray === [] ? newArray.push("(Empty)") : "";
				setStore({ favoritePeople: newArray });
			},
			deleteFavoritePlanet: positionToDelete => {
				const store = getStore();
				let newArray = [];
				store.favoritePlanets.map((element, index) => {
					index !== positionToDelete ? newArray.push(element) : "";
				});
				newArray === [] ? newArray.push("(Empty)") : "";
				setStore({ favoritePlanets: newArray });
			}
		}
	};
};

export default getState;
