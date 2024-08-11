import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from "../store/appContext";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    return (
        <div className="star-wars-card">
            <img
                className="star-wars-card-image"
                src={props.img}
                alt={props.name} />
            <div className="star-wars-card-content">
                <h3 className="star-wars-card-title">{props.name}</h3>
                <div className="star-wars-card-buttons">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => navigate(`/${props.type}/${props.uid}`)}
                    >
                        Description
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Card;
