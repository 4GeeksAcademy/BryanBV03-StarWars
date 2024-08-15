import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// VARIABLES GENERALES
			personajes: [],
			planetas: [],
			vehiculos: [],
			// VARIABLES ESPECIFICAS
			personaje: [],
			planeta: [],
			vehiculo: [],
			getUrlImgPersonajes: [],
			getUrlImgPlanetas: [],
			getUrlImgVehiculos: [],
			favoritos: [],

		},
		actions: {
			// FUNCIONES GENERALES
			getPersonajes: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/people/")
					if (response.data) {
						console.log(response.data)
						setStore({ personajes: response.data.results })
					}
				} catch (error) {
					console.log("Ha habido un error con los personajes" + error)
				}
			},
			getPlanetas: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/planets/")
					if (response.data) {
						console.log(response.data)
						setStore({ planetas: response.data.results })
					}
				} catch (error) {
					console.log("Ha habido un error con los planetas" + error)
				}
			},
			getVehiculos: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/vehicles/")
					if (response.data) {
						console.log(response.data)
						setStore({ vehiculos: response.data.results })
					}
				} catch (error) {
					console.log("Ha habido un error con los vehiculos" + error)
				}
			},
			// FUNCIONES ESPECIFICAS
			getPersonaje: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/people/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ personaje: response.data.result.properties })
					}
				} catch (error) {
					console.log("Ha habido un error con los personajes" + error)
				}
			},
			getPlaneta: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/planets/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ planeta: response.data.result.properties })
					}
				} catch (error) {
					console.log("Ha habido un error con los planetas" + error)
				}
			},
			getVehiculo: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/vehicles/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ vehiculo: response.data.result.properties })
					}
				} catch (error) {
					console.log("Ha habido un error con los vehiculos" + error)
				}
			},
			//Funciones para obtener las imagenes
			getUrlImgPersonajes: (id) => {
				return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
			},
			getUrlImgVehiculos: (id) => {
				return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
			},
			getUrlImgPlanetas: (id) => {
				if (id === "1") {
					return "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";
				} else {
					return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
				}
			},
			addToFavorites: (item) => {
				const store = getStore();
				// Evitar duplicados
				if (!store.favoritos.find(fav => fav.uid === item.uid)) {
					setStore({ favoritos: [...store.favoritos, item] });
				}
			},
			removeFromFavorites: (uid) => {
				const store = getStore();
				setStore({ favoritos: store.favoritos.filter(fav => fav.uid !== uid) });
			},
		},
	};
};

export default getState;
