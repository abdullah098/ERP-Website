import React from 'react';
import { ReactComponent as ArrowRight } from '../../Assets/ArrowRight.svg';

const Card = (probs) => {
    return (
        <div className="primary-card">
            <div className="card-image">
                <img className="rounded-circle" src={probs.image} alt="" />
            </div>
            <div className="card-content text-center">
                <h4 className="fw-bold"> {probs.title} </h4>
                <p>{probs.description}</p>
            </div>

            {probs.link &&
                <div className="card-f text-center">
                    <a href={probs.link}>Learn More <span>{<ArrowRight />}</span></a>
                </div>
            }

        </div>
    );
}

export default Card;