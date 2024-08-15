import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getPersonajes();
        actions.getPlanetas();
        actions.getVehiculos();
    }, []);

    return (
        <>
            <div className="home-container">
                <div className="welcome-section text-center mt-5">
                    <h1>Bienvenido a la Galaxia Star Wars</h1>
                    <p>Explora el vasto universo de Star Wars con nuestra base de datos completa de personajes, planetas y vehículos.</p>
                </div>       
            </div>
        </>
    );
};

