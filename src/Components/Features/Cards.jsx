import React from 'react';

const Cards = (probs) => {
    return ( 
        <>
            <div className="card-wrapper">
                <div className="d-flex">
                    <div className="card-img">
                        <img className="border rounded-circle" src={probs.img} alt="aa" />
                    </div>
                    <div className="card-content">
                        <h4 className="fw-bold">{probs.title}</h4>
                        <p>{probs.description}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cards;