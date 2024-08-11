import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Personajes from "./views/Personajes";
import PersonajeDetalle from "./views/PersonajeDetalle";
import Planetas from "./views/Planetas";
import PlanetaDetalle from "./views/PlanetaDetalle";
import Vehiculos from "./views/Vehiculos";
import VehiculoDetalle from "./views/VehiculoDetalle";
//create your first component
const Layout = () => {
	
	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/personajes/:uid" element={<PersonajeDetalle />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/planetas/:uid" element={<PlanetaDetalle />} />
						<Route path="/vehiculos" element={<Vehiculos />} />
						<Route path="/vehiculos/:uid" element={<VehiculoDetalle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
