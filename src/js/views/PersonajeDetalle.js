import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


function PersonajeDetalle() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        const getDataFromAPI = async () => {
            await actions.getPersonaje(uid);
        }
        getDataFromAPI();
    }, [uid]);

    const { personaje } = store;

    return (
        <div className="personaje-detalle">
            {personaje ? (
                <>
                    <h1>{personaje.name}</h1>
                    <p><strong>Birth Year:</strong> {personaje.birth_year}</p>
                    <p><strong>Eye Color:</strong> {personaje.eye_color}</p>
                    <p><strong>Gender:</strong> {personaje.gender}</p>
                    <p><strong>Hair Color:</strong> {personaje.hair_color}</p>
                    <p><strong>Height:</strong> {personaje.height}</p>
                    <p><strong>Homeworld:</strong> <a href={personaje.homeworld}>Homeworld Link</a></p>
                    <p><strong>Mass:</strong> {personaje.mass}</p>
                    <p><strong>Skin Color:</strong> {personaje.skin_color}</p>
                    <p><strong>URL:</strong> <a href={personaje.url}>{personaje.url}</a></p>
                    <p><strong>Created:</strong> {new Date(personaje.created).toLocaleString()}</p>
                    <p><strong>Edited:</strong> {new Date(personaje.edited).toLocaleString()}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PersonajeDetalle;

 