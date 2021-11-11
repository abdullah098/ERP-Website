import React from 'react';
import { ReactComponent as ArrowBlueRight } from '../../Assets/ArrowBlueRight.svg';

const CustomCard2 = (probs) => {
    return (
        <>
            <div className="custom-card2">

                <div className="card-image rounded-circle">
                    <img className="rounded-circle" src={probs.image} alt="" />
                </div>

                <div className="card-content">
                    <h4 className="fw-bold"> {probs.title} </h4>
                    <p>{probs.description}</p>
                </div>
                <div className="card-f">
                    <a href={probs.link}>Learn More <span>{<ArrowBlueRight />}</span></a>
                </div>

            </div>
        </>
    );
}

export default CustomCard2;