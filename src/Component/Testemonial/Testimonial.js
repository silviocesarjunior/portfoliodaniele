import React, { useState, useEffect } from "react"
import Slide from "./Slide";
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
    const [data, setdata] = useState(TestimonialApi)
    const [index, setIndex] = useState(0)
    return (
        <>
            <section className="Testimonial" id="clients">
                <div className="container">
                    <div className="heading text-center">
                        <h4>O que os clientes dizem:</h4>
                        <h1>Depoimento</h1>
                    </div>

                    <div className="slide">
                        {data.map((value, valueIndex) => {
                            return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index}/>
                        })}

                        <div className="slide_button">
                            <button className="btn_shadow prev_btn">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button className="btn_shadow next_btn">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial