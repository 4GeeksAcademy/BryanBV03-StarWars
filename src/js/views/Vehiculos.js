import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
import { useContext } from "react";




function Vehiculos() {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.getVehiculos();
    }, [])
    return (
        <div>
            <h1>Vehiculos</h1>
            <div className="row mx-4">
                {store.vehiculos.map((vehiculo) => (
                    <div key={vehiculo.uid} className="col-4 my-3">
                        <Card name={vehiculo.name} uid={vehiculo.uid} type={"vehiculos"}></Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Vehiculos