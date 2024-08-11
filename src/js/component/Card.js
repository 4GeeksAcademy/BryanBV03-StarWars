import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from "../store/appContext";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="star-wars-card card">
                <img
                    className="card-img-top star-wars-card-image"
                    src={props.img}
                    alt={props.name}
                />
                <div className="card-body star-wars-card-content">
                    <h3 className="card-title star-wars-card-title">{props.name}</h3>
                    <div className="star-wars-card-buttons">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => navigate(`/${props.type}/${props.uid}`)}
                        >
                            Descripción
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
