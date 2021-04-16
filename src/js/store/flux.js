const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favoritePeople: [],
            favoritePlanets: [],
            people: [],
            planets: [],
            singleChar: {},
            loadedPeople: false,
            loadedPlanets: false,
            user: {},
            token = null
        },
        actions: {
            //ASYNC AWAIT CONTROLS THE PROMISE. ASYNC TELLS THE FUNCTION THAT IT IS ASYNCHRONOUS, AND AWAIT MAKE IT WAIT FOR THE CALL TO BE RESOLVED. /// USING .THEN WILL PROVIDE THE SAME RESULT.
            login: (username, password) => {
                fetch(`https://3000-aquamarine-squirrel-b8ivgwpl.ws-us03.gitpod.io/token`)
                    .then(resp => {
                        if (resp.ok) resp.json()
                        else if (resp.status === 401) {
                            console.log("Invalid credentials")
                        }
                        else if (resp.status === 400) {
                            console.log("Invalid email or password format")
                        } else throw Error('Uknon error')
                    })
                    .then(data => {
                        // save your token in the localStorage
                        localStorage.setItem("jwt-token", data.token);
                    })
                    .catch(error => console.error("There has been an uknown error", error))


            },
            getFavorites: (username, password) => {
                // retrieve token form localStorage
                const token = localStorage.getItem('jwt-token');

                fetch(`https://3000-aquamarine-squirrel-b8ivgwpl.ws-us03.gitpod.io/favorite`, {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + token } // ⬅ authorization token
                })
                    .then(resp => {
                        if (resp.ok) resp.json();
                        else if (resp.status === 403) {
                            console.log("Missing or invalid token");
                        }
                        else {
                            throw Error('Unknown error');
                        }
                    })
                    .then(data => {
                        // success
                        console.log("This is the data your requested", data);
                        setStore({ favorite: data });
                    })
                    .catch(error => console.error("There has been an uknown error", error));

            },
            logout: () => {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("favorites");
                setStore({ token: null, favorites: [] });
            },
            fetchPeople: async () => {
                const url = 'https://3000-aquamarine-squirrel-b8ivgwpl.ws-us03.gitpod.io/people';
                const config = {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                const response = await fetch(url, config);
                const data = await response.json();
                setStore({people: data, loadedPeople: true});
            },
            fetchPlanets: async () => {
                const url = 'https://3000-aquamarine-squirrel-b8ivgwpl.ws-us03.gitpod.io/planet';
                const config = {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                const response = await fetch(url, config);
                const data = await response.json();
                setStore({ planets: data, loadedPlanets: true });
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
    }
}

export default getState;
