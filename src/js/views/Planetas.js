import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
import { useContext } from "react";




function Planetas() {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.getPlanetas();
    },[])
    return (
        <div>
            <h1>Planetas</h1>
            <div className="row mx-4">
                {store.planetas.map((planeta) => (
                    <div key={planeta.uid} className="col-4 my-3">
                        <Card name={planeta.name} uid={planeta.uid} type={"planetas"}></Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Planetas