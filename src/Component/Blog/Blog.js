import React from 'react';
import Card from './Card';
import "../Portfolio/portfolio.css";
import "./blog.css";
import BlogApi from "./BlogApi";

const Blog = () => {
    return (
        <>
        <section className="portfolio blog" id="blog">
            <div className="container">
                <div className="heading text-center">
                    <h4>Visite o meu blog</h4>
                    <h1>Meu Blog</h1>
                </div>
                
                <div className="content grid">
                    {BlogApi.map((value, index)=>{
                        return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} 
                        desc_one={value.desc_one} />
                    })}
                </div>
            </div>
        </section>
    </>
    )
}

export default Blog