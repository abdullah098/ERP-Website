import React from 'react';
import Card from './../Common/Card';
import Store from '../../Assets/store.svg';
import Boxes from '../../Assets/boxes.svg';
import Sketch from '../../Assets/sketch (1).svg';

const Solution = () => {

    const cards = [
        {
            title: 'Construction Industries', 
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Store,
            link: '/'
        },
        {
            title: 'Construction Retail Stores', 
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Sketch,
            link: '/'
        },
        {
            title: 'Construction Warehouses', 
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Boxes,
            link: '/'
        }
    ]


    return (
        <>
            <div className="solution border border-secondary">
                <div className="solution-content border border-danger">
                    <h1 className="fw-bold m-0">We Provide Solution for Different Businesses</h1>
                    <p >This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.</p>

                    <div className="row">
                        {cards.map((card, index) => (
                            <div className="col-4" key={index}>
                                <Card 
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    link={card.link}

                                 />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Solution;