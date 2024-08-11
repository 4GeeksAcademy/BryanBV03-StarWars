import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-black ">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img
						src = {StarWars}
						alt="logo-starwars"
						className="logo-SW"
						style={{ width: '100px', height: 'auto' }} // Ajusta el tamaño del logo según sea necesario
					/>
				</Link>
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
					<ul className="navbar-nav ms-auto ">
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/personajes">Personajes</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/planetas">Planetas</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/vehiculos">Vehiculos</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-warning" to="/contact">Favoritos</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
