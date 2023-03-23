import React from 'react';
import Card from './Card';
import "./portfolio.css";
import Portfolio_data from "./Portfolio_data";


const Portfolio = () => {
    return (
        <>
        <div className="divPortfolio">
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>Visite o meu Portfólio</h4>
                    </div>
                    
                    <div className="content grid">
                        {Portfolio_data.map((value, index)=>{
                            return <Card key={index} image={value.image} category={value.category} content={value.content} title={value.title} />
                        })}
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Portfolio