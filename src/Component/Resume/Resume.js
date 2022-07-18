import React from 'react';
import Card from './Card';
import ResumeApi from './ResumeApi';

const Resume = () => {

    return (
        <>
            <section className="Resume" id="resume">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>1 ano de experiência como estagiária</h4>
                        <h1>Meu currículo</h1>
                    </div>

                    <div className="content-section mtop d_flex">
                        <div className="left">
                            <div className="heading">
                                <h4>2011-2018</h4>
                                <h1>Educação</h1>
                            </div>

                            <div className="content">
                                {ResumeApi.map((value,id) => {
                                    if(value.category === "educação"){
                                        return <Card key={id} title={value.title} year={value.year} rate={value.rate} des={value.desc} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume