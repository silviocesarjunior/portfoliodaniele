import React from 'react';
import Card from './Card';
import "./portfolio.css";
import Portfolio_data from "./Portfolio_data";


const Portfolio = () => {
    return (
        <>
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>Visite o meu portfolio</h4>
                        <h1>Meu Portfolio</h1>
                    </div>
                    
                    <div className="content grid">
                        {Portfolio_data.map((value, index)=>{
                            return <Card key={index} image={value.image} category={value.category} content={value.content} title={value.title} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio