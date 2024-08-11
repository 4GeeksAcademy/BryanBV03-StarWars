import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

function PlanetaDetalle() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        const getDataFromAPI = async () => {
            await actions.getPlaneta(uid);
        };
        getDataFromAPI();
    }, [uid]);

    const { planeta } = store;

    return (
        <div className="planeta-detalle">
            {planeta ? (
                <>
                    <h2>{planeta.name}</h2>
                    <p><strong>Clima:</strong> {planeta.climate}</p>
                    <p><strong>Creado:</strong> {planeta.created}</p>
                    <p><strong>Diámetro:</strong> {planeta.diameter}</p>
                    <p><strong>Editado:</strong> {planeta.edited}</p>
                    <p><strong>Gravedad:</strong> {planeta.gravity}</p>
                    <p><strong>Periodo orbital:</strong> {planeta.orbital_period}</p>
                    <p><strong>Población:</strong> {planeta.population}</p>
                    <p><strong>Periodo de rotación:</strong> {planeta.rotation_period}</p>
                    <p><strong>Agua en superficie:</strong> {planeta.surface_water}</p>
                    <p><strong>Terreno:</strong> {planeta.terrain}</p>
                    <p><strong>URL:</strong> <a href={planeta.url}>{planeta.url}</a></p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PlanetaDetalle;
