import React from 'react';
import { ReactComponent as Tick } from '../../Assets/tickBlue.svg';
import clsx from "clsx";
import {Link} from 'react-router-dom'


const PricingCard = ({ data }) => {

    const { id, img_src, title, price, description, recomanded, features } = data;

    return (
        <>
            {/* <div className="pricing-card-wrapper border position-relative"> */}

            <div className={`pricing-card-wrapper position-relative ${
                recomanded ? 'pricing-card-wrapper-active' : ''
            }`}>

                {recomanded && <div className="recomanded text-center border ">
                    <h6>Recomanded</h6>
                </div>}

                <div className="pricing-card-img text-center rounded-circle border">
                    <img className=" border" src={img_src} alt="pic" />
                </div>
                <h1 className="fw-bold text-center">{price} <span>/ month</span></h1>
                <h4 className="fw-bold text-center">{title}</h4>
                <p className="text-center">{description}</p>

                <ul className="text-start features-wrapper">
                    {features.map((item, index) => (
                        <li key={index}>
                            <li className={clsx(!item.active && "in-active")}>
                                <Tick className="tick-icon" /> {item.title}</li>
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    <Link to={`/pricing-plan/${id}`}>
                        <button className="btn btn-primary">Chosse Plan</button>
                    </Link>
                </div>


            </div>
        </>
    );
}

export default PricingCard;