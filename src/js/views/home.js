import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();
	useEffect(() => {
		actions.getPersonajes();
		actions.getPlanetas();
		actions.getVehiculos();


	}, []);
	return (
		<>
			<div className="text-center mt-5">
				<button type="button" className="btn btn-success" onClick={() => navigate("/personajes")}>
					PERSONAJES
				</button>
			</div>
			<div className="text-center mt-5">
				<button type="button" className="btn btn-success" onClick={() => navigate("/planetas")}>
					PLANETAS
				</button>
			</div>
			<div className="text-center mt-5">
				<button type="button" className="btn btn-success" onClick={() => navigate("/vehiculos")}>
					VEHICULOS
				</button>
			</div>
		</>

	);

};


