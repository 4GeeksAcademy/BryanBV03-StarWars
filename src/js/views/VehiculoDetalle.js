import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

function VehiculoDetalle() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        const getDataFromAPI = async () => {
            await actions.getVehiculo(uid);
        };
        getDataFromAPI();
    }, [uid]);

    const { vehiculo } = store;

    return (
        <div className="vehiculo-detalle">
            {vehiculo ? (
                <>
                    <h2 className="vehiculo-titulo">{vehiculo.name}</h2>
                    <div className="vehiculo-info">
                        <p><strong>Modelo:</strong> {vehiculo.model}</p>
                        <p><strong>Fabricante:</strong> {vehiculo.manufacturer}</p>
                        <p><strong>Clase de Vehículo:</strong> {vehiculo.vehicle_class}</p>
                        <p><strong>Longitud:</strong> {vehiculo.length}</p>
                        <p><strong>Velocidad Atmosférica Máxima:</strong> {vehiculo.max_atmosphering_speed}</p>
                        <p><strong>Capacidad de Carga:</strong> {vehiculo.cargo_capacity}</p>
                        <p><strong>Consumo:</strong> {vehiculo.consumables}</p>
                        <p><strong>Costo en Créditos:</strong> {vehiculo.cost_in_credits}</p>
                        <p><strong>Tripulación:</strong> {vehiculo.crew}</p>
                        <p><strong>Pasajeros:</strong> {vehiculo.passengers}</p>
                        <p><strong>Creado:</strong> {new Date(vehiculo.created).toLocaleDateString()}</p>
                        <p><strong>Editado:</strong> {new Date(vehiculo.edited).toLocaleDateString()}</p>
                        <p><strong>URL:</strong> <a href={vehiculo.url} target="_blank" rel="noopener noreferrer">{vehiculo.url}</a></p>
                    </div>
                </>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
}

export default VehiculoDetalle;

