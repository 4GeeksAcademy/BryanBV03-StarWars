import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
import { useContext } from "react";




function Personajes() {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.getPersonajes();
    },[])
    return (
        <div>
            <h1>Personajes</h1>
            <div className="row mx-4">
                {store.personajes.map((personaje) => (
                    <div key={personaje.uid} className="col-4 my-3">
                        <Card name={personaje.name} uid={personaje.uid} type={"personajes"}></Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Personajes