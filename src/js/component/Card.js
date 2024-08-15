import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleFavorite = () => {
        actions.addToFavorites({ uid: props.uid, name: props.name, img: props.img, type: props.type });
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="star-wars-card card">
                <img
                    className="card-img-top star-wars-card-image"
                    src={props.img}
                    alt={props.name}
                />
                <div className="card-body star-wars-card-content p-3">
                    <h3 className="card-title star-wars-card-title">{props.name}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <button
                            type="button"
                            className="boton1"
                            onClick={() => navigate(`/${props.type}/${props.uid}`)}
                        >
                            Descripción
                        </button>
                        <button
                            type="button"
                            className="boton2"
                            onClick={handleFavorite}
                        >
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
