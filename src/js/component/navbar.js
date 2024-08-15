import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarWars from "../../img/StarWars-logo.png";
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		actions.getPersonajes();
		actions.getPlanetas();
		actions.getVehiculos();
	}, []);

	useEffect(() => {
		const allItems = [
			...store.personajes.map((item) => ({ ...item, type: 'personajes' })),
			...store.planetas.map((item) => ({ ...item, type: 'planetas' })),
			...store.vehiculos.map((item) => ({ ...item, type: 'vehiculos' })),
		];
		if (searchQuery.length > 0) {
			const filteredSuggestions = allItems.filter((item) =>
				item.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	}, [searchQuery, store]);

	const handleSearch = (e) => {
		if (e.key === "Enter") {
			if (suggestions.length > 0) {
				const selected = suggestions[0];
				navigate(`/${selected.type}/${selected.uid}`);
			} else {
				alert("No se encontró el elemento.");
			}
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-black ">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img
						src={StarWars}
						alt="logo-starwars"
						className="logo-SW"
						style={{ width: '100px', height: 'auto' }}
					/>
				</Link>
				<div className="d-flex mx-3" style={{ flex: 1 }}>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Buscar"
						aria-label="Buscar"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyDown={handleSearch}
						list="suggestions"
						style={{ borderColor: 'yellow' }} // Cambia el borde a amarillo
					/>
					<datalist id="suggestions">
						{suggestions.map((suggestion, index) => (
							<option key={index} value={suggestion.name}>
								{suggestion.name}
							</option>
						))}
					</datalist>
				</div>
				<button
					className="navbar-toggler bg-white"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/personajes">Personajes</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/planetas">Planetas</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/vehiculos">Vehiculos</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-warning"
								href="#"
								id="favoritesDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Favoritos <FaHeart /> ({store.favoritos.length})
							</a>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
								{store.favoritos.length === 0 ? (
									<li className="dropdown-item text-center">No hay favoritos</li>
								) : (
									store.favoritos.map((fav, index) => (
										<li key={index} className="dropdown-item">
											<Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none text-dark">
												{fav.name}
											</Link>
											<button
												className="btn btn-sm btn-danger ms-2"
												onClick={() => actions.removeFromFavorites(fav.uid)}
											>
												&times;
											</button>
										</li>
									))
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
