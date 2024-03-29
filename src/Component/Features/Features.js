import React from 'react';
import Card from './Card';
import data from './FeaturesApi';
import "./features.css";

const Features = () => {
    return (
        <>
            <section className="features top" id="features">
                <div className="container_features">
                    <div className="heading_features">
                        <h4>Serviços</h4>
                        <h1>O que eu faço</h1>
                    </div>
                    <div className="content grid">
                        {data.map((val, index)=>{
                            return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features